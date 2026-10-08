import React, { useState, useEffect } from 'react';
import { HelpCircle, ChevronRight, Zap } from 'lucide-react';
import { CONFIG } from '../data/config';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="topo"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: '100%',
        transition: 'all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)',
        backgroundColor: isScrolled ? 'rgba(6, 15, 12, 0.88)' : 'rgba(6, 15, 12, 0.72)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.6)' : '0 4px 20px rgba(0, 0, 0, 0.25)',
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}
      >
        {/* Logo */}
        <a
          href="#topo"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none'
          }}
          aria-label="Pedro Fit Início"
        >
          <img
            src="/images/logo/logo-pedro.png"
            alt="Pedro Fit"
            style={{
              height: '42px',
              width: 'auto',
              maxWidth: '190px',
              objectFit: 'contain',
              display: 'block'
            }}
            className="header-logo-img"
          />
        </a>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Secondary Button: Dúvidas */}
          <a
            href={CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              padding: '10px 18px',
              fontSize: '13px'
            }}
          >
            <HelpCircle size={16} />
            <span className="hide-on-very-small">DÚVIDAS</span>
          </a>

          {/* Primary CTA */}
          <a
            href={CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta header-cta-btn"
            style={{
              padding: '10px 20px',
              fontSize: '13px'
            }}
          >
            <span>FALAR NO WHATSAPP</span>
            <ChevronRight size={16} strokeWidth={3} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .header-logo-img {
            height: 28px !important;
            max-width: 125px !important;
          }
          .hide-on-very-small {
            display: none;
          }
          .btn-secondary {
            padding: 7px 10px !important;
            font-size: 11px !important;
          }
          .header-cta-btn {
            padding: 8px 13px !important;
            font-size: 11px !important;
          }
        }
      `}</style>
    </header>
  );
};
