
import React from 'react';
import { cn } from '@/lib/utils';

type MainContentProps = {
  isDarkMode: boolean;
};

type ExperienceProps = {
  company: string;
  position: string;
  period: string;
  location: string;
  details?: string[];
  isDarkMode: boolean;
};

const Experience = ({ company, position, period, location, details = [], isDarkMode }: ExperienceProps) => {
  return (
    <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <h3 className={cn(
        "text-lg font-semibold",
        isDarkMode ? "text-white" : "text-zinc-900"
      )}>{company}</h3>
      <h4 className={cn(
        "text-base font-medium",
        isDarkMode ? "text-zinc-300" : "text-zinc-700"
      )}>{position}</h4>
      <div className={cn(
        "text-sm",
        isDarkMode ? "text-zinc-400" : "text-zinc-500"
      )}>
        <span>{period}</span>
        <span className="mx-1">•</span>
        <span>{location}</span>
      </div>
      {details.length > 0 && (
        <ul className={cn(
          "mt-3 list-disc pl-5 space-y-1 text-sm",
          isDarkMode ? "text-zinc-300" : "text-zinc-700"
        )}>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const MainContent = ({ isDarkMode }: MainContentProps) => {
  return (
    <div className={cn(
      "p-6 md:p-10 w-full transition-colors duration-300",
      isDarkMode ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"
    )}>
      <header className="mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h1 className={cn(
          "text-3xl md:text-4xl font-bold mb-1",
          isDarkMode ? "text-white" : "text-zinc-900"
        )}>Ravi K.</h1>
        <div className={cn(
          "text-xl font-medium mb-3",
          isDarkMode ? "text-zinc-200" : "text-zinc-700"
        )}>Senior Backend Developer – Laravel | Go Fiber | React/Next.js</div>
        <div className={cn(
          "text-sm",
          isDarkMode ? "text-zinc-400" : "text-zinc-600"
        )}>📍 Delhi, India | ✉️ dev.ravikgupt@gmail.com</div>
      </header>
      
      <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className={cn(
          "text-xl font-bold mb-4 border-b pb-2",
          isDarkMode ? "border-zinc-700 text-white" : "border-zinc-200 text-zinc-900"
        )}>Professional Summary</h2>
        <p className={cn(
          "leading-relaxed",
          isDarkMode ? "text-zinc-300" : "text-zinc-700"
        )}>
          Experienced full-stack engineer with 10+ years of hands-on development, specializing in Laravel, Golang (Fiber), 
          and Next.js. Architected scalable SaaS platforms, real-time APIs, multi-tenant systems, and background job queues. 
          Focused on performance, security, and DX. Comfortable building admin dashboards, authentication systems, analytics 
          pipelines, and plugin licensing infrastructure. Open-source contributor with strong code quality discipline.
        </p>
      </section>

      <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.25s' }}>
        <h2 className={cn(
          "text-xl font-bold mb-4 border-b pb-2",
          isDarkMode ? "border-zinc-700 text-white" : "border-zinc-200 text-zinc-900"
        )}>Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h3 className={cn(
              "font-semibold mb-2",
              isDarkMode ? "text-white" : "text-zinc-900"
            )}>Backend</h3>
            <p className={cn(
              "text-sm",
              isDarkMode ? "text-zinc-300" : "text-zinc-700"
            )}>PHP 8.x, Laravel, Golang, Fiber, GORM, REST/GraphQL APIs</p>
          </div>
          
          <div>
            <h3 className={cn(
              "font-semibold mb-2",
              isDarkMode ? "text-white" : "text-zinc-900"
            )}>Frontend</h3>
            <p className={cn(
              "text-sm",
              isDarkMode ? "text-zinc-300" : "text-zinc-700"
            )}>Vue, React, Next.js 15+ (App Router), Tailwind, SSR, Hooks</p>
          </div>
          
          <div>
            <h3 className={cn(
              "font-semibold mb-2",
              isDarkMode ? "text-white" : "text-zinc-900"
            )}>CMS & Ecosystems</h3>
            <p className={cn(
              "text-sm",
              isDarkMode ? "text-zinc-300" : "text-zinc-700"
            )}>WordPress Plugin Dev, WP REST API, Statamic</p>
          </div>
          
          <div>
            <h3 className={cn(
              "font-semibold mb-2",
              isDarkMode ? "text-white" : "text-zinc-900"
            )}>Data & Infrastructure</h3>
            <p className={cn(
              "text-sm",
              isDarkMode ? "text-zinc-300" : "text-zinc-700"
            )}>PostgreSQL, MySQL, Redis, SQLite, SQL optimization, Queues</p>
          </div>
          
          <div>
            <h3 className={cn(
              "font-semibold mb-2",
              isDarkMode ? "text-white" : "text-zinc-900"
            )}>Architecture</h3>
            <p className={cn(
              "text-sm",
              isDarkMode ? "text-zinc-300" : "text-zinc-700"
            )}>Multi-tenant apps, Role/Permission systems, JWT auth, Webhooks, Rate Limiting</p>
          </div>
          
          <div>
            <h3 className={cn(
              "font-semibold mb-2",
              isDarkMode ? "text-white" : "text-zinc-900"
            )}>DevOps</h3>
            <p className={cn(
              "text-sm",
              isDarkMode ? "text-zinc-300" : "text-zinc-700"
            )}>Git, Docker, Vercel, Railway, Cloudflare, AWS (S3, EC2, SES, RDS)</p>
          </div>
        </div>
      </section>
      
      <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <h2 className={cn(
          "text-xl font-bold mb-4 border-b pb-2",
          isDarkMode ? "border-zinc-700 text-white" : "border-zinc-200 text-zinc-900"
        )}>Experience</h2>
        
        <Experience 
          company="Freelance / Remote" 
          position="Senior Software Engineer" 
          period="Oct 2018 - Present" 
          location="Delhi, India"
          isDarkMode={isDarkMode}
          details={[
            "Leading architecture for multiple Laravel and Go Fiber-based backend services supporting queue-heavy workflows and analytics pipelines.",
            "Designed JWT-authenticated multi-tenant APIs powering real-time dashboards in Next.js apps.",
            "Implemented automatic billing, subscription management, webhook handling, and fraud protection using PayPal/Stripe.",
            "Created admin panels using React/Next.js (App Router), with role-based access control and audit logging.",
            "Built Go-based services to broadcast WebSocket updates, manage background workers, and sync databases in multi-instance setups.",
          ]}
        />
        
        <Experience 
          company="Infoicon Technologies" 
          position="Senior Programmer" 
          period="Jun 2015 - Oct 2018" 
          location="Noida, India" 
          isDarkMode={isDarkMode}
          details={[
            "Built scalable business applications using Laravel, CI, and jQuery.",
            "Designed REST APIs and dashboards for CRM, HRMS, and B2B clients.",
            "Integrated Razorpay, PayU, SMS, and analytics providers."
          ]}
        />
        
        <Experience 
          company="Webzesty Pvt. Ltd." 
          position="Senior Web Developer" 
          period="Apr 2014 - Jun 2015" 
          location="Delhi, India" 
          isDarkMode={isDarkMode}
          details={[
            "Custom PHP projects with CMS-like functionality and dynamic dashboards."
          ]}
        />
        
        <Experience 
          company="SunHill" 
          position="Web Developer" 
          period="Aug 2013 - Apr 2014" 
          location="Delhi, India" 
          isDarkMode={isDarkMode}
          details={[
            "Entry-level dev role with WordPress-based websites and admin tools."
          ]}
        />
      </section>
      
      <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h2 className={cn(
          "text-xl font-bold mb-4 border-b pb-2",
          isDarkMode ? "border-zinc-700 text-white" : "border-zinc-200 text-zinc-900"
        )}>Education</h2>
        <div>
          <h3 className={cn(
            "text-lg font-semibold",
            isDarkMode ? "text-white" : "text-zinc-900"
          )}>Uttar Pradesh Technical University</h3>
          <p className={cn(
            "text-base",
            isDarkMode ? "text-zinc-300" : "text-zinc-700"
          )}>Bachelor of Technology (B.Tech.), Computer Science</p>
          <p className={cn(
            "text-sm",
            isDarkMode ? "text-zinc-400" : "text-zinc-500"
          )}>2008 - 2012</p>
        </div>
      </section>
      
      <footer className={cn(
        "text-center text-sm pt-4 border-t mt-10 animate-fade-in",
        isDarkMode ? "border-zinc-700 text-zinc-400" : "border-zinc-200 text-zinc-500"
      )} style={{ animationDelay: '0.5s' }}>
        <p>© {new Date().getFullYear()} Ravi K. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default MainContent;
