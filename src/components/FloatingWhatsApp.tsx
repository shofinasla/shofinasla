import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  whatsappUrl: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ whatsappUrl }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-auto">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 border border-slate-700/80 px-3.5 py-2 rounded-2xl shadow-2xl text-left animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-xs">
          <div>
            <p className="text-xs font-bold text-slate-100">
              Butuh Website untuk Bisnis?
            </p>
            <p className="text-[11px] text-slate-400">
              Konsultasi langsung dengan Ahmad Shofi Nasla via WhatsApp.
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-500 hover:text-slate-300 p-1"
            aria-label="Tutup pesan bantuan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Ahmad Shofi Nasla"
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/30 transition-all transform hover:scale-110 active:scale-95 group relative"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-300 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-slate-950" />
        <MessageSquare className="w-6 h-6 fill-slate-950" />
      </a>
    </div>
  );
};
