/**
 * AnimatedLine Component
 * 
 * Design: Infrastructure Minimalism
 * - Thin horizontal line that animates in from left to right
 * - Pure white at 20% opacity
 * - Slow, subtle animation
 * - Represents system initialization or signal propagation
 */

export default function AnimatedLine() {
  return (
    <div className="relative w-full h-px overflow-hidden my-8">
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground to-transparent"
        style={{
          opacity: 0.2,
          animation: 'lineSlide 4s ease-in-out infinite',
        }}
      />
      <style>{`
        @keyframes lineSlide {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.2;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
