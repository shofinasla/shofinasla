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
    <section id="faq" className="py-20 bg-slate-900/30 relative border-b border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>PERTANYAAN UMUM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
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
                className="rounded-2xl border border-slate-800 bg-slate-950/70 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:text-indigo-300 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-100">
                    {faq.question}
                  </span>
                  <span
                    className={`p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-indigo-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-900/90 text-xs sm:text-sm text-slate-300 leading-relaxed animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-950 border border-slate-800 text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-100">
              Punya pertanyaan lain yang belum terjawab?
            </h4>
            <p className="text-xs text-slate-400">
              Jangan ragu untuk bertanya langsung. Saya akan membalas dengan ramah dan jelas.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Tanya via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
