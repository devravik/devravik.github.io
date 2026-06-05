'use strict';

function generateSeoArticle(page) {
  // Extract keywords
  const titleText = page.title.split('-')[0].trim();
  const rawH1 = page.h1 ? page.h1.replace(/<br>/gi, ' ') : titleText;
  const description = page.description;
  const category = page.category || 'general';

  // Feature expansion
  const featHTML = (page.features && page.features.length > 0) ? `
    <h3>Core Capabilities of ${titleText}</h3>
    <p>Using a dedicated solution brings significant advantages. Here is what you get out of the box:</p>
    <ul>
      ${page.features.map(f => `<li><strong>${f.title}:</strong> ${f.body}</li>`).join('')}
    </ul>
  ` : '';

  let bodyText = '';

  if (category === 'household') {
    bodyText = `
      <h2>Why Choose a Dedicated App for ${rawH1}?</h2>
      <p>${description} Managing household staff requires trust, clarity, and precise record-keeping. Whether you are tracking attendance for a maid, cook, driver, nanny, or gardener, maintaining a clear log of their presence and salary payments prevents disputes and ensures fair compensation. Relying on paper registers or memory often leads to mistakes, lost records, and confusion at the end of the month.</p>
      <p>AttendAssist replaces traditional methods with a robust, digital-first approach to household staff management. The app is entirely offline, meaning your sensitive domestic helper data never leaves your device. You can log daily attendance with a single tap, track advances or bonuses accurately, and generate comprehensive monthly reports without any complex setup or required internet connection.</p>
    `;
  } else if (category === 'payroll' || category === 'business') {
    bodyText = `
      <h2>Optimizing ${rawH1} for Small Teams</h2>
      <p>${description} For small businesses, retail shops, and warehouses, tracking employee attendance and payroll accurately is essential for maintaining profitability and operational efficiency. Manual tracking methods like spreadsheets or paper logs are time-consuming and prone to human error, which can lead to payroll discrepancies and employee dissatisfaction.</p>
      <p>By switching to a specialized, offline-first employee tracker, you streamline the entire payroll process. AttendAssist allows you to seamlessly integrate daily attendance tracking with salary and payment history. You can record base salaries, track bonuses or advances, and view complete payment timelines for every staff member. Because it operates 100% offline, you don't have to worry about data privacy, server downtimes, or subscription fees.</p>
    `;
  } else if (category === 'tenants') {
    bodyText = `
      <h2>Simplifying ${rawH1} for Landlords</h2>
      <p>${description} As a landlord or property manager, keeping track of monthly rent collections, security deposits, and tenant payment histories can quickly become overwhelming. Without a structured system, it is easy to lose track of who has paid, who is pending, and what deposits need to be returned at the end of a lease.</p>
      <p>AttendAssist provides a highly organized, digital ledger designed specifically for rent and tenant management. It allows you to maintain detailed tenant profiles, track rent status (paid, pending, or partial), and manage security deposits efficiently. The app generates yearly summaries for easy tax filing and financial planning, all while keeping your sensitive financial data securely stored offline on your phone.</p>
    `;
  } else if (category === 'classroom') {
    bodyText = `
      <h2>The Best Approach to ${rawH1}</h2>
      <p>${description} Tutors, coaching centers, and educators need an efficient way to manage student attendance and fee collection without wasting valuable teaching time. Traditional roll calls and paper fee ledgers are inefficient and difficult to share with parents or administrators when questions arise.</p>
      <p>With AttendAssist, educators can utilize bulk attendance features to mark an entire class in seconds. The app also integrates tuition fee tracking, allowing you to record payments, monitor pending dues, and view comprehensive per-student histories. Whether you manage a small private tutoring group or a multi-batch coaching center, this offline app ensures your records are accurate, easily accessible, and fully exportable.</p>
    `;
  } else if (category === 'tools') {
    bodyText = `
      <h2>Maximizing Value with ${rawH1}</h2>
      <p>${description} Financial planning and everyday calculations often require switching between multiple specialized apps. Whether you are calculating the future value of a Systematic Investment Plan (SIP), estimating loan EMIs, figuring out GST for a business invoice, or simply converting units, having all these tools in one place saves time and device storage.</p>
      <p>AttendAssist includes a comprehensive suite of 28 built-in financial calculators and utilities at no extra cost. From fixed deposit and salary calculators to age and date difference tools, everything runs instantly and completely offline. There are no ads, no paywalls, and no data collection, making it the most private and reliable calculator suite available on your mobile device.</p>
    `;
  } else if (category === 'blog' || category === 'comparison') {
    bodyText = `
      <h2>Deep Dive: ${rawH1}</h2>
      <p>${description} Finding the right tool and methodology for tracking attendance, managing staff, or handling payroll can drastically improve your daily productivity. Many users start with spreadsheets or paper registers, only to realize that as their needs grow, these manual systems break down, leading to errors and lost data.</p>
      <p>In our comprehensive comparison, we highlight why a dedicated, offline-first application like AttendAssist offers superior performance. By providing structured data entry, auto-generated reports, and privacy-focused local storage, it outperforms traditional methods and bloated cloud software. Users benefit from one-tap data entry, seamless CSV exports, and a completely ad-free experience without ever needing an account.</p>
    `;
  } else {
    // Default / General
    bodyText = `
      <h2>A Complete Solution for ${rawH1}</h2>
      <p>${description} Whether you are managing household staff, small business employees, tenants, or classroom students, having a unified tracking system is critical. Managing multiple entities across different apps or spreadsheets creates friction and increases the likelihood of errors.</p>
      <p>AttendAssist is built to be the ultimate offline tracker. It combines attendance logging, payroll management, rent collection, and student tracking into a single, intuitive interface. Because the app operates entirely on your local device using SQLite, it guarantees absolute privacy, requires zero network requests, and is completely free forever-with no ads or subscriptions.</p>
    `;
  }

  return `
  <section class="seo-article">
    <div class="container seo-inner">
      ${bodyText}
      ${featHTML}
      <h3>Why Privacy and Offline-First Matter</h3>
      <p>In today's digital landscape, most applications require you to create accounts, verify emails, and sync your private data to cloud servers. AttendAssist takes a radically different approach. <strong>Privacy is not just a feature; it is the foundation.</strong> Your attendance records, payroll figures, and tenant details never leave your phone. The app operates with zero network requests, making it the best offline attendance app for remote areas, basements, or worksites with poor connectivity. Plus, you maintain full data portability with the ability to export all records to JSON or CSV formats at any time.</p>
    </div>
  </section>`;
}

