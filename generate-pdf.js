const { spawn } = require("child_process");
const http = require("http");
const fs = require("fs");
const path = require("path");

const profiles = [
  { slug: "backend", filename: "Ravi_K_Gupta_Resume.pdf", copyAs: "Ravi_K_Gupta_Resume_backend.pdf" },
  { slug: "php-laravel", filename: "Ravi_K_Gupta_Resume_php-laravel.pdf" },
  { slug: "fullstack", filename: "Ravi_K_Gupta_Resume_fullstack.pdf" },
  { slug: "laravel-vue", filename: "Ravi_K_Gupta_Resume_laravel-vue.pdf" },
  { slug: "golang-nextjs", filename: "Ravi_K_Gupta_Resume_golang-nextjs.pdf" },
  { slug: "laravel-react", filename: "Ravi_K_Gupta_Resume_laravel-react.pdf" },
  { slug: "golang", filename: "Ravi_K_Gupta_Resume_golang.pdf" },
  { slug: "lead-backend", filename: "Ravi_K_Gupta_Resume_lead-backend.pdf" },
  { slug: "python-fastapi", filename: "Ravi_K_Gupta_Resume_python-fastapi.pdf" },
];

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

server.listen(0, "127.0.0.1", async () => {
  const port = server.address().port;
  console.log(`PDF Server running on port ${port}...`);

  for (const item of profiles) {
    const outputPath = path.join(__dirname, "assets", item.filename);
    const targetUrl = `http://127.0.0.1:${port}/?profile=${item.slug}`;

    console.log(`Generating PDF for profile [${item.slug}] -> assets/${item.filename}`);

    const initialMtime = fs.existsSync(outputPath) ? fs.statSync(outputPath).mtimeMs : 0;

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

    await new Promise((resolve) => {
      let checkCount = 0;
      const interval = setInterval(() => {
        checkCount++;
        const exists = fs.existsSync(outputPath);
        const mtime = exists ? fs.statSync(outputPath).mtimeMs : 0;
        const size = exists ? fs.statSync(outputPath).size : 0;

        if (exists && size > 10000 && (mtime > initialMtime || checkCount > 5)) {
          clearInterval(interval);
          try {
            process.kill(-chromeProc.pid);
          } catch (e) {}
          if (item.copyAs) {
            const copyPath = path.join(__dirname, "assets", item.copyAs);
            fs.copyFileSync(outputPath, copyPath);
            console.log(`Copied ${item.filename} -> assets/${item.copyAs}`);
          }
          resolve();
        } else if (checkCount > 40) {
          clearInterval(interval);
          console.warn(`Timeout waiting for ${item.filename}`);
          resolve();
        }
      }, 250);
    });
  }

  console.log("All 8 targeted PDF resumes generated successfully!");
  process.exit(0);
});
