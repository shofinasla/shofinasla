import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQSectionProps {
  faqs: FAQItem[];
  whatsappUrl: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs, whatsappUrl }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#060913] relative border-b border-sky-950/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>PERTANYAAN UMUM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Jawaban untuk Keraguan Anda Sebelum Memulai.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Hal-hal mendasar yang sering ditanyakan oleh pemilik bisnis sebelum memesan website:
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-sky-950/80 bg-[#0a0f1e]/80 overflow-hidden transition-colors shadow-md"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:text-sky-300 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <span
                    className={`p-1.5 rounded-lg bg-[#060913] border border-sky-900/40 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-sky-400 border-sky-500/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-sky-950 text-xs sm:text-sm text-slate-300 leading-relaxed animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-10 p-6 rounded-2xl bg-[#090e1c] border border-sky-900/40 text-left flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">
              Punya pertanyaan lain yang belum terjawab?
            </h4>
            <p className="text-xs text-slate-300">
              Jangan ragu untuk bertanya langsung. Saya akan membalas dengan ramah dan jelas.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 text-xs font-bold transition-colors flex items-center gap-2 shadow-md shadow-sky-500/20"
          >
            <MessageSquare className="w-3.5 h-3.5 text-slate-950" />
            <span>Tanya via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