function generateFaqSection(page) {
  const titleText = page.title.split('-')[0].trim();
  const rawH1 = page.h1 ? page.h1.replace(/<br>/gi, ' ') : titleText;
  const category = page.category || 'general';

  let faqs = [];

  if (category === 'household') {
    faqs = [
      { q: `Is the ${rawH1} app completely free?`, a: `Yes, AttendAssist provides all ${titleText} features completely free of charge. There are no ads, no subscriptions, and no hidden in-app purchases.` },
      { q: `Does tracking ${titleText} require an internet connection?`, a: `No. Our app operates 100% offline. You can mark attendance, calculate salaries, and view reports for your household staff without any internet access.` },
      { q: `Can I export the data from the ${rawH1} tracker?`, a: `Absolutely. You can export your staff attendance and payroll data directly to CSV or JSON formats at any time for easy backup or sharing.` },
      { q: `Do I need to create an account to use the app?`, a: `No account is required. We prioritize your privacy, meaning there is no sign-up, no email verification, and no cloud syncing. All data remains securely on your device.` }
    ];
  } else if (category === 'payroll' || category === 'business') {
    faqs = [
      { q: `How does the ${rawH1} software handle data privacy?`, a: `AttendAssist is a privacy-first application. All employee attendance and payroll data is stored locally on your device via SQLite. We do not use cloud servers, so your business data is never shared.` },
      { q: `Is this ${titleText} solution suitable for small businesses?`, a: `Yes, it is designed specifically for small businesses, retail shops, and warehouses. You get comprehensive payroll tracking, attendance logs, and exportable reports without the bloat of enterprise HR systems.` },
      { q: `Can I export the payroll reports to Excel?`, a: `Yes! Every monthly attendance summary and payroll report can be instantly exported to CSV, which opens perfectly in Microsoft Excel, Google Sheets, or your preferred accounting software.` },
      { q: `Does it cost anything to use the ${rawH1} features?`, a: `No. All business tracking features are provided 100% free with no subscription tiers or advertisements.` }
    ];
  } else if (category === 'tenants') {
    faqs = [
      { q: `Can I track multiple properties using the ${rawH1} app?`, a: `Yes, AttendAssist allows you to create detailed profiles for multiple tenants across different properties. You can individually track their rent payments, pending dues, and security deposits.` },
      { q: `Is my tenant data safe on this ${titleText} tracker?`, a: `Your data is exceptionally safe because the app operates completely offline. Rent and tenant payment histories are stored exclusively on your personal device, with zero cloud uploads.` },
      { q: `Does the app generate annual rent summaries?`, a: `Yes, it automatically compiles yearly rent collection summaries per tenant, which is extremely useful for personal financial planning and tax filing.` },
      { q: `Are there limits on how many tenants I can add?`, a: `There are absolutely no limits. You can add as many tenants as you need for free, with no paywalls or restrictions.` }
    ];
  } else if (category === 'classroom') {
    faqs = [
      { q: `Does the ${rawH1} app support bulk attendance marking?`, a: `Yes! You can mark attendance for an entire class or batch with a single tap, saving you valuable teaching time.` },
      { q: `Can I track tuition fees along with ${titleText}?`, a: `Absolutely. AttendAssist integrates attendance and fee management. You can record payments, track pending dues, and view complete payment histories for each student.` },
      { q: `Does it work without internet in a classroom setting?`, a: `Yes, the application is 100% offline. You can manage your entire coaching center or tutoring batch without needing an active Wi-Fi or cellular connection.` },
      { q: `Can I share attendance reports with parents?`, a: `Yes, you can easily export individual or batch-level attendance and fee reports to CSV and share them with parents directly from your device.` }
    ];
  } else if (category === 'tools') {
    faqs = [
      { q: `Are all 28 tools, including the ${rawH1}, completely free?`, a: `Yes, every single tool-including the ${titleText}-is included at no additional cost. There are no subscriptions and no ads.` },
      { q: `Does the ${rawH1} require internet to run calculations?`, a: `No. All financial calculations, currency conversions, and data processing happen locally on your device, ensuring instant results without lag.` },
      { q: `Is my financial data collected or tracked?`, a: `We do not collect, track, or sync any of your data. The app operates with zero network requests, so your financial planning remains strictly confidential.` }
    ];
  } else {
    faqs = [
      { q: `Is the ${rawH1} app really free?`, a: `Yes! AttendAssist offers all of its features completely free. There are no ads, no in-app purchases, and no subscription fees ever.` },
      { q: `Does it require an internet connection?`, a: `No, AttendAssist works entirely offline. All data is stored locally on your device. You don't need internet access for daily use.` },
      { q: `Do I need to create an account?`, a: `No account is needed. You can install the app and start using it immediately without providing an email, phone number, or any personal information.` },
      { q: `Can I export my data from the app?`, a: `Yes, you have full control over your data. You can export all your records as JSON or CSV files at any time.` }
    ];
  }

  const faqHtml = faqs.map(faq => `
    <details class="faq-item">
      <summary class="faq-question">${faq.q}</summary>
      <div class="faq-answer"><p>${faq.a}</p></div>
    </details>
  `).join('');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return `
  <section class="faq-section">
    <div class="container faq-inner">
      <h2>Frequently Asked Questions about ${titleText}</h2>
      <div class="faq-list">
        ${faqHtml}
      </div>
    </div>
  </section>
  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
  </script>`;
}

module.exports = { generateSeoArticle, generateFaqSection };
