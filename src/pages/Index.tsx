
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import Sidebar from '../components/resume/Sidebar';
import MainContent from '../components/resume/MainContent';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Index = () => {
  // Check system preference for dark mode
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Use localStorage with system preference as default
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>("dark-mode", prefersDark);
  
  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={cn(
      "min-h-screen flex flex-col md:flex-row w-full transition-colors duration-300",
      isDarkMode ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"
    )}>
      <div className="w-full md:w-1/3 lg:w-1/4">
        <Sidebar isDarkMode={isDarkMode} />
      </div>
      <div className="w-full md:w-2/3 lg:w-3/4 overflow-y-auto relative">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleTheme}
          className={cn(
            "fixed top-4 right-4 z-50", 
            isDarkMode 
              ? "bg-zinc-800 text-white border-zinc-600 hover:bg-zinc-700" 
              : "bg-white text-zinc-900 border-zinc-200 hover:bg-zinc-100"
          )}
        >
          {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        <MainContent isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Index;
