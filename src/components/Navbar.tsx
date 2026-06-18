import { useState } from "react";
import { Menu, X, Globe, Mail, Phone, ArrowUpRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Experiences", href: "#experience" },
    { label: "Competencies", href: "#competence" },
    { label: "Goal & Vision", href: "#vision" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Branding */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-sage-700 flex items-center justify-center text-white font-display font-bold text-sm tracking-tight">
            b
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-gray-900">
            bestra<span className="text-sage-600 font-light">.bd</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-500 hover:text-sage-700 transition-colors relative group py-1"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sage-600 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onContactClick}
            id="nav-contact-btn"
            className="px-5 py-2 rounded-full border border-gray-900 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center gap-1 cursor-pointer"
          >
            Let's talk <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-lg"
          >
            <div className="flex flex-col gap-3 p-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-sage-700 hover:bg-sage-50 rounded-lg transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-gray-100 my-2 pt-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onContactClick();
                  }}
                  className="w-full px-4 py-3 bg-gray-900 text-white text-center rounded-xl font-medium text-sm hover:bg-sage-800 transition-all flex items-center justify-center gap-2"
                >
                  Let's talk <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
