import { useState } from "react";
import { motion } from "motion/react";
import { Lightbulb, Workflow, Users, CheckCircle, Flame, Star, Trophy } from "lucide-react";

export default function Competencies() {
  const [balanceVal, setBalanceVal] = useState<number>(50);

  // Derive status based on AQUI slider
  let bandReport = {
    harmony: 40,
    sales: 10,
    statusText: "동아리 부원 간 갈등 봉착 및 냉소",
    title: "인디 고집 극단적 치우침",
    color: "text-rose-500",
    bg: "bg-rose-50"
  };

  if (balanceVal >= 40 && balanceVal <= 60) {
    bandReport = {
      harmony: 100,
      sales: 100,
      statusText: "1/2부 전수 분할 기획안 제시 -> 30분 전석 완판 성공!",
      title: "★ 1/2부 분할 절충안 (보컬의 현장 협상안)",
      color: "text-emerald-700",
      bg: "bg-emerald-50 border-emerald-200"
    };
  } else if (balanceVal > 60) {
    bandReport = {
      harmony: 50,
      sales: 70,
      statusText: "부원들의 록스피릿 단절 및 반발, 일부 불만 표출",
      title: "지나치게 상업적 대중 가요 올인",
      color: "text-amber-600",
      bg: "bg-amber-50"
    };
  }

  return (
    <section id="competence" className="py-20 px-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Headline */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold text-sage-800 uppercase tracking-widest bg-sage-50 px-3 py-1 rounded-full">
            CORE COMPETENCIES
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-gray-905 tracking-tight mt-3">
            바이오 사업개발 전사로 거듭날 <br className="sm:hidden" />
            <span className="text-sage-750 font-bold text-sage-700">3가지 핵심 가치 무기</span>
          </h2>
          <p className="text-gray-500 font-light text-sm sm:text-base mt-2 max-w-xl mx-auto">
            정량적 지식과 정성적 협업 역량을 유기적으로 연합하여 임원진과 대외 파트너사를 사로잡을 핵심 강점입니다.
          </p>
        </div>

        {/* Bento Grid Layout (3 Blocks) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Bento Block 1: Tech-to-Biz Insight (4 Columns) */}
          <div className="lg:col-span-4 bg-slate-50 border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sage-700 text-white flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>
              <p className="text-xs font-mono font-bold text-sage-600 uppercase tracking-widest">COMPETENCY 01</p>
              <h3 className="text-xl font-display font-bold text-gray-950 mt-1 mb-4">
                기술과 비즈니스의 융합 <br />
                (Tech-to-Biz)
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6">
                유전자치료 및 올리고뉴클레오타이드 기반 바이오의약품 산업 전반의 흐름을 K-NIBRT 실무 이론을 기초로 깊이 분석합니다. 연구실 데이터를 단순 세포 수치로 묵혀두지 않고 파트너사 요구에 맞추어 비즈니스 상업적 가치 제안으로 치밀하게 번역합니다.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-gray-250 border-dashed">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                <CheckCircle className="w-4 h-4 text-sage-700 shrink-0" />
                <span>올리고 기반 바이오신약 구조 이해</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                <CheckCircle className="w-4 h-4 text-sage-700 shrink-0" />
                <span>CDMO 비즈니스 밸류체인 설계 역량</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                <CheckCircle className="w-4 h-4 text-sage-700 shrink-0" />
                <span>근거 기반 오차 극복 가치 프레젠테이션</span>
              </div>
            </div>
          </div>

          {/* Bento Block 2: Process Optimization (4 Columns) */}
          <div className="lg:col-span-4 bg-slate-50 border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-900 text-white flex items-center justify-center mb-6">
                <Workflow className="w-6 h-6" />
              </div>
              <p className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest">COMPETENCY 02</p>
              <h3 className="text-xl font-display font-bold text-gray-950 mt-1 mb-4">
                표준 구축과 위기 해결 <br />
                (Process Optimization)
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6">
                불확실성과 재현율 리스크가 잦은 비임상 프로세스에서 원인 정의부터 검증 및 영구 SOP 문서 배포로 이어지는 체계적 PDCA 접근을 완수합니다. 조직의 누수되는 리소스를 최소화하고 기술 이전 및 파트너 계약 기획의 규격 신뢰를 완결합니다.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-gray-250 border-dashed">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle className="w-4 h-4 text-indigo-750 shrink-0 text-indigo-700" />
                <span>문제 해결을 위한 PDCA 프레임워크</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle className="w-4 h-4 text-indigo-750 shrink-0 text-indigo-700" />
                <span>구두 방식 프로세스의 정량 표준 매뉴얼화</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle className="w-4 h-4 text-indigo-750 shrink-0 text-indigo-700" />
                <span>부서 간 교차 체크 병목 제거 및 신뢰성 확보</span>
              </div>
            </div>
          </div>

          {/* Bento Block 3: Human Connection & Band Negotiation Simulator (4 Columns) */}
          <div className="lg:col-span-4 bg-white border-2 border-gray-950 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                  30분 만에 완판 레코드
                </span>
              </div>
              <p className="text-xs font-mono font-bold text-amber-600 uppercase tracking-widest">COMPETENCY 03</p>
              <h3 className="text-xl font-display font-bold text-gray-950 mt-1 mb-2">
                인간적 중재와 경청 합의 <br />
                (Consensus Synergy)
              </h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed mb-4">
                록밴드 'AQUI' 보컬 및 홍보팀장 시절, 멤버간의 정체성 대립을 개별 전수 인터뷰를 통해 1/2부 분할이라는 스마트 절충안으로 극복한 협상력을 보유하고 있습니다.
              </p>
              
              {/* Interactive Balance Sandbox Slider */}
              <div className="bg-gray-50 border border-gray-150 rounded-2xl p-4 my-2">
                <div className="flex justify-between text-[10px] font-medium text-gray-400 font-mono mb-1">
                  <span>인디 딥코어 음악 고수</span>
                  <span>상업 댄스가요 위주</span>
                </div>
                
                <input 
                  type="range"
                  min="0"
                  max="100"
                  value={balanceVal}
                  onChange={(e) => setBalanceVal(Number(e.target.value))}
                  className="w-full accent-gray-900 cursor-pointer"
                  id="consensus-slider"
                />
                
                {/* Dynamically Styled Consensus Outcome Box */}
                <div className={`mt-3 p-3 rounded-xl border text-xs transition-all text-center ${bandReport.bg}`}>
                  <p className={`font-bold ${bandReport.color} flex items-center justify-center gap-1`}>
                    <Star className="w-3.5 h-3.5 fill-current shrink-0" />
                    {bandReport.title}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-1 font-semibold">{bandReport.statusText}</p>
                  
                  {/* Gauge bars representing sold-out metrics */}
                  <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-gray-200/50 text-[9px] font-mono text-gray-400">
                    <div>팀 협업 시너지: <span className="font-bold text-gray-800">{bandReport.harmony}%</span></div>
                    <div>티켓 예매율: <span className="font-bold text-gray-800">{bandReport.sales}%</span></div>
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-center text-gray-400 font-mono mt-1">
                *슬라이더를 중간으로 조율하여 완판 합의를 도출해 보세요.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
