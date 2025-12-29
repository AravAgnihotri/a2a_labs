/**
 * Header Component
 * 
 * Design: Infrastructure Minimalism
 * - Fixed position, very subtle, almost disappears into black
 * - Monochrome only (off-white text on pure black)
 * - Minimal spacing, no visual noise
 * - Opacity transitions on hover only
 */

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Left: Logo */}
        <div className="font-syne font-bold text-lg tracking-tight text-foreground">
          A2A Labs
        </div>

        {/* Right: Navigation */}
        <nav className="flex items-center gap-8">
          <a
            href="#systems"
            className="text-sm text-foreground/70 hover:text-foreground transition-opacity duration-300"
          >
            Systems
          </a>
          <a
            href="#research"
            className="text-sm text-foreground/70 hover:text-foreground transition-opacity duration-300"
          >
            Research
          </a>
          <a
            href="#contact"
            className="text-sm text-foreground/70 hover:text-foreground transition-opacity duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
