const { spawn } = require("child_process");
const http = require("http");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "assets", "Ravi_K_Gupta_Resume.pdf");

const server = http.createServer((req, res) => {
  const urlPath = req.url.split("?")[0];
  let filePath = path.join(__dirname, urlPath === "/" ? "index.html" : urlPath);

  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".txt": "text/plain",
  };

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("File not found");
    } else {
      res.writeHead(200, { "Content-Type": mimeTypes[ext] || "text/plain" });
      res.end(content, "utf-8");
    }
  });
});

server.listen(0, "127.0.0.1", () => {
  const port = server.address().port;
  console.log(`Generating PDF on port ${port}...`);
  const targetUrl = `http://127.0.0.1:${port}/`;

  const chromeProc = spawn(
    "google-chrome",
    [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--disable-dev-shm-usage",
      "--no-pdf-header-footer",
      `--print-to-pdf=${outputPath}`,
      targetUrl,
    ],
    { detached: true, stdio: "ignore" }
  );

  chromeProc.unref();

  let checkCount = 0;
  const initialMtime = fs.existsSync(outputPath) ? fs.statSync(outputPath).mtimeMs : 0;

  const interval = setInterval(() => {
    checkCount++;
    const exists = fs.existsSync(outputPath);
    const mtime = exists ? fs.statSync(outputPath).mtimeMs : 0;
    const size = exists ? fs.statSync(outputPath).size : 0;

    if (exists && size > 10000 && (mtime > initialMtime || checkCount > 5)) {
      clearInterval(interval);
      console.log("Successfully generated assets/Ravi_K_Gupta_Resume.pdf!");
      try {
        process.kill(-chromeProc.pid);
      } catch (e) {}
      process.exit(0);
    }

    if (checkCount > 40) {
      clearInterval(interval);
      console.log("Done.");
      process.exit(0);
    }
  }, 250);
});
