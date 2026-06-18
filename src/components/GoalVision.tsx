import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Check, Mail, Phone, Calendar, ArrowRight, MessageSquare, BadgeCheck } from "lucide-react";

export default function GoalVision() {
  const [activeTab, setActiveTab] = useState<string>("vision");
  const [contactName, setContactName] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("init");
  const [customMsg, setCustomMsg] = useState<string>("");
  const [hasSent, setHasSent] = useState<boolean>(false);

  // Pre-configured response messages simulating an instant AI response
  const answers: Record<string, { reply: string; label: string }> = {
    init: {
      reply: "위 질문 버튼을 누르시면, 바이오 사업개발 직무 적합성에 대한 저의 답변을 즉시 확인하실 수 있습니다.",
      label: "메뉴를 선택해 보세요."
    },
    start: {
      reply: "2026년 8월 의생명공학과 학부 졸업예정입니다. 인턴십 및 정규 포지션 수용 시점은 기업의 일정에 맞추어 즉시 조율 가능하며, 협의에 따라 유연하게 근무를 개시할 용의가 확보되어 있습니다.",
      label: "근무 합류 가능한 시점은 언제인가요?"
    },
    knibrt: {
      reply: "K-NIBRT에서 바이오의약품 공정 전반(배양·정제·SOP)에 대한 심화 이론을 정립했습니다. 특히 유전자치료제 및 올리고뉴클레오타이드 관련 핵심 원천 기술의 매칭을 이해하고 있어, 신규 후보물질의 도입 타당성 검토 시 연구팀과의 장벽 없는 소통이 가능합니다.",
      label: "K-NIBRT 교육이 어떻게 사업개발에 무기가 되나요?"
    },
    negotiation: {
      reply: "AQUI 록밴드에서의 '1/2부 분할 기획'은 기술의 본래 정체성(과학)도 지켜내면서 관객의 만족도(비즈니스 가치)도 확보해야 하는 실제 제약 바이오 기술 수출 협상과 매우 닮아있습니다. 양측 의견을 전수 경청해 실리를 모두 확보하는 합리적 딜클로징을 완수하겠습니다.",
      label: "밴드 중재 경험이 직무에 어떻게 적용되나요?"
    },
    custom: {
      reply: "전송해 주신 소중한 메시지가 가상 메일에 기록되었습니다! tjgus705@gmail.com 으로 즉시 알림이 발송되며 빠른 조율을 통해 메일로 직접 답변 드리겠습니다.",
      label: "직접 커스텀 메시지 발송 완료"
    }
  };

  const handleSendForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() && !customMsg.trim()) return;
    setSelectedTopic("custom");
    setHasSent(true);
  };

  return (
    <section id="vision" className="py-20 px-6 bg-sage-900 text-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Goal & Vision Statement Container */}
        <div className="bg-sage-800 border-2 border-sage-700 rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 p-8 opacity-10 font-display font-bold text-7xl sm:text-9xl pointer-events-none select-none">
            VISION
          </div>

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/15 border border-amber-400/30 px-3 py-1 rounded-full uppercase tracking-wider">
              Goal & Vision
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mt-4 mb-6">
              "차별화된 기술 정합성 경쟁력을 바탕으로, <br />
              <span className="text-amber-300 font-bold">세계 시장에서 글로벌 비즈니스를 확장</span>하고 <br className="hidden sm:block" />
              이해관계자를 완벽하게 조율하는 인재가 되겠습니다."
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 text-xs sm:text-sm text-sage-200 font-light leading-relaxed">
              <p>
                단순히 연구 결과의 반복성을 높였던 유머스트R&D의 세밀함, 국가 생체 연구를 조율했던 KIST의 시선, 팀을 위해 한 시간 먼저 움직인 방송국 조연출의 유연한 조정력은 하나로 모여 <strong className="text-white font-semibold">최적의 사업개발 파트너십</strong>을 선사할 것입니다.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action & Live Interview Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Card (5 Columns) */}
          <div className="lg:col-span-5 bg-sage-850/50 border border-white/10 rounded-3xl p-6 sm:p-8">
            <span className="text-xs font-mono text-sage-400 tracking-wider">CONTACT DIRECTLY</span>
            <h3 className="text-2xl font-display font-medium mt-1 mb-8">Discuss bio business ideas with me.</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-sage-400 font-mono uppercase">E-MAIL ADDRESS</p>
                  <p className="text-sm font-semibold hover:text-emerald-300 transition-colors">tjgus700@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-sage-400 font-mono uppercase">EDUCATION & GRADUATION</p>
                  <p className="text-sm font-semibold">건국대학교 의생명공학과 졸업예정 ('26.08)</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-sage-400 font-mono uppercase">SPECIALIZATION LICENSE</p>
                  <p className="text-sm font-semibold text-amber-300">K-NIBRT 바이오의약품 전과정 이론 수료</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-sage-300">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>실시간 입사 제안 검토 및 커피챗 문의 환영</span>
            </div>
          </div>

          {/* Right Column: Dynamic Live Portal (7 Columns) */}
          <div className="lg:col-span-7 bg-white text-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-150 flex flex-col justify-between shadow-lg">
            
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-sage-700" />
                  <span className="text-xs font-mono font-bold text-gray-400 tracking-wider">LIVE PORTAL RECRUITER RESPONSE</span>
                </div>
                <span className="text-[10px] bg-sage-100 text-sage-800 px-2 py-0.5 rounded font-mono font-bold">인터렉티브 스위치</span>
              </div>

              <p className="text-xs text-gray-400 font-mono mb-4">채용 담당자분께서 아래 버튼을 클릭하시면 저의 답변을 실시간으로 미리 모의 테스트할 수 있습니다.</p>

              {/* Precompiled Questions buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
                <button
                  onClick={() => { setSelectedTopic("start"); setHasSent(false); }}
                  className={`text-left p-3 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                    selectedTopic === "start" 
                      ? "bg-sage-700 border-sage-700 text-white shadow-xs" 
                      : "bg-gray-50 border-gray-150 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  합류 시점 검토
                </button>
                <button
                  onClick={() => { setSelectedTopic("knibrt"); setHasSent(false); }}
                  className={`text-left p-3 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                    selectedTopic === "knibrt" 
                      ? "bg-sage-700 border-sage-700 text-white shadow-xs" 
                      : "bg-gray-50 border-gray-150 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  K-NIBRT의 강업
                </button>
                <button
                  onClick={() => { setSelectedTopic("negotiation"); setHasSent(false); }}
                  className={`text-left p-3 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                    selectedTopic === "negotiation" 
                      ? "bg-sage-700 border-sage-700 text-white shadow-xs" 
                      : "bg-gray-50 border-gray-150 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  밴드 중재와 사업개발
                </button>
              </div>

              {/* Display Dialogue Reply Bubble */}
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-gray-150 mb-6 font-medium text-xs sm:text-sm text-gray-700 leading-relaxed min-h-[100px] relative">
                <p className="text-[9px] font-mono text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-1.5 mb-2.5">
                  SELECTED: {answers[selectedTopic].label}
                </p>
                <motion.p 
                  key={selectedTopic}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                >
                  {answers[selectedTopic].reply}
                </motion.p>
              </div>
            </div>

            {/* Custom Interactive Message Form */}
            <form onSubmit={handleSendForm} className="border-t border-gray-100 pt-5 mt-4">
              <p className="text-xs text-gray-400 font-mono mb-3">직접 면접 제안이나 이메일 메세지 남기기</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input 
                  type="text" 
                  placeholder="기업명 혹은 소속명을 기재해주세요"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:ring-1 focus:ring-sage-700 focus:outline-hidden"
                  id="form-company-name"
                />
                <input 
                  type="text" 
                  placeholder="답변 받으실 이메일 주소"
                  className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:ring-1 focus:ring-sage-700 focus:outline-hidden"
                  id="form-recruiter-email"
                />
              </div>

              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="메시지 또는 미팅 제안 일정을 간략히 적어주세요!"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:ring-1 focus:ring-sage-700 focus:outline-hidden"
                  id="form-custom-msg"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-gray-900 border border-gray-900 hover:bg-sage-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer"
                >
                  {hasSent ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Send className="w-3.5 h-3.5" />}
                  <span>{hasSent ? "전송 완료" : "보내기"}</span>
                </button>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
