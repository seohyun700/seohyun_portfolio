import { useState } from "react";
import { ShieldCheck, RefreshCw, Layers, CheckCircle2 } from "lucide-react";

export default function SageBanner() {
  const [activeSegment, setActiveSegment] = useState<string>("challenge");

  const blocks = {
    challenge: {
      title: "Challenge",
      metric: "RAW DATA SILO",
      sub: "비재현성 실험 및 산재된 논문 데이터",
      desc: "수많은 원천 생명과학 기술이 명확한 비즈니스로 변환되지 못한 채 연구실의 실험 노트 형식에 머물러 있습니다.",
      tag: "생명공학 연구의 병목"
    },
    opportunity: {
      title: "Opportunity",
      metric: "2x EFFICIENCY",
      sub: "체계적인 PDCA 표준 프로토콜 설계",
      desc: "구두 전수를 전수 조사하고, 3회 이상 반복 크로스 체크를 의무화하여 인적 변수를 통제하고 검증 속도를 극대화합니다.",
      tag: "데이터 기반 고속 최적화"
    },
    impact: {
      title: "Impact",
      metric: "100% RELIABILITY",
      sub: "성공 가능성이 높은 후보물질 가치 판정",
      desc: "해외 바이어나 CDMO 파트너사에 임상 진입 신뢰도와 타당성 성과를 정형화하여 제안하고 최종 기술 수출 및 투자 가치를 보호합니다.",
      tag: "전파 가능한 규격 신뢰"
    }
  };

  return (
    <section className="py-20 px-6 bg-sage-800 text-white relative overflow-hidden">
      {/* Background geometric flare */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-sage-700 rounded-full filter blur-3xl opacity-30 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <p className="text-xs font-mono tracking-widest text-sage-200 uppercase mb-2">Predictable Bottlenecks & Strategic Solutions</p>
          <h2 className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl tracking-tight max-w-4xl leading-tight">
            바이오 기술의 과학적 정합성을 <br className="hidden sm:block" />
            <span className="text-sage-100 font-bold underline decoration-sage-400">비즈니스 신뢰 규격</span>으로 설계합니다.
          </h2>
        </div>

        {/* 3 Column Grid with High Contrast Styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Challenge Block */}
          <div 
            onClick={() => setActiveSegment("challenge")}
            className={`p-6 rounded-2xl border transition-all cursor-pointer ${
              activeSegment === "challenge" 
                ? "bg-sage-900 border-sage-500 scale-[1.02] shadow-md" 
                : "bg-sage-800/50 border-white/10 hover:border-white/30"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-mono tracking-wider text-sage-300 font-bold uppercase">CHALLENGE</span>
              <Layers className="w-4 h-4 text-orange-400" />
            </div>
            <p className="text-3xl font-display font-bold text-orange-300">Raw Silos</p>
            <p className="text-xs font-mono text-sage-200 mt-1 uppercase">비재현성 & 지표의 모호성</p>
            <p className="text-xs text-sage-100/80 mt-4 leading-relaxed font-light">
              문서화되지 않고 개별 연구자의 구두 인수인계에 의존하는 실험 환경은 바이오벤처 기술 실사의 걸림돌입니다.
            </p>
          </div>

          {/* Opportunity Block */}
          <div 
            onClick={() => setActiveSegment("opportunity")}
            className={`p-6 rounded-2xl border transition-all cursor-pointer ${
              activeSegment === "opportunity" 
                ? "bg-sage-900 border-sage-500 scale-[1.02] shadow-md" 
                : "bg-sage-800/50 border-white/10 hover:border-white/30"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-mono tracking-wider text-sage-300 font-bold uppercase">OPPORTUNITY</span>
              <RefreshCw className="w-4 h-4 text-emerald-400 animate-spin-slow" />
            </div>
            <p className="text-3xl font-display font-bold text-emerald-300">2x Trust</p>
            <p className="text-xs font-mono text-sage-200 mt-1 uppercase">PDCA 표준 프로토콜 정립</p>
            <p className="text-xs text-sage-100/80 mt-4 leading-relaxed font-light">
              동일 조건 3회 반복 교차 체크, 핵심 연구 데이터 시각화 리포트를 전사 수준에 일관되게 제공하여 신뢰를 가속화합니다.
            </p>
          </div>

          {/* Impact Block */}
          <div 
            onClick={() => setActiveSegment("impact")}
            className={`p-6 rounded-2xl border transition-all cursor-pointer ${
              activeSegment === "impact" 
                ? "bg-sage-900 border-sage-500 scale-[1.02] shadow-md" 
                : "bg-sage-800/50 border-white/10 hover:border-white/30"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-mono tracking-wider text-sage-300 font-bold uppercase">IMPACT</span>
              <ShieldCheck className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-3xl font-display font-bold text-blue-300">100% Value</p>
            <p className="text-xs font-mono text-sage-200 mt-1 uppercase font-bold">L/O 및 CDMO 수주 정합성</p>
            <p className="text-xs text-sage-100/80 mt-4 leading-relaxed font-light">
              바이오 인허가 심사 기소 및 유력 바이어에 입증 가능한 근거 리포팅을 제출하여 규제 실사를 패스하고 가치를 증명합니다.
            </p>
          </div>

        </div>

        {/* Dynamic Detail Overlay Card based on user selection */}
        <div className="bg-white/5 border border-white/15 backdrop-blur-md rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono uppercase text-sage-300 font-bold">{blocks[activeSegment].title} DEEP DIVE</span>
            </div>
            <span className="text-xs font-mono bg-sage-700 text-sage-200 px-3 py-1 rounded-full">{blocks[activeSegment].tag}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <h3 className="text-xl sm:text-2xl font-display font-semibold mb-2">{blocks[activeSegment].sub}</h3>
              <p className="text-sm text-sage-200/90 font-light leading-relaxed">{blocks[activeSegment].desc}</p>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <div className="bg-sage-900 border border-sage-700 text-center py-4 px-6 rounded-xl w-full max-w-[240px]">
                <p className="text-[10px] font-mono text-sage-400 uppercase">Focus Metric</p>
                <p className="text-2xl font-display font-bold text-sage-100 mt-1 font-mono tracking-tight">{blocks[activeSegment].metric}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
