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

      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background animation */}
        <AgentNetworkAnimation />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          {/* Logo - Large */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/images/logo.png" 
              alt="A2A Labs Logo" 
              className="h-48 md:h-64 w-auto opacity-90"
            />
          </div>
          
          {/* Main headline */}
          <h1 className="font-syne font-bold text-6xl md:text-7xl tracking-tight mb-4 leading-tight">
            A2A Labs
          </h1>
          
          {/* Subheading */}
          <h2 className="font-syne font-semibold text-2xl md:text-3xl text-foreground/70 tracking-tight mb-6">
            Building an Agent to Agent Ecosystem
          </h2>
          
          <p className="font-inter text-base md:text-lg text-foreground/80 font-light">
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
            <div className="text-right">
              <a
                href="mailto:contact@a2alabs.xyz"
                className="font-inter text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                contact@a2alabs.xyz
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
