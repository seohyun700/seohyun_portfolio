import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TrendingUp, BookOpen, Clock, Heart, CornerRightDown } from "lucide-react";

interface SemData {
  semName: string;
  gpa: number;
  highlightCourses: string[];
  description: string;
}

export default function Philosophy() {
  const [activeSem, setActiveSem] = useState<number>(2);

  const semHistory: SemData[] = [
    {
      semName: "3학년 1학기",
      gpa: 3.9,
      highlightCourses: ["유전공학", "기초 생명과학실험", "세포생물학"],
      description: "생명공학 연구의 핵심 기전과 유전체 흐름을 규명하는 학업의 기초 정량 수립"
    },
    {
      semName: "3학년 2학기",
      gpa: 3.5,
      highlightCourses: ["유전자치료공학", "생화학", "생리학"],
      description: "CDMO 비즈니스 및 유전자 치료제 모달리티의 기초 원리를 탐구"
    },
    {
      semName: "4학년 1학기",
      gpa: 4.50,
      highlightCourses: ["신호전달기전", "고급 분자생물학", "의생명종합설계"],
      description: "매일 한 일과 배운 전공 지식을 치열하게 복습하여 전공 전 과목 4.5 만점 달성"
    }
  ];

  const getYForGpa = (gpa: number) => {
    const minGpa = 3.0;
    const maxGpa = 4.5;
    const minY = 65; // bottom boundary inside SVG view box
    const maxY = 5;  // top boundary inside SVG view box
    return minY - ((gpa - minGpa) / (maxGpa - minGpa)) * (minY - maxY);
  };

  return (
    <section className="py-20 px-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Subtle Section Label */}
        <div className="text-center mb-4">
          <span className="text-xs font-mono font-bold text-sage-700 uppercase tracking-widest bg-sage-50 px-3 py-1 rounded-full">
            Our Core Principle & Value
          </span>
        </div>

        {/* Big Bold Headline */}
        <h2 className="font-display font-medium text-3xl sm:text-5xl text-center text-gray-900 tracking-tight max-w-3xl mx-auto leading-tight mb-4">
          Because passion <br className="sm:hidden" />
          <span className="text-sage-700 font-bold">without rigorous detail</span> isn’t enough.
        </h2>
        <p className="text-center text-gray-500 font-light text-sm sm:text-base max-w-xl mx-auto mb-16">
          똑같은 일과 실험의 단순 반복을 넘어, 매일 전공 서적을 복습하고 표준 프로토콜을 성실하게 수립하는 집요함만이 큰 비즈니스 딜(Deal)과 신뢰를 가져옵니다.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Card: 4.5 GPA Trend & Review (7 Columns) */}
          <div className="lg:col-span-7 bg-slate-50 border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-xs font-mono font-medium text-gray-400">TREND ANALYSIS</span>
                  <h3 className="text-xl font-display font-bold text-gray-900 mt-1">학부 전공 GPA 성장 곡선</h3>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>최대 전공 4.5 만점</span>
                </div>
              </div>

              {/* Dynamic Sparkline Visualizer */}
              <div className="h-44 flex items-end justify-between relative mt-8 px-4 border-b border-gray-100 pb-2">
                
                {/* SVG connection line */}
                <div className="absolute inset-x-0 bottom-12 h-[2px] bg-gray-200 pointer-events-none">
                  {/* Visual trend line dynamically drawn */}
                  <svg className="w-full h-24 overflow-visible" preserveAspectRatio="none">
                    <line x1="16.6%" y1={getYForGpa(semHistory[0].gpa)} x2="50%" y2={getYForGpa(semHistory[1].gpa)} stroke="#94a3b8" strokeDasharray="3 3" strokeWidth="2" />
                    <line x1="50%" y1={getYForGpa(semHistory[1].gpa)} x2="83.3%" y2={getYForGpa(semHistory[2].gpa)} stroke="#4d574f" strokeWidth="3" />
                  </svg>
                </div>

                {semHistory.map((sem, index) => {
                  const isActive = activeSem === index;
                  const gpaPercentage = ((sem.gpa - 3.8) / (4.5 - 3.8)) * 100; // mapped to scale

                  return (
                    <button
                      key={sem.semName}
                      onClick={() => setActiveSem(index)}
                      className="flex flex-col items-center z-10 focus:outline-hidden group cursor-pointer"
                      style={{ width: "30%" }}
                    >
                      {/* Floating tooltip with GPA value */}
                      <motion.div
                        animate={{
                          y: isActive ? -12 : 0,
                          scale: isActive ? 1.1 : 1,
                        }}
                        className={`mb-3 px-2 py-1 rounded text-xs font-mono font-bold ${
                          isActive 
                            ? "bg-sage-700 text-white shadow-xs" 
                            : "bg-white text-gray-500 border border-gray-100 group-hover:bg-gray-100"
                        }`}
                      >
                        {sem.gpa.toFixed(2)}
                      </motion.div>

                      {/* Active Indicator Pin */}
                      <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                        isActive 
                          ? "bg-sage-700 border-white scale-125 ring-4 ring-sage-100" 
                          : "bg-white border-slate-300 group-hover:border-sage-500"
                      }`} />

                      <span className={`text-[11px] font-mono mt-3 font-semibold ${
                        isActive ? "text-sage-700" : "text-gray-400 group-hover:text-gray-600"
                      }`}>
                        {sem.semName}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Interactive Card Content */}
              <div className="mt-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSem}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl p-5 border border-gray-150 shadow-xs"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-sage-600" />
                      <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">주요 이수 교과목 및 방향</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-800 mb-3">{semHistory[activeSem].description}</p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {semHistory[activeSem].highlightCourses.map((course) => (
                        <span 
                          key={course}
                          className="text-[10px] sm:text-xs font-mono font-medium text-sage-800 bg-sage-50 border border-sage-100 px-2.5 py-1 rounded-md"
                        >
                          ● {course}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>

          {/* Right Card: The Reality & Solution Concept (5 Columns) */}
          <div className="lg:col-span-5 bg-white border border-gray-150 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-medium text-sage-600">THE REALTIES</span>
              <h3 className="text-2xl font-display font-medium tracking-tight text-gray-900 mt-2 mb-6">
                과학과 비즈니스의 조율: <br />
                철저한 번역이 필요한 이유 
              </h3>

              <div className="space-y-6">
                <div className="flex gap-3">
                  <div className="text-xs font-mono text-sage-700 bg-sage-50 px-2.5 py-1 rounded h-fit">01</div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">원자료(Raw Data)의 복잡성 해결</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      의학/바이오 실험 데이터는 고도로 파편화되어 있습니다. 과학적 문맥을 비즈니스 경쟁력 파악으로 치밀하게 번역하여 기술가치 평가의 신뢰도를 제공합니다.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-xs font-mono text-sage-700 bg-sage-50 px-2.5 py-1 rounded h-fit">02</div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">글로벌 파트너의 비대칭 해소</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      올리고뉴클레오타이드 및 CDMO 프로세스 등 전문적인 전공 지식과 매끄러운 어학 소통을 겸비하여, 해외 규제 및 다국적 바이어와의 가치 합의점을 민첩하게 도출합니다.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-xs font-mono text-sage-700 bg-sage-50 px-2.5 py-1 rounded h-fit">03</div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">조직 내 표준 제안력</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      부서 간 조율 시 단순 슬로건이 아닌 표준화된 프로토콜(PDCA) 및 설득력 있는 리포트를 제공하여 조직 전체의 협상 리스크를 예방합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100">
              <a 
                href="#competence"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-gray-950 text-white rounded-xl text-xs font-semibold hover:bg-sage-800 transition-all cursor-pointer"
              >
                핵심 역량 및 소통 기술 심도 보기 <CornerRightDown className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
