import React from 'react';
import { CheckCircle2, ChevronRight, Users, ShieldCheck, Flame, MessageCircle } from 'lucide-react';
import { CONFIG } from '../data/config';
import { RevealOnScroll } from './RevealOnScroll';

export const Hero: React.FC = () => {
  return (
    <section
      className="hero-section-root"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - var(--header-height))',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '40px',
        paddingBottom: '70px',
        overflow: 'hidden',
        backgroundColor: '#060f0c'
      }}
    >
      {/* 1. Camada da Foto de Fundo (Foto 9a de fundo tanto para desktop como mobile) */}
      <div
        className="hero-bg-photo"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '58%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden'
        }}
      >
        <img
          src="/images/hero/hero-9a.png"
          alt="Pedro Lima Personal Trainer"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 12%',
            filter: 'contrast(1.08) brightness(0.96)'
          }}
        />

        {/* Degradê horizontal no desktop */}
        <div
          className="hero-desktop-hgradient"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #060f0c 0%, rgba(6, 15, 12, 0.8) 25%, rgba(6, 15, 12, 0.35) 60%, rgba(6, 15, 12, 0.1) 100%)'
          }}
        />

        {/* Degradê vertical no desktop */}
        <div
          className="hero-desktop-vgradient"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, #060f0c 0%, transparent 12%, transparent 78%, #060f0c 100%)'
          }}
        />

        {/* Brilho verde de ambientação */}
        <div
          style={{
            position: 'absolute',
            top: '25%',
            right: '20%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(96, 227, 20, 0.22) 0%, transparent 70%)',
            filter: 'blur(75px)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* 2. Degradê específico para MOBILE: foto de fundo com ótima legibilidade */}
      <div className="hero-mobile-gradient-overlay" />

      {/* 3. Degradê geral no Desktop */}
      <div
        className="hero-main-gradient"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, #060f0c 0%, #060f0c 40%, rgba(6, 15, 12, 0.88) 55%, rgba(6, 15, 12, 0.25) 75%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* 4. Conteúdo Principal */}
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          {/* Coluna de Textos */}
          <div className="hero-content-col" style={{ maxWidth: '640px' }}>
            {/* Selo de Prova Social */}
            <RevealOnScroll delay={100}>
              <div
                className="hero-social-proof"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '6px 16px 6px 8px',
                  borderRadius: '9999px',
                  marginBottom: '22px',
                  backdropFilter: 'blur(12px)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: '#143427',
                      border: '2px solid #060f0c',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#60e314'
                    }}
                  >
                    <Users size={14} />
                  </div>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: '#1f4836',
                      border: '2px solid #060f0c',
                      marginLeft: '-8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#ffffff'
                    }}
                  >
                    <ShieldCheck size={14} />
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="var(--green-primary)" />
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#e2e8f0',
                      letterSpacing: '0.2px'
                    }}
                  >
                    Consultoria com mais de <strong style={{ color: 'var(--green-primary)' }}>+100</strong> alunos transformados!
                  </span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Headline H1 */}
            <RevealOnScroll delay={200}>
              <h1
                className="hero-headline"
                style={{
                  fontSize: 'clamp(28px, 4.2vw, 50px)',
                  fontWeight: 800,
                  lineHeight: 1.16,
                  letterSpacing: '-0.8px',
                  marginBottom: '20px',
                  color: '#ffffff',
                  textShadow: '0 2px 20px rgba(0, 0, 0, 0.7)'
                }}
              >
                Transforme o seu físico com a <span style={{ color: 'var(--green-primary)' }}>Consultoria Online</span> do Pedro Lima.
              </h1>
            </RevealOnScroll>

            {/* Texto Explicativo */}
            <RevealOnScroll delay={300}>
              <p
                className="hero-description"
                style={{
                  fontSize: 'clamp(15px, 1.8vw, 17px)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '32px',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)'
                }}
              >
                Chega de treinos genéricos e dietas que não se encaixam na sua rotina. Tenha uma periodização científica sob medida para o seu objetivo e suporte diário via WhatsApp diretamente com o Pedro para acelerar sua queima de gordura e ganho de massa magra.
              </p>
            </RevealOnScroll>

            {/* Botão de Ação Principal e Microcopy */}
            <RevealOnScroll delay={400}>
              <div className="hero-cta-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href={CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta hero-btn"
                  style={{
                    padding: '14px 30px',
                    fontSize: '14.5px',
                    alignSelf: 'flex-start'
                  }}
                >
                  <MessageCircle size={17} color="#040d07" />
                  <span>COMEÇAR CONSULTORIA</span>
                  <ChevronRight size={17} strokeWidth={3} />
                </a>

                <div
                  className="hero-microcopy"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--text-muted)',
                    fontSize: '13px'
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--green-primary)',
                      boxShadow: '0 0 8px var(--green-primary)'
                    }}
                  />
                  <span>Acompanhamento direto no WhatsApp • Vagas limitadas por mês</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      <style>{`
        /* Desktop styles */
        @media (min-width: 993px) {
          .hero-mobile-gradient-overlay {
            display: none !important;
          }
        }

        /* Mobile & Tablet styles */
        @media (max-width: 992px) {
          .hero-section-root {
            min-height: auto !important;
            padding-top: 50px !important;
            padding-bottom: 60px !important;
            align-items: center !important;
          }

          /* Foto 9a de fundo no mobile ocupando toda a hero */
          .hero-bg-photo {
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            min-height: 100% !important;
            max-height: none !important;
            opacity: 1 !important;
            z-index: 0 !important;
          }

          .hero-bg-photo img {
            object-position: center 10% !important;
            filter: contrast(1.06) brightness(0.85) !important;
          }

          .hero-desktop-hgradient,
          .hero-desktop-vgradient,
          .hero-main-gradient {
            display: none !important;
          }

          /* Degradê de fundo escuro para garantir leitura nítida das informações centralizadas */
          .hero-mobile-gradient-overlay {
            display: block !important;
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to bottom,
              rgba(6, 15, 12, 0.78) 0%,
              rgba(6, 15, 12, 0.65) 25%,
              rgba(6, 15, 12, 0.88) 65%,
              #060f0c 100%
            ) !important;
            z-index: 1;
            pointer-events: none;
          }

          /* Informações centralizadas no meio da hero no mobile */
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
            justify-items: center !important;
          }

          .hero-content-col {
            padding-top: 0 !important;
            max-width: 580px !important;
            margin: 0 auto !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }

          .hero-social-proof {
            margin-left: auto !important;
            margin-right: auto !important;
            justify-content: center !important;
            text-align: center !important;
          }

          .hero-headline {
            text-align: center !important;
          }

          .hero-description {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .hero-cta-wrapper {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            width: 100% !important;
          }

          .hero-btn {
            align-self: center !important;
            margin: 0 auto !important;
            width: auto !important;
            max-width: 100% !important;
            padding: 13px 26px !important;
            font-size: 13.5px !important;
            white-space: nowrap !important;
          }

          .hero-microcopy {
            justify-content: center !important;
            text-align: center !important;
          }
        }

        @media (max-width: 480px) {
          .hero-section-root {
            padding-top: 36px !important;
            padding-bottom: 48px !important;
          }

          .hero-social-proof {
            font-size: 11px !important;
            padding: 5px 12px 5px 6px !important;
            gap: 7px !important;
            margin-bottom: 16px !important;
            max-width: 100% !important;
          }

          .hero-social-proof span {
            font-size: 11.5px !important;
            line-height: 1.3 !important;
          }

          .hero-headline {
            font-size: clamp(26px, 7.6vw, 36px) !important;
            margin-bottom: 16px !important;
          }

          .hero-description {
            font-size: 14.5px !important;
            line-height: 1.6 !important;
            margin-bottom: 24px !important;
          }

          .hero-btn {
            padding: 12px 22px !important;
            font-size: 12.5px !important;
            gap: 6px !important;
          }

          .hero-microcopy {
            font-size: 11.5px !important;
            gap: 6px !important;
          }
        }
      `}</style>
    </section>
  );
};
