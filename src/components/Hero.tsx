import { useState } from "react";
import { motion } from "motion/react";
import { Award, GraduationCap, ChevronRight, Languages, Sparkles, Building2, Terminal } from "lucide-react";

interface Milestone {
  id: string;
  name: string;
  weight: number;
  description: string;
  category: string;
}

export default function Hero() {
  const [selectedMilestones, setSelectedMilestones] = useState<string[]>([
    "knibrt", "ga4", "pdca", "gpa"
  ]);

  const milestones: Milestone[] = [
    { id: "knibrt", name: "K-NIBRT 바이오의약품 수료", weight: 25, description: "올리고뉴클레오타이드 및 CDMO 프로세스 이론 습득", category: "Bio-Tech" },
    { id: "ga4", name: "구글 애널리틱스 (GA4) 자격", weight: 20, description: "데이터 기반 디지털 채널 사용자 분석 및 마케팅 지표 수립", category: "Analytics" },
    { id: "pdca", name: "유머스트R&D 표준 프로토콜 개발", weight: 20, description: "PDCA 사이클 기반 비임상 데이터 신뢰성 확보", category: "Strategy" },
    { id: "gpa", name: "학부 누적 GPA 3.79/4.5", weight: 15, description: "작은 일에 성실하여 축적한 전공 이론의 깊이", category: "Academic" },
    { id: "license", name: "글로벌 어학 (OPIc IH, TOEIC 835)", weight: 20, description: "글로벌 라이선싱 계약 및 파트너십을 위한 소통 기반", category: "Comm" },
  ];

  const toggleMilestone = (id: string) => {
    if (selectedMilestones.includes(id)) {
      // Keep at least one to not break the gauge
      if (selectedMilestones.length > 1) {
        setSelectedMilestones(selectedMilestones.filter((m) => m !== id));
      }
    } else {
      setSelectedMilestones([...selectedMilestones, id]);
    }
  };

  const currentProgress = selectedMilestones.reduce((acc, id) => {
    const found = milestones.find((m) => m.id === id);
    return acc + (found ? found.weight : 0);
  }, 0);

  // SVG parameters for half-circle or radial progress (Bestra uses a beautiful segmented arc gauge)
  const segmentsCount = 12;
  const activeSegments = Math.round((currentProgress / 100) * segmentsCount);

  return (
    <section id="about" className="py-16 px-6 bg-slate-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro Tag */}
        <div className="flex items-center gap-2 mb-4 bg-sage-100/50 text-sage-800 text-xs font-mono font-medium tracking-wider uppercase px-3 py-1.5 rounded-full w-fit">
          <Sparkles className="w-3.5 h-3.5 text-sage-700 animate-pulse" />
          Bio Business Development Specialist Candidate
        </div>

        {/* Header Grid matching Bestra way */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6">
            <h1 className="font-display font-medium text-4xl sm:text-6xl lg:text-7xl tracking-tight text-gray-900 leading-none">
              Business, the <br />
              <span className="text-sage-700 font-semibold relative">
                strategic bio
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-sage-200/50 -z-10" />
              </span> way.
            </h1>
          </div>
          
          {/* Centered Image Column */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start items-center">
            <img 
              src="https://raw.githubusercontent.com/seohyun700/seohyun_portfolio/502c6244b1c6371197dab24116282c544cb69be7/pngegg%20(1).png" 
              alt="Strategic Bio Illustration" 
              className="h-28 sm:h-36 lg:h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-3">
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
              건국대학교 의생명공학과를 기반으로, K-NIBRT 실무 이론과 유머스트R&D 비임상 비즈니스 판단력을 결합하여 바이오 제약 산업의 차별화된 가치를 창출합니다.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a 
                href="#experience"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-sage-800 hover:text-sage-900 group"
              >
                포트폴리오 보러 가기 
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Bestra-inspired Interactive Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Left Column: Academic & Language Score Stats (6 Columns) */}
          <div className="md:col-span-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono font-medium text-gray-400">PROFILE PROFILE</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-display font-bold text-gray-900">3.79</span>
                <span className="text-sm text-gray-400">/ 4.5 GPA</span>
              </div>
              <p className="text-xs text-gray-500 mb-6 font-medium">학부 누적 평점 평균 (의생명공학과)</p>
              
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sage-50 flex items-center justify-center text-sage-600">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-mono">EDUCATION</p>
                    <p className="text-xs font-bold text-gray-800">건국대학교 의생명공학과 졸업예정 ('26.08)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <Languages className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-mono">GLOBAL COMMunication</p>
                    <p className="text-xs font-bold text-gray-800">OPIc IH & TOEIC 835 (비즈니스 소통)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-mono">SPECIALIZED TRAINING</p>
                    <p className="text-xs font-bold text-gray-800 text-amber-800">K-NIBRT 바이오의약품 이론교육과정</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-mono font-bold tracking-wider text-teal-700">BUSINESS ANALYTICS</p>
                    <p className="text-xs font-bold text-gray-800">구글 애널리틱스 (GA4) 공인 자격 수료</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="text-xs font-mono text-sage-600 font-semibold bg-sage-50 px-2 py-1 rounded">Tech-to-Biz Core</span>
              <span className="text-[10px] text-gray-400 font-mono">Last Update: 2026.06</span>
            </div>
          </div>

          {/* Right Column: Goal Progress (6 Columns) */}
          <div className="md:col-span-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono font-medium text-gray-400">BUSINESS READINESS</span>
                <span className="text-xs bg-sage-100 text-sage-800 px-2 py-0.5 rounded-full font-mono font-bold">Goal Progress</span>
              </div>

              {/* Bestra-style Circular/Segmented Gauge */}
              <div className="flex flex-col items-center justify-center py-4">
                <div className="relative flex items-center justify-center">
                  {/* Gauge SVG */}
                  <svg className="w-44 h-44 transform -rotate-90">
                    {/* Background Circle */}
                    <circle
                      cx="88"
                      cy="88"
                      r="70"
                      stroke="#f3f4f6"
                      strokeWidth="10"
                      fill="transparent"
                      strokeDasharray="439.8"
                      strokeDashoffset="110" // For semi-circle/arc or custom opening
                      strokeLinecap="round"
                    />
                    {/* Progress Circle with dynamic dash offset */}
                    <motion.circle
                      cx="88"
                      cy="88"
                      r="70"
                      stroke="#4d574f" // sage-700
                      strokeWidth="10"
                      fill="transparent"
                      strokeDasharray="439.8"
                      initial={{ strokeDashoffset: 439.8 }}
                      animate={{ strokeDashoffset: 439.8 - (439.8 * 0.75 * (currentProgress / 100)) }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      strokeLinecap="round"
                    />
                  </svg>
                  
                  {/* Center Text */}
                  <div className="absolute text-center">
                    <motion.span 
                      key={currentProgress}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-4xl font-display font-bold text-gray-950 block"
                    >
                      {currentProgress}%
                    </motion.span>
                    <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider block mt-1">Ready Capacity</span>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-500 font-light mt-4">
                  *인재 적합성 검토를 위해 아래의 핵심 이정표를 켜고 꺼보세요.
                </p>
              </div>

              {/* Core Milestone Interactive Checklist Dashboard */}
              <div className="mt-2 space-y-2 max-h-[140px] overflow-y-auto pr-1">
                {milestones.map((milestone) => {
                  const isSelected = selectedMilestones.includes(milestone.id);
                  return (
                    <button
                      key={milestone.id}
                      onClick={() => toggleMilestone(milestone.id)}
                      className={`w-full text-left p-2 rounded-lg text-xs flex justify-between items-center transition-all cursor-pointer ${
                        isSelected 
                          ? "bg-sage-50 hover:bg-sage-100 border border-sage-200 text-sage-900" 
                          : "bg-gray-50 hover:bg-gray-100 border border-transparent text-gray-500"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-sage-700' : 'bg-gray-300'}`} />
                        <div>
                          <p className="font-semibold">{milestone.name}</p>
                          <p className="text-[9px] text-gray-400 font-light truncate max-w-[170px]">{milestone.description}</p>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-right">+{milestone.weight}%</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 font-mono">
              <span>● {selectedMilestones.length} Active Tracks</span>
              <span>Target: 100% Core</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
