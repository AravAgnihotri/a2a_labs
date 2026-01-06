/**
 * Header Component
 * 
 * Design: Infrastructure Minimalism
 * - Fixed position, very subtle, almost disappears into black
 * - Monochrome only (off-white text on pure black)
 * - Minimal spacing, no visual noise
 * - Opacity transitions on hover only
 */

import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export default function Header() {
  const { currentUser, logout } = useAuth();
  const [, setLocation] = useLocation();
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 border-b border-border"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="container flex items-center justify-between h-16" style={{ backgroundColor: '#000000' }}>
        {/* Left: Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="A2A Labs" 
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Right: Navigation */}
        <nav className="flex items-center gap-8">
          <a
            href="#systems"
            onClick={(e) => scrollToSection(e, 'systems')}
            className="text-sm text-foreground/70 hover:text-foreground transition-opacity duration-300 cursor-pointer"
          >
            Systems
          </a>
          <a
            href="#research"
            onClick={(e) => scrollToSection(e, 'research')}
            className="text-sm text-foreground/70 hover:text-foreground transition-opacity duration-300 cursor-pointer"
          >
            Research
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="text-sm text-foreground/70 hover:text-foreground transition-opacity duration-300 cursor-pointer"
          >
            Contact
          </a>

          {/* Auth Section */}
          {currentUser ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="h-9 w-9 rounded-full p-0 hover:bg-foreground/10"
                >
                  <div className="w-9 h-9 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/70 hover:text-foreground text-sm font-medium">
                    {currentUser.displayName?.[0]?.toUpperCase() || currentUser.email?.[0]?.toUpperCase() || 'U'}
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-inter">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {currentUser.displayName || 'User'}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {currentUser.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={() => logout()}
                  className="font-inter cursor-pointer"
                >
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              onClick={() => setLocation('/signin')}
              variant="outline"
              size="sm"
              className="font-inter text-sm"
            >
              Sign In
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
