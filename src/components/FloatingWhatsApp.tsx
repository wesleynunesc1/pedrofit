import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONFIG } from '../data/config';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Atendimento rápido via WhatsApp"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 999
      }}
    >
      <a
        href={CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          position: 'relative'
        }}
        className="whatsapp-float-btn"
      >
        <MessageCircle size={28} fill="#ffffff" color="#25D366" />
        
        {/* Active badge */}
        <span
          style={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            backgroundColor: 'var(--green-primary)',
            border: '2px solid #060f0c',
            boxShadow: '0 0 6px var(--green-primary)'
          }}
        />
      </a>

      <style>{`
        .whatsapp-float-btn:hover {
          transform: scale(1.1) translateY(-3px);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.65);
        }
      `}</style>
    </aside>
  );
};
