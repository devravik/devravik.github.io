
import React from 'react';
import { Mail, Linkedin, Github, Code, Instagram } from "lucide-react";
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type SidebarProps = {
  isDarkMode: boolean;
};

type SectionProps = {
  title: string;
  children: React.ReactNode;
  isDarkMode: boolean;
};

const SidebarSection = ({ title, children, isDarkMode }: SectionProps) => {
  return (
    <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <h2 className={cn(
        "text-lg font-bold mb-3 border-b pb-1",
        isDarkMode 
          ? "text-white border-zinc-700" 
          : "text-zinc-900 border-zinc-200"
      )}>{title}</h2>
      <div className={isDarkMode ? "text-zinc-300" : "text-zinc-700"}>{children}</div>
    </div>
  );
};

// Custom Stack Overflow SVG icon component
const StackOverflowIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 20.002V15.002H20V22.002H3V15.002H5V20.002H18Z" />
    <path d="M7.5 14.8021H16.5V16.8021H7.5V14.8021Z" />
    <path d="M7.80078 11.8021L16.6008 13.3021L16.9008 11.4021L8.10078 9.90215L7.80078 11.8021Z" />
    <path d="M9.00039 7.80176L17.1004 11.0018L17.9004 9.30176L9.70039 6.00176L9.00039 7.80176Z" />
    <path d="M10.8008 4.00137L17.8008 8.90137L19.0008 7.40137L12.1008 2.50137L10.8008 4.00137Z" />
  </svg>
);

const Sidebar = ({ isDarkMode }: SidebarProps) => {
  return (
    <aside className={cn(
      "p-6 h-full min-h-screen transition-colors duration-300",
      isDarkMode ? "bg-zinc-800 text-white" : "bg-zinc-100 text-zinc-900"
    )}>
      <div className="sticky top-6">
        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-6 animate-fade-in">
          <Avatar className={cn(
            "w-32 h-32 mb-3 border-2", 
            isDarkMode ? "border-zinc-700" : "border-zinc-300"
          )}>
            <AvatarImage src="/avatar.png" alt="Ravi K." />
            <AvatarFallback className={cn(
              "text-2xl font-bold", 
              isDarkMode ? "bg-zinc-700" : "bg-zinc-200"
            )}>
              RK
            </AvatarFallback>
          </Avatar>
          <div className={cn(
            "w-full mt-2 pt-2 text-center border-t", 
            isDarkMode ? "border-zinc-700" : "border-zinc-300"
          )}>
            <div className={cn(
              "inline-block px-3 py-1 mb-1 text-xs rounded-full", 
              isDarkMode ? "bg-zinc-700" : "bg-zinc-200"
            )}>
              Available for work
            </div>
          </div>
        </div>

        <SidebarSection title="Contact" isDarkMode={isDarkMode}>
          <div className="flex flex-col space-y-3">
            <a href="mailto:dev.ravikgupt@gmail.com" className={cn(
              "flex items-center transition-colors",
              isDarkMode 
                ? "text-zinc-300 hover:text-white" 
                : "text-zinc-700 hover:text-zinc-900"
            )}>
              <Mail className="w-4 h-4 mr-2" />
              dev.ravikgupt@gmail.com
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={cn(
              "flex items-center transition-colors",
              isDarkMode 
                ? "text-zinc-300 hover:text-white" 
                : "text-zinc-700 hover:text-zinc-900"
            )}>
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
            <a href="https://github.com/devravik" target="_blank" rel="noopener noreferrer" className={cn(
              "flex items-center transition-colors",
              isDarkMode 
                ? "text-zinc-300 hover:text-white" 
                : "text-zinc-700 hover:text-zinc-900"
            )}>
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
            <a href="https://stackoverflow.com/users/3894259/k-ravi" target="_blank" rel="noopener noreferrer" className={cn(
              "flex items-center transition-colors",
              isDarkMode 
                ? "text-zinc-300 hover:text-white" 
                : "text-zinc-700 hover:text-zinc-900"
            )}>
              <StackOverflowIcon className="w-4 h-4 mr-2" />
              StackOverflow
            </a>
            <a href="https://instagram.com/kravishots" target="_blank" rel="noopener noreferrer" className={cn(
              "flex items-center transition-colors",
              isDarkMode 
                ? "text-zinc-300 hover:text-white" 
                : "text-zinc-700 hover:text-zinc-900"
            )}>
              <Instagram className="w-4 h-4 mr-2" />
              Instagram
            </a>
          </div>
        </SidebarSection>
        
        <SidebarSection title="Top Skills" isDarkMode={isDarkMode}>
          <div className="flex flex-col space-y-2">
            {/* Added skill bars to visualize skill levels */}
            <SkillBar name="Laravel & Vue" percentage={95} isDarkMode={isDarkMode} />
            <SkillBar name="Go Fiber & GORM" percentage={85} isDarkMode={isDarkMode} />
            <SkillBar name="React & Next.js" percentage={90} isDarkMode={isDarkMode} />
            <SkillBar name="REST/GraphQL APIs" percentage={92} isDarkMode={isDarkMode} />
          </div>
        </SidebarSection>
        
        <SidebarSection title="Languages" isDarkMode={isDarkMode}>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <span>English</span>
              <span className="text-sm opacity-70">(Professional Proficiency)</span>
            </div>
            <div className="flex justify-between">
              <span>Hindi</span>
              <span className="text-sm opacity-70">(Native)</span>
            </div>
          </div>
        </SidebarSection>
      </div>
    </aside>
  );
};

// New component for skill bars
type SkillBarProps = {
  name: string;
  percentage: number;
  isDarkMode: boolean;
};

const SkillBar = ({ name, percentage, isDarkMode }: SkillBarProps) => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className={cn(
        "h-1.5 rounded-full w-full", 
        isDarkMode ? "bg-zinc-700" : "bg-zinc-200"
      )}>
        <div 
          className={cn(
            "h-full rounded-full", 
            isDarkMode ? "bg-zinc-400" : "bg-zinc-600"
          )} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
