import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50 border-t border-gray-150 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left branding */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-sage-700 flex items-center justify-center text-white font-display font-bold text-sm tracking-tight">
            b
          </div>
          <span className="font-display font-medium text-lg tracking-tight text-gray-900">
            bestra<span className="text-sage-600 font-light">.bd</span>
          </span>
        </div>

        {/* Center: simple links */}
        <p className="text-xs text-gray-400 font-mono text-center md:text-left">
          © {new Date().getFullYear()} Bio Business Development Portfolio. Inspired by Bestra. 
          <br className="sm:hidden" /> Developed in absolute detail.
        </p>

        {/* Right Scrollback */}
        <button
          onClick={scrollUp}
          className="p-3 bg-white hover:bg-sage-100 border border-gray-200 rounded-full text-sage-800 transition-all flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
          aria-label="Scroll to top"
        >
          Scroll Back To Top <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
