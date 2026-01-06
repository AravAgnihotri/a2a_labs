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

      {/* SECTION 2: USE CASES - Directly under hero */}
      <section id="use-cases" className="w-full pt-16 pb-24 md:pt-20 md:pb-32 bg-gradient-to-b from-background via-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT COLUMN - Text + Cards (Primary Content) */}
            <div className="space-y-10">
              {/* Section Header */}
              <div className="space-y-4">
                <span className="font-inter text-sm text-foreground/50 uppercase tracking-widest">
                  Where A2A Operates
                </span>
                <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
                  Built for Agents.<br />
                  <span className="text-foreground/60">Ready for Every Domain.</span>
                </h2>
                <p className="font-inter text-base md:text-lg text-foreground/70 font-light max-w-lg">
                  A2A enables autonomous agents to communicate, coordinate, and execute across industries—without human handoffs.
                </p>
              </div>

              {/* Use Case Cards */}
              <div className="space-y-4">
                {/* Card 1 */}
                <div className="group p-5 rounded-xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-border transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center flex-shrink-0 group-hover:bg-foreground/10 transition-colors duration-300">
                      <svg className="w-5 h-5 text-foreground/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-syne font-semibold text-base md:text-lg mb-1">Autonomous Research & Reasoning</h3>
                      <p className="font-inter text-sm text-foreground/60 font-light">
                        Agents collaborate on analysis, validation, and decision-making without centralized control.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group p-5 rounded-xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-border transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center flex-shrink-0 group-hover:bg-foreground/10 transition-colors duration-300">
                      <svg className="w-5 h-5 text-foreground/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-syne font-semibold text-base md:text-lg mb-1">Agentic Commerce</h3>
                      <p className="font-inter text-sm text-foreground/60 font-light">
                        Agents negotiate, transact, and optimize workflows across vendors and systems.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group p-5 rounded-xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-border transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center flex-shrink-0 group-hover:bg-foreground/10 transition-colors duration-300">
                      <svg className="w-5 h-5 text-foreground/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-syne font-semibold text-base md:text-lg mb-1">Enterprise Automation</h3>
                      <p className="font-inter text-sm text-foreground/60 font-light">
                        Agents coordinate across internal tools, APIs, and databases in real time.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="group p-5 rounded-xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-border transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center flex-shrink-0 group-hover:bg-foreground/10 transition-colors duration-300">
                      <svg className="w-5 h-5 text-foreground/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-syne font-semibold text-base md:text-lg mb-1">Robotics & Embodied AI</h3>
                      <p className="font-inter text-sm text-foreground/60 font-light">
                        Planning, perception, and execution layers communicate autonomously.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Visual Zone (Spline 3D) */}
            <div className="lg:sticky lg:top-24">
              <div 
                className="aspect-[3/4] lg:aspect-[4/5] rounded-2xl border border-border/30 bg-card/20 relative overflow-hidden"
              >
                <iframe 
                  src="https://my.spline.design/nexbotrobotcharacterconcept-8ur6eTjv8L9Scu4pDBhAPzBc/"
                  frameBorder="0"
                  title="A2A Robot Agent"
                  allow="autoplay"
                  className="absolute w-full scale-125"
                  style={{ 
                    height: 'calc(100% + 100px)',
                    top: '-30px',
                    left: '0',
                    pointerEvents: 'auto'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT A2A LABS DOES */}
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
      <section id="systems" className="w-full py-24 md:py-32 bg-background">
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
      <section id="research" className="w-full py-24 md:py-32 bg-background">
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
      <footer id="contact" className="w-full border-t border-border/50 bg-background">
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
                className="text-foreground/70 hover:text-foreground transition-colors duration-300 p-2 rounded-lg hover:bg-foreground/5"
                aria-label="LinkedIn"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
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
