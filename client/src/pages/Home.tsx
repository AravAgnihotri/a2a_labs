/**
 * Home Page - A2A Labs Landing
 * 
 * Design: Infrastructure Minimalism
 * - Motion-first, minimal monochrome aesthetic
 * - Pure black background, off-white text, subtle animations
 * - Sections flow with intentional spacing and hierarchy
 * - Typography-driven with ambient motion
 */

import Header from '@/components/Header';
import AgentNetworkAnimation from '@/components/AgentNetworkAnimation';
import SystemsAnimation from '@/components/SystemsAnimation';
import AnimatedLine from '@/components/AnimatedLine';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO SECTION - starts below header */}
      <section className="relative w-full h-[120vh] mt-16 flex items-center justify-center overflow-hidden bg-white">
        {/* Video background - larger, fills section */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover bg-white scale-110"
        >
          <source src="/videos/Robot_Conversation_with_Briefcases.MOV" type="video/quicktime" />
          <source src="/videos/Robot_Conversation_with_Briefcases.MOV" type="video/mp4" />
        </video>
        
        {/* Hero content - overlapping video */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          {/* Main headline */}
          <h1 className="font-syne font-bold text-7xl md:text-9xl tracking-tight mb-6 leading-none text-black">
            A2A Labs
          </h1>
          
          {/* Subheading */}
          <h2 className="font-syne font-semibold text-2xl md:text-4xl text-black/80 tracking-tight mb-6">
            Building an Agent to Agent Ecosystem
          </h2>
          
          <p className="font-inter text-lg md:text-xl text-black/70 font-light">
            Autonomous systems coordinating without supervision.
          </p>
        </div>
      </section>

      {/* SECTION 2: WHAT A2A LABS DOES */}
      <section className="w-full py-24 md:py-32 bg-background">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="font-syne font-bold text-4xl md:text-5xl tracking-tight">
              A2A Labs explores agent-native intelligence.
            </h2>

            <AnimatedLine />

            <div className="space-y-6 text-lg md:text-xl text-foreground/80 font-inter font-light">
              <p>We design systems where autonomous agents:</p>
              <ul className="space-y-4 text-left max-w-xl mx-auto">
                <li className="flex gap-4">
                  <span className="text-accent flex-shrink-0">•</span>
                  <span>reason independently</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent flex-shrink-0">•</span>
                  <span>communicate with other agents</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent flex-shrink-0">•</span>
                  <span>negotiate goals</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent flex-shrink-0">•</span>
                  <span>execute without constant human input</span>
                </li>
              </ul>

              <div className="pt-6 space-y-3">
                <p className="font-syne font-semibold text-base">This is not automation.</p>
                <p className="font-syne font-semibold text-base">This is coordination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SYSTEMS FOCUS */}
      <section className="w-full py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Animation */}
            <div className="h-96 md:h-full min-h-96">
              <SystemsAnimation />
            </div>

            {/* Right: Text */}
            <div className="space-y-8">
              <h2 className="font-syne font-bold text-4xl md:text-5xl tracking-tight">
                Agent-to-agent systems require new primitives.
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-foreground/80 font-inter font-light">
                <p>We work on:</p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="text-accent flex-shrink-0">•</span>
                    <span>communication protocols</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent flex-shrink-0">•</span>
                    <span>memory sharing</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent flex-shrink-0">•</span>
                    <span>delegation logic</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent flex-shrink-0">•</span>
                    <span>emergent behavior</span>
                  </li>
                </ul>

                <div className="pt-6 space-y-3">
                  <p className="font-syne font-semibold text-base">Designed for scale.</p>
                  <p className="font-syne font-semibold text-base">Designed for autonomy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PHILOSOPHY */}
      <section className="w-full py-24 md:py-32 bg-background">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="font-syne font-bold text-4xl md:text-5xl tracking-tight">
              Interfaces are temporary.
            </h2>
            <p className="font-syne font-bold text-4xl md:text-5xl tracking-tight text-foreground/60">
              Systems endure.
            </p>

            <div className="space-y-6 text-lg md:text-xl text-foreground/80 font-inter font-light pt-8">
              <p>We believe intelligence should:</p>
              <ul className="space-y-4 text-left max-w-xl mx-auto">
                <li className="flex gap-4">
                  <span className="text-accent flex-shrink-0">•</span>
                  <span>operate quietly</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent flex-shrink-0">•</span>
                  <span>adapt continuously</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent flex-shrink-0">•</span>
                  <span>improve without prompting</span>
                </li>
              </ul>

              <p className="pt-6 font-syne font-semibold text-base">
                A2A Labs builds what runs underneath.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-border/50 bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Left */}
            <div className="text-left">
              <p className="font-syne font-bold text-base">A2A Labs</p>
            </div>

            {/* Center */}
            <div className="text-center">
              <p className="font-inter text-sm text-foreground/70">
                Experimental agent systems
              </p>
            </div>

            {/* Right */}
            <div className="text-right flex items-center justify-end gap-4">
              <a
                href="mailto:contact@a2alabs.xyz"
                className="font-inter text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                contact@a2alabs.xyz
              </a>
              <a
                href="https://www.linkedin.com/company/a2a-labs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom line */}
          <div className="border-t border-border/30 pt-8 text-center">
            <p className="font-inter text-xs text-foreground/50 tracking-wide">
              © A2A Labs — Research & Systems
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
