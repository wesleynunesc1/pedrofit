import React from 'react';
import {
  UserCheck,
  ShieldCheck,
  ChevronRight,
  Award,
  Dumbbell,
  Apple,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { CONFIG } from '../data/config';
import { RevealOnScroll } from './RevealOnScroll';

export const AboutPedro: React.FC = () => {
  return (
    <section
      id="sobre"
      className="about-section"
      style={{
        position: 'relative',
        backgroundColor: '#031109',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(96, 227, 20, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* =========================================================
          DESKTOP VIEW (Intact, strictly unchanged for >= 769px)
          ========================================================= */}
      <div className="about-desktop-view">
        <div className="container" style={{ paddingTop: '80px', paddingBottom: '90px' }}>
          <div
            className="about-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '50px',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Text & Authority */}
            <div>
              <RevealOnScroll>
                <div className="eyebrow-badge" style={{ marginBottom: '16px' }}>
                  <UserCheck size={14} />
                  <span>Seu Mentor Nessa Jornada</span>
                </div>

                <h2
                  style={{
                    fontSize: 'clamp(28px, 4vw, 44px)',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '20px',
                    letterSpacing: '-0.5px'
                  }}
                >
                  Pedro Lima
                </h2>

                <p
                  style={{
                    fontSize: '16px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '16px'
                  }}
                >
                  Dedicado ao universo da musculação, nutrição e performance há anos, minha missão nasceu de uma inconformidade: ver pessoas dedicadas treinando duro todos os dias, mas presas a fichas de treino genéricas e dietas insustentáveis que nunca trouxeram resultados expressivos.
                </p>

                <p
                  style={{
                    fontSize: '16px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '20px'
                  }}
                >
                  Desenvolvi um acompanhamento verdadeiramente individualizado, que une <strong style={{ color: '#ffffff' }}>periodização de elite</strong>, <strong style={{ color: '#ffffff' }}>estratégia alimentar prática</strong> e <strong style={{ color: 'var(--green-primary)' }}>suporte diário via WhatsApp</strong>, sem margem para erro!
                </p>

                <p
                  style={{
                    fontSize: '16px',
                    color: '#e2e8f0',
                    lineHeight: 1.7,
                    marginBottom: '32px',
                    fontWeight: 500
                  }}
                >
                  Já transformamos dezenas de vidas em diversos estados e países com um método 100% online que é tão ou mais eficaz que o presencial. Se você realmente quer evoluir com quem entende da sua jornada, junte-se ao time.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
                  <a
                    href={CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta about-cta-btn"
                    style={{
                      padding: '13px 30px',
                      fontSize: '14px',
                      alignSelf: 'flex-start'
                    }}
                  >
                    <Award size={16} />
                    <span>FALAR NO WHATSAPP</span>
                    <ChevronRight size={16} strokeWidth={3} />
                  </a>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--text-muted)',
                      fontSize: '13px'
                    }}
                  >
                    <ShieldCheck size={16} color="var(--green-primary)" />
                    <span>Método validado • Acompanhamento 100% humanizado</span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Column: Large Photo + Rotating Circular Badge */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <RevealOnScroll delay={200}>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '440px',
                    borderRadius: '24px',
                    padding: '3px',
                    background: 'linear-gradient(135deg, rgba(96, 227, 20, 0.4), rgba(255, 255, 255, 0.05) 60%, rgba(96, 227, 20, 0.2))',
                    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(96, 227, 20, 0.12)'
                  }}
                >
                  <div
                    style={{
                      borderRadius: '22px',
                      overflow: 'hidden',
                      position: 'relative',
                      backgroundColor: '#07150e'
                    }}
                  >
                    <img
                      src="/images/about/pedro-about.jpeg"
                      alt="Pedro Lima Personal Trainer"
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '540px',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />

                    {/* Gradient bottom overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(6, 15, 12, 0.9) 0%, transparent 40%)',
                        pointerEvents: 'none'
                      }}
                    />
                  </div>

                  {/* Rotating Circular Badge (Tag / Stamp) */}
                  <div
                    className="about-badge-stamp"
                    style={{
                      position: 'absolute',
                      top: '-25px',
                      right: '-20px',
                      width: '110px',
                      height: '110px',
                      borderRadius: '50%',
                      background: '#040d08',
                      border: '2px solid rgba(96, 227, 20, 0.5)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7), 0 0 15px rgba(96, 227, 20, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2
                    }}
                  >
                    {/* Rotating SVG text */}
                    <svg
                      viewBox="0 0 100 100"
                      width="100%"
                      height="100%"
                      className="girar-badge"
                      style={{ position: 'absolute', inset: 0 }}
                    >
                      <path
                        id="circlePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text
                        fontSize="9.5"
                        fontFamily="'Sora', sans-serif"
                        fontWeight="700"
                        fill="#60e314"
                        letterSpacing="2.2"
                      >
                        <textPath xlinkHref="#circlePath">
                          PEDRO FIT • PERFORMANCE • EVOLUÇÃO •
                        </textPath>
                      </text>
                    </svg>

                    {/* Center Monogram */}
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 900,
                        fontSize: '22px',
                        color: '#ffffff',
                        lineHeight: 1,
                        zIndex: 3
                      }}
                    >
                      PL
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          MOBILE VIEW (Strictly following the 9-step hierarchy)
          ========================================================= */}
      <div className="about-mobile-view">
        <div className="about-mobile-container">
          <RevealOnScroll>
            {/* 1. SELO SUPERIOR */}
            <div className="about-mobile-badge">
              <UserCheck size={14} color="#60e314" strokeWidth={2.4} />
              <span>SEU MENTOR NESSA JORNADA</span>
            </div>

            {/* 2. TÍTULO PEDRO LIMA */}
            <h2 className="about-mobile-title">
              Pedro <span className="text-neon">Lima</span>
            </h2>

            {/* 3. FRASE PRINCIPAL */}
            <p className="about-mobile-lead">
              Treino, nutrição e acompanhamento pensados para a sua rotina.
            </p>

            {/* 4. FOTO GRANDE DO PEDRO DE BRAÇOS CRUZADOS */}
            <div className="about-mobile-photo-frame">
              <img
                src="/images/about/pedro-mobile.jpg"
                alt="Pedro Lima Personal Trainer"
                className="about-mobile-photo"
              />
              {/* Fade overlays for seamless blend */}
              <div className="about-mobile-photo-fade-top" />
              <div className="about-mobile-photo-fade-bottom" />
              <div className="about-mobile-photo-fade-sides" />
            </div>

            {/* 5. PRIMEIRO TEXTO EXPLICATIVO */}
            <p className="about-mobile-text">
              Depois de acompanhar de perto pessoas que treinavam duro, mas continuavam presas a métodos genéricos, criei uma consultoria baseada em{' '}
              <strong className="text-highlight-green">
                estratégia, individualização e acompanhamento real.
              </strong>
            </p>

            {/* 6. TRÊS MINI CARDS DE BENEFÍCIOS */}
            <div className="about-mobile-cards-grid">
              <div className="about-mobile-card">
                <div className="about-mobile-card-icon">
                  <Dumbbell size={18} color="#60e314" strokeWidth={2.2} />
                </div>
                <span className="about-mobile-card-title">Periodização personalizada</span>
              </div>

              <div className="about-mobile-card">
                <div className="about-mobile-card-icon">
                  <Apple size={18} color="#60e314" strokeWidth={2.2} />
                </div>
                <span className="about-mobile-card-title">Estratégia alimentar prática</span>
              </div>

              <div className="about-mobile-card">
                <div className="about-mobile-card-icon">
                  <MessageCircle size={18} color="#60e314" strokeWidth={2.2} />
                </div>
                <span className="about-mobile-card-title">Suporte direto via WhatsApp</span>
              </div>
            </div>

            {/* 7. SEGUNDO TEXTO COM PROVA / RESULTADO */}
            <p className="about-mobile-text about-mobile-text-proof">
              Hoje, o Método Pedro Fit já transformou{' '}
              <strong className="text-highlight-green">dezenas de vidas</strong> em diversos estados e países, com um acompanhamento{' '}
              <strong className="text-highlight-green">100% online</strong> que é tão eficaz quanto o presencial.
            </p>

            {/* 8. BOTÃO PRINCIPAL (CTA) */}
            <div className="about-mobile-cta-wrapper">
              <a
                href={CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="about-mobile-cta-btn"
              >
                <Award size={18} strokeWidth={2.5} />
                <span>FALAR NO WHATSAPP</span>
                <ChevronRight size={18} strokeWidth={3} />
              </a>
            </div>

            {/* 9. MICROPROVAS ABAIXO DO BOTÃO */}
            <div className="about-mobile-microproofs">
              <div className="about-mobile-proof-item">
                <CheckCircle2 size={13} color="#60e314" strokeWidth={2.5} />
                <span>Método validado</span>
              </div>
              <div className="about-mobile-proof-item">
                <CheckCircle2 size={13} color="#60e314" strokeWidth={2.5} />
                <span>100% online</span>
              </div>
              <div className="about-mobile-proof-item">
                <CheckCircle2 size={13} color="#60e314" strokeWidth={2.5} />
                <span>Acompanhamento próximo</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <style>{`
        /* ================= DESKTOP STYLES (>= 769px) ================= */
        .about-desktop-view {
          display: block;
        }
        .about-mobile-view {
          display: none;
        }

        /* ================= MOBILE STYLES (<= 768px) ================= */
        @media (max-width: 768px) {
          .about-desktop-view {
            display: none !important;
          }
          .about-mobile-view {
            display: block !important;
            padding-top: 76px;
            padding-bottom: 84px;
          }

          .about-mobile-container {
            width: 100%;
            max-width: 430px;
            margin: 0 auto;
            padding-left: 20px;
            padding-right: 20px;
            box-sizing: border-box;
          }

          /* 1. SELO SUPERIOR */
          .about-mobile-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            height: 38px;
            padding: 0 16px;
            border-radius: 999px;
            background: rgba(96, 227, 20, 0.07);
            border: 1px solid rgba(96, 227, 20, 0.35);
            color: #60e314;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            margin-bottom: 18px;
          }

          /* 2. TÍTULO PEDRO LIMA */
          .about-mobile-title {
            font-family: var(--font-heading);
            font-size: clamp(48px, 13vw, 60px);
            font-weight: 900;
            color: #ffffff;
            line-height: 1.05;
            letter-spacing: -0.8px;
            margin: 0 0 12px 0;
            text-align: left;
          }

          .about-mobile-title .text-neon {
            color: #60e314;
          }

          /* 3. FRASE PRINCIPAL */
          .about-mobile-lead {
            font-family: var(--font-body);
            font-size: clamp(21px, 5.6vw, 25px);
            font-weight: 700;
            color: #f1f5f9;
            line-height: 1.34;
            letter-spacing: -0.3px;
            margin: 0 0 26px 0;
            text-align: left;
          }

          /* 4. FOTO GRANDE DO PEDRO */
          .about-mobile-photo-frame {
            position: relative;
            width: 100%;
            height: 480px;
            margin: 0 0 30px 0;
            border-radius: 20px;
            overflow: hidden;
            background-color: #031109;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
          }

          .about-mobile-photo {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
            display: block;
          }

          .about-mobile-photo-fade-top {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 90px;
            background: linear-gradient(to bottom, #031109 0%, rgba(3, 17, 9, 0.6) 50%, transparent 100%);
            pointer-events: none;
          }

          .about-mobile-photo-fade-bottom {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 130px;
            background: linear-gradient(to top, #031109 0%, rgba(3, 17, 9, 0.85) 50%, transparent 100%);
            pointer-events: none;
          }

          .about-mobile-photo-fade-sides {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, transparent 65%, rgba(3, 17, 9, 0.5) 100%);
            pointer-events: none;
          }

          /* 5. TEXTO EXPLICATIVO & 7. TEXTO DE PROVA */
          .about-mobile-text {
            font-family: var(--font-body);
            font-size: 16px;
            line-height: 1.62;
            color: #94a3b8;
            margin: 0 0 24px 0;
            text-align: left;
          }

          .about-mobile-text-proof {
            margin: 0 0 28px 0;
          }

          .text-highlight-green {
            color: #60e314;
            font-weight: 700;
          }

          /* 6. TRÊS MINI CARDS DE BENEFÍCIOS */
          .about-mobile-cards-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin: 0 0 28px 0;
          }

          .about-mobile-card {
            background: #06140d;
            border: 1px solid rgba(96, 227, 20, 0.18);
            border-radius: 12px;
            padding: 14px 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
          }

          .about-mobile-card-icon {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background: rgba(96, 227, 20, 0.08);
            border: 1px solid rgba(96, 227, 20, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .about-mobile-card-title {
            font-size: 12px;
            font-weight: 600;
            color: #ffffff;
            line-height: 1.3;
            text-align: left;
          }

          /* 8. BOTÃO PRINCIPAL (CTA) */
          .about-mobile-cta-wrapper {
            width: 100%;
            margin-bottom: 18px;
          }

          .about-mobile-cta-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            height: 58px;
            background-color: #60e314;
            color: #000000;
            font-family: var(--font-heading);
            font-size: 14px;
            font-weight: 800;
            letter-spacing: 0.2px;
            text-decoration: none;
            border-radius: 999px;
            box-shadow: 0 4px 22px rgba(96, 227, 20, 0.35);
            transition: transform 0.15s ease, box-shadow 0.15s ease;
            box-sizing: border-box;
            padding: 0 16px;
          }

          .about-mobile-cta-btn:active {
            transform: scale(0.98);
            box-shadow: 0 2px 10px rgba(96, 227, 20, 0.25);
          }

          /* 9. MICROPROVAS ABAIXO DO BOTÃO */
          .about-mobile-microproofs {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 6px;
            width: 100%;
            margin-top: 4px;
          }

          .about-mobile-proof-item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            font-size: 11px;
            color: #94a3b8;
            font-weight: 500;
            text-align: center;
            white-space: nowrap;
          }
        }

        /* Responsive micro adjustments for very small screens (<= 375px) */
        @media (max-width: 375px) {
          .about-mobile-container {
            padding-left: 16px;
            padding-right: 16px;
          }
          .about-mobile-title {
            font-size: 44px;
          }
          .about-mobile-lead {
            font-size: 19px;
          }
          .about-mobile-photo-frame {
            height: 420px;
          }
          .about-mobile-card {
            padding: 10px 7px;
          }
          .about-mobile-card-title {
            font-size: 11px;
          }
          .about-mobile-cta-btn {
            font-size: 13px;
            height: 54px;
            gap: 6px;
          }
          .about-mobile-proof-item {
            font-size: 9.8px;
            gap: 3px;
          }
        }
      `}</style>
    </section>
  );
};

