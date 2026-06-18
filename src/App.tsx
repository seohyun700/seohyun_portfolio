import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import SageBanner from "./components/SageBanner";
import Experience from "./components/Experience";
import Competencies from "./components/Competencies";
import GoalVision from "./components/GoalVision";
import Footer from "./components/Footer";
import { Mail, Phone, Calendar, ArrowUpRight, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("tjgus700@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-sage-200">
      
      {/* Navigation Header */}
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      {/* Main Page Layout */}
      <main className="flex-1">
        
        {/* 1. Hero & Academic Stats & Interactive Gauge */}
        <Hero />

        {/* 2. Philosophy: detail-oriented commitment & GPA Chart */}
        <Philosophy />

        {/* 3. Sage Banner: strategic value translation */}
        <SageBanner />

        {/* 4. Experience timeline & PDCA Simulator */}
        <Experience />

        {/* 5. Competencies & AQUI Rock Band slider solver */}
        <Competencies />

        {/* 6. Goal & Vision Statement & Live Interview Switcher */}
        <GoalVision />

      </main>

      {/* Footer copyright */}
      <Footer />

      {/* Detailed elegant Contact Me modal popup */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal glass background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-xs"
            />

            {/* Modal popup Card content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl w-full max-w-md p-6 border border-gray-150 shadow-2xl relative z-10"
            >
              
              {/* Close Button top-right */}
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-gray-400 hover:text-gray-700 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs bg-sage-100 text-sage-800 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                  Let's Connect!
                </span>
                <h3 className="text-xl font-display font-medium text-gray-950 mt-3">
                  바이오 사업개발 예비 전문가 <br />
                  <span className="text-sage-700 font-bold">인재 검토 커넥트</span>
                </h3>
                <p className="text-xs text-gray-500 font-light mt-1">
                  작은 일의 완전함을 통해 차별화된 비즈니스를 개척하겠습니다.
                </p>
              </div>

              {/* Direct coordinates details */}
              <div className="space-y-3.5 mb-6">
                
                {/* Email container with fast copying button */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-gray-150 flex justify-between items-center">
                  <div>
                    <label className="text-[9px] text-gray-400 font-mono block uppercase">E-MAIL ADDRESS</label>
                    <span className="text-sm font-bold text-gray-800 select-all">tjgus700@gmail.com</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 bg-white border border-gray-200 hover:border-sage-600 hover:bg-sage-50 text-xs font-semibold rounded-lg transition text-sage-900 cursor-pointer"
                  >
                    {copied ? (
                      <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> 복사됨
                      </span>
                    ) : (
                      "클립보드 복사"
                    )}
                  </button>
                </div>

                {/* Academic credentials */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-gray-150">
                  <p className="text-[9px] text-gray-400 font-mono block uppercase">EDUCATIONAL BACKGROUND</p>
                  <p className="text-xs text-gray-800 mt-1">
                    건국대학교 의생명공학과 졸업예정 <strong className="font-semibold text-sage-800">('26.08)</strong>
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">학부 누적 학점 3.79 / 4.5 GPA 성취</p>
                </div>

                {/* Specialties */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-gray-150">
                  <p className="text-[9px] text-gray-400 font-mono block uppercase">SPECIAL TRAINING & SCORE</p>
                  <p className="text-xs text-gray-800 mt-1 font-bold">
                    K-NIBRT 이론 이수 / OPIc IH & TOEIC 835
                  </p>
                </div>

              </div>

              {/* Confirm Bottom Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setIsContactOpen(false)}
                  className="flex-1 py-3 text-center rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-gray-650 text-gray-700 transition cursor-pointer"
                >
                  닫기
                </button>
                <a
                  href="mailto:tjgus700@gmail.com"
                  className="flex-1 py-3 text-center bg-sage-800 hover:bg-sage-900 text-white text-xs font-semibold rounded-xl transition flex items-center justify-center gap-1.5"
                >
                  이메일 직접 보내기 <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
