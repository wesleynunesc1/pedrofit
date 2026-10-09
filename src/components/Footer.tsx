import React from 'react';
import { ArrowUp, MessageCircle, Zap } from 'lucide-react';
import { CONFIG } from '../data/config';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#040806',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '60px',
        paddingBottom: '36px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Main Footer Row */}
        <div
          className="footer-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '30px',
            marginBottom: '40px',
            paddingBottom: '36px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          {/* Logo Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <img
              src="/images/logo/logo-pedro.png"
              alt="Pedro Fit"
              style={{
                height: '38px',
                width: 'auto',
                maxWidth: '180px',
                objectFit: 'contain',
                display: 'block'
              }}
            />
            <div
              style={{
                fontSize: '11px',
                color: 'var(--text-secondary)',
                letterSpacing: '1px'
              }}
            >
              Consultoria Personalizada
            </div>
          </div>

          {/* Nav Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '24px'
            }}
          >
            <a href="#topo" style={{ fontSize: '14px', color: 'var(--text-secondary)' }} className="footer-nav-link">
              Início
            </a>
            <a href="#pilares" style={{ fontSize: '14px', color: 'var(--text-secondary)' }} className="footer-nav-link">
              Consultoria
            </a>
            <a href="#resultados" style={{ fontSize: '14px', color: 'var(--text-secondary)' }} className="footer-nav-link">
              Resultados
            </a>
            <a href="#sobre" style={{ fontSize: '14px', color: 'var(--text-secondary)' }} className="footer-nav-link">
              Sobre
            </a>
          </nav>

          {/* Social Links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Pedro Fit"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                transition: 'all 0.2s ease'
              }}
              className="social-icon"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>

            <a
              href={CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Pedro Fit"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(96, 227, 20, 0.12)',
                border: '1px solid rgba(96, 227, 20, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--green-primary)',
                transition: 'all 0.2s ease'
              }}
              className="social-icon"
            >
              <MessageCircle size={18} />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Ir para o topo"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 600,
                transition: 'all 0.2s ease'
              }}
              className="back-to-top"
            >
              <ArrowUp size={14} />
              <span>Topo</span>
            </button>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--text-secondary)',
              marginBottom: '12px'
            }}
          >
            Consultoria Pedro Fit © {new Date().getFullYear()}. Todos os direitos reservados.
          </p>

          <p
            style={{
              fontSize: '11px',
              color: 'var(--text-muted)',
              lineHeight: 1.6
            }}
          >
            Os produtos e serviços vendidos neste site não devem ser interpretados como uma promessa ou garantia de resultados mágicos. Seu nível de sucesso em alcançar os resultados com o uso de nossos planejamentos depende diretamente da sua dedicação, adesão estrita ao plano de treino e plano alimentar, regularidade e características biológicas individuais.
          </p>
        </div>
      </div>

      <style>{`
        .footer-nav-link:hover {
          color: var(--green-primary) !important;
        }
        .social-icon:hover {
          transform: translateY(-2px);
          border-color: var(--green-primary) !important;
        }
        .back-to-top:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: var(--green-primary) !important;
          color: var(--green-primary) !important;
        }
        @media (max-width: 768px) {
          .footer-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
};
