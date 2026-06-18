import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Calendar, ChevronRight, CheckCircle2, RotateCw, ShieldCheck, AlertCircle, Sparkles } from "lucide-react";
import { WorkExperienceItem } from "../types";

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<string>("umust");
  const [pdcaStep, setPdcaStep] = useState<number>(0);

  const experiences: WorkExperienceItem[] = [
    {
      id: "umust",
      company: "유머스트R&D",
      role: "코스메슈티컬 원료 개발 & 데이터 비임상 분석 인턴",
      duration: "6개월 실무",
      description: "피부 세포 생존도(Cell Viability) 및 독성 비임상 평가 연구를 기반으로 상업 연구 의사결정을 실체화하였습니다.",
      bulletPoints: [
        "독성 시험 및 피부 세포 비임상 실험 결과 분석을 통한 원료 후보 가치 제안 및 상품성 정량 가치 평가",
        "동종 물질 특허 문헌 검토 및 실험 데이터를 근거로 타 유관 부서 및 임원진 대상 신규 개발 방향 프레젠테이션 수립",
        "구두와 메모로 주관적으로 전수되던 실험 과정을 체계적인 설계 과정을 적용해 정규 프로토콜로 명문화"
      ],
      badge: "핵심 실무 경력"
    },
    {
      id: "kist",
      company: "한국과학기술연구원(KIST)",
      role: "생체분자인식연구센터 인턴 연구원",
      duration: "2개월 수료",
      description: "국가 핵심 연구 기관인 KIST 실무 참여를 통해 첨단 의생명공학 장비 사용 기술 및 분자 구조 인지 기법을 훈련했습니다.",
      bulletPoints: [
        "분자 도킹 시뮬레이션 및 분광 분석 기법 관찰을 통해 기초 생체인식 복합물 상호작용 지식 체득",
        "주간 학술 세미나 발제 참여로 국내외 연구 동향 분석 노하우 가속화"
      ],
      badge: "연구 국정과제 실무"
    },
    {
      id: "broadcast",
      company: "방송국 (SBS 외 유관 프로덕션)",
      role: "예능 및 다큐멘터리 조연출 (AD)",
      duration: "1년 근무",
      description: "다양한 배경의 외주 스태프, 프로듀서, 작가, 촬영 팀 간의 일정 조율을 도맡아 일일 수백 명 규모 현장을 총지휘했습니다.",
      bulletPoints: [
        "예상치 못한 현장 비상 기후, 멤버 변동 등 극단적 상황에서 1시간 이내 대안 로케이션 수배 등 유연성 획득",
        "수십 개의 협력 부서 간 병목 구간을 지속 청취하고 중재안을 선제 제시하여 촬영 지연율 0% 유지"
      ],
      badge: "커뮤니케이션 & 위기대응"
    },
    {
      id: "lab",
      company: "건국대학교 신호전달실험실",
      role: "윤대진 교수님 연구실 학부연구생",
      duration: "학부 재학",
      description: "기초 식물 및 면역 신호전달 기전에 대한 지식 확보를 목표로 배배양, 유전자 증폭(PCR) 및 전기영동 실무를 수련했습니다.",
      bulletPoints: [
        "기초 분자 생물학 기술 습득: 유전자 PCR 증폭, Agarose Gel 전기영동 및 형광 이미징 실험 보조",
        "논문 세미나 참여를 통해 복잡하게 얽힌 Signal Transduction 경로를 구조적으로 매핑하는 이론력 확보"
      ],
      badge: "학술 연구 훈련"
    }
  ];

  // PDCA step definition
  const pdcaSteps = [
    {
      title: "1. PLAN (기획/문제 정의)",
      text: "구두 구술 위주의 모호한 전달로 동일 실험자가 실험해도 오차범위가 변동되던 비임상 오차 유발 원인 설계",
      action: "원인 분석 및 정형화된 프로토콜 초안 작성",
      data: 40,
      status: "기존 오차 극심 (재현 정확도 40%)"
    },
    {
      title: "2. DO (실행/표준화 절차)",
      text: "핵심 생태세포 배양 오차를 줄이기 위해 세포 농도 측정기와 시약 투입 시퀀스 일정을 철저히 체계화",
      action: "동일 조건 3회 복수 반복 검증 및 크로스 체킹",
      data: 70,
      status: "정밀 통제 하에 3회 실험 가동 (정확도 70%)"
    },
    {
      title: "3. CHECK (검증/크로스체크)",
      text: "타 부서 연구원에 해당 표준 프로토콜 매뉴얼을 사전 배포하여 제3자가 동일한 원료 활성 결과를 도출하는지 수치 비교",
      action: "피어 리뷰를 통한 데이터 편차 분석",
      data: 88,
      status: "외부 변수 90% 이상 통격화 성공 (정확도 88%)"
    },
    {
      title: "4. ACT (표준 규격 정착)",
      text: "실험 결과를 데이터 보고서 및 공식 매뉴얼로 표준화하여 팀 전체의 인수인계 신뢰성 완벽 고정",
      action: "영구 표준 실험 프로토콜(SOP) 문서 배포 완료",
      data: 98,
      status: "최종 신뢰도 완벽 고정 완성 (재현 정확도 98%)"
    }
  ];

  const handleNextPdca = () => {
    setPdcaStep((prev) => (prev + 1) % pdcaSteps.length);
  };

  const handleResetPdca = () => {
    setPdcaStep(0);
  };

  const currentExpData = experiences.find(e => e.id === selectedExp) || experiences[0];

  return (
    <section id="experience" className="py-20 px-6 bg-slate-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Label and Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-mono font-bold text-sage-800 uppercase tracking-widest bg-sage-100 px-3 py-1 rounded-full">
            EXPERIENCES & ROADMAP
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-5xl tracking-tight text-gray-905 mt-3">
            실험실에서 현장까지, <br className="sm:hidden" />
            증명된 <span className="text-sage-700 font-bold">비즈니스 실행 궤적</span>
          </h2>
          <p className="text-gray-500 font-light text-sm sm:text-base mt-2 max-w-2xl">
            이론적 의생명공학 전공 분석력과 고도의 커뮤니케이션 조율 역량, 실제 기업 연구소에서의 PDCA 체계화 성과를 타임라인으로 보여드립니다.
          </p>
        </div>

        {/* Unified Layout with Nav Left & Exp Detail Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Buttons (4 Columns) */}
          <div className="lg:col-span-4 space-y-3">
            {experiences.map((exp) => {
              const isSelected = exp.id === selectedExp;
              return (
                <button
                  key={exp.id}
                  onClick={() => {
                    setSelectedExp(exp.id);
                    // Reset simulator if switching
                    if (exp.id === "umust") setPdcaStep(0);
                  }}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex justify-between items-center cursor-pointer ${
                    isSelected 
                      ? "bg-white border-sage-500 shadow-md translate-x-1" 
                      : "bg-slate-100/50 hover:bg-white border-transparent hover:border-gray-200"
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-mono text-sage-600 font-bold block mb-1 uppercase">
                      {exp.duration}
                    </span>
                    <h3 className="text-md font-display font-bold text-gray-900">{exp.company}</h3>
                    <p className="text-xs text-gray-500 mt-1 truncate max-w-[220px]">{exp.role}</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "text-sage-700 translate-x-1" : "text-gray-400"}`} />
                </button>
              );
            })}
          </div>

          {/* Details & Interactive PDCA Simulator (8 Columns) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExp}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-xs"
              >
                {/* Badge and Title info */}
                <div className="flex flex-wrap justify-between items-center gap-4 border-b border-gray-100 pb-5 mb-5">
                  <div>
                    <span className="text-xs bg-sage-50 text-sage-800 border border-sage-200 px-2.5 py-1 rounded-full font-semibold">
                      {currentExpData.badge}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mt-2">{currentExpData.company}</h3>
                    <p className="text-sm text-sage-700 font-medium">{currentExpData.role}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                    <Calendar className="w-4 h-4 text-gray-300" />
                    <span>{currentExpData.duration}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
                    {currentExpData.description}
                  </p>
                  
                  {/* Detailed Bullet Points */}
                  <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">Key Milestones & Contributions</h4>
                  <ul className="space-y-3">
                    {currentExpData.bulletPoints.map((point, index) => (
                      <li key={index} className="flex gap-3 text-sm text-gray-700 leading-relaxed align-top">
                        <CheckCircle2 className="w-4 h-4 text-sage-700 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specific Problem Solving Interactive Widget for U-Must R&D */}
                {currentExpData.id === "umust" && (
                  <div className="mt-8 pt-6 border-t border-gray-100 bg-sage-50/50 rounded-2xl p-5 border border-sage-100">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-1.5 text-sage-800">
                        <Sparkles className="w-4 h-4 text-sage-700" />
                        <span className="text-xs font-mono font-bold uppercase">PDCA 실무 오차 해결 이네이블러</span>
                      </div>
                      <span className="text-[10px] font-mono bg-sage-700 text-white px-2 py-0.5 rounded">
                        재현율 상승 시뮬레이터
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                      <div className="md:col-span-7">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">
                          {pdcaSteps[pdcaStep].title}
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed mb-3">
                          {pdcaSteps[pdcaStep].text}
                        </p>
                        
                        <div className="bg-white border border-gray-150 p-2 text-center rounded-lg">
                          <p className="text-[10px] text-gray-400 font-mono">실무 개선 실행 조치</p>
                          <p className="text-xs font-bold text-sage-800">{pdcaSteps[pdcaStep].action}</p>
                        </div>
                      </div>

                      {/* Display Data progress and Button details */}
                      <div className="md:col-span-5 flex flex-col items-center justify-center p-3 border-l border-gray-200">
                        <span className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">실험 데이터 재현 정확성</span>
                        
                        {/* Interactive gauge height bar */}
                        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden mt-2 mb-1">
                          <motion.div
                            animate={{ width: `${pdcaSteps[pdcaStep].data}%` }}
                            className="bg-sage-700 h-full rounded-full"
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <span className="text-xl font-display font-bold text-sage-900">{pdcaSteps[pdcaStep].data}%</span>
                        <span className="text-[9px] text-gray-400 text-center font-mono mt-0.5">{pdcaSteps[pdcaStep].status}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2 justify-end">
                      <button
                        onClick={handleResetPdca}
                        className="px-3 py-1.5 text-xs text-gray-500 hover:text-gray-800 font-mono cursor-pointer"
                      >
                        처음 상태로
                      </button>
                      <button
                        onClick={handleNextPdca}
                        className="px-4 py-1.5 bg-sage-750 hover:bg-sage-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer bg-sage-700"
                      >
                        <RotateCw className="w-3.5 h-3.5" />
                        {pdcaStep === 3 ? "가장 하이라이트 확인 (반복)" : "다음 PDCA 단계 확인"}
                      </button>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
