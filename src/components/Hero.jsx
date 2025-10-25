import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative w-full h-[70vh] sm:h-[76vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/40 to-neutral-950"></div>

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-white/80 mb-4">
            <Rocket size={16} className="text-emerald-300" />
            Curated IT Blogs & Knowledge Hubs
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Discover the best blogs in IT, engineering, and tech
          </h1>
          <p className="mt-4 text-white/80 text-sm sm:text-base">
            Explore high-quality sources across frontend, backend, cloud, DevOps, security, AI/ML, and more.
          </p>
        </div>
      </div>
    </header>
  );
}
