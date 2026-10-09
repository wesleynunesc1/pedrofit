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
                      src="/images/about/pedro-7a.png"
                      alt="Pedro Lima Personal Trainer e Mentor de Performance - Pedro Fit"
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '540px',
                        objectFit: 'cover',
                        objectPosition: 'center 12%',
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
          MOBILE VIEW (Visually optimized, premium mobile experience)
          ========================================================= */}
      <div className="about-mobile-view">
        <div className="about-mobile-container">
          <RevealOnScroll>
            {/* 1. SELO SUPERIOR */}
            <div className="about-mobile-badge-wrapper">
              <div className="about-mobile-badge">
                <UserCheck size={14} color="#60e314" strokeWidth={2.4} />
                <span>SEU MENTOR NESSA JORNADA</span>
              </div>
            </div>

            {/* 2. TÍTULO PEDRO LIMA */}
            <h2 className="about-mobile-title">
              Pedro <span className="text-neon">Lima</span>
            </h2>

            {/* 3. FRASE PRINCIPAL */}
            <p className="about-mobile-lead">
              Treino inteligente, nutrição estratégica e acompanhamento direto para a sua rotina real.
            </p>

            {/* 4. FOTO DO PEDRO COM ENQUADRAMENTO PERFEITO */}
            <div className="about-mobile-photo-frame">
              <img
                src="/images/about/pedro-7a.png"
                alt="Pedro Lima Personal Trainer - Consultoria Online Pedro Fit"
                loading="lazy"
                decoding="async"
                className="about-mobile-photo"
              />
              {/* Degradê inferior suave */}
              <div className="about-mobile-photo-fade-bottom" />

              {/* Tag de autoridade sobre a foto */}
              <div className="about-mobile-photo-badge">
                <Award size={14} color="#60e314" />
                <span>Treinador & Consultoria Online</span>
              </div>
            </div>

            {/* 5. STATS BAR DE AUTORIDADE */}
            <div className="about-mobile-stats-row">
              <div className="about-mobile-stat-box">
                <span className="about-mobile-stat-num">+100</span>
                <span className="about-mobile-stat-lbl">Alunos Atendidos</span>
              </div>
              <div className="about-mobile-stat-div" />
              <div className="about-mobile-stat-box">
                <span className="about-mobile-stat-num">100%</span>
                <span className="about-mobile-stat-lbl">Personalizado</span>
              </div>
              <div className="about-mobile-stat-div" />
              <div className="about-mobile-stat-box">
                <span className="about-mobile-stat-num">Direto</span>
                <span className="about-mobile-stat-lbl">no WhatsApp</span>
              </div>
            </div>

            {/* 6. PRIMEIRO TEXTO EXPLICATIVO */}
            <p className="about-mobile-text">
              Depois de ver tantas pessoas dedicadas treinando duro mas presas a fichas genéricas e dietas insustentáveis, criei uma consultoria baseada em{' '}
              <strong className="text-highlight-green">
                ciência prática, estratégia individual e acompanhamento humano de verdade.
              </strong>
            </p>

            {/* 7. PILARES DO MÉTODO EM CARDS HORIZONTAIS E ELEGANTES */}
            <div className="about-mobile-pillars-list">
              <div className="about-mobile-pillar-card">
                <div className="about-mobile-pillar-icon">
                  <Dumbbell size={18} color="#60e314" strokeWidth={2.4} />
                </div>
                <div className="about-mobile-pillar-info">
                  <span className="about-mobile-pillar-title">Periodização Personalizada</span>
                  <span className="about-mobile-pillar-desc">Treinos desenhados sob medida para suas metas e tempo disponível.</span>
                </div>
              </div>

              <div className="about-mobile-pillar-card">
                <div className="about-mobile-pillar-icon">
                  <Apple size={18} color="#60e314" strokeWidth={2.4} />
                </div>
                <div className="about-mobile-pillar-info">
                  <span className="about-mobile-pillar-title">Estratégia Alimentar Prática</span>
                  <span className="about-mobile-pillar-desc">Dieta flexível que cabe no seu bolso e no seu dia a dia, sem passar fome.</span>
                </div>
              </div>

              <div className="about-mobile-pillar-card">
                <div className="about-mobile-pillar-icon">
                  <MessageCircle size={18} color="#60e314" strokeWidth={2.4} />
                </div>
                <div className="about-mobile-pillar-info">
                  <span className="about-mobile-pillar-title">Suporte Diário no WhatsApp</span>
                  <span className="about-mobile-pillar-desc">Envie vídeos dos exercícios, tire dúvidas e receba ajustes contínuos.</span>
                </div>
              </div>
            </div>

            {/* 8. PROVA SOCIAL / ALCANCE */}
            <p className="about-mobile-text about-mobile-text-proof">
              Já transformamos dezenas de vidas em diversos estados e países com um método 100% online que é tão ou mais eficaz que o presencial.
            </p>

            {/* 9. BOTÃO PRINCIPAL (CTA) */}
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

            {/* 10. MICROPROVAS ABAIXO DO BOTÃO */}
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
                <span>Acompanhamento direto</span>
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
            padding-top: 60px;
            padding-bottom: 70px;
          }

          .about-mobile-container {
            width: 100%;
            max-width: 480px;
            margin: 0 auto;
            padding-left: 20px;
            padding-right: 20px;
            box-sizing: border-box;
          }

          /* 1. SELO SUPERIOR */
          .about-mobile-badge-wrapper {
            display: flex;
            justify-content: flex-start;
            margin-bottom: 14px;
          }

          .about-mobile-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            height: 34px;
            padding: 0 14px;
            border-radius: 999px;
            background: rgba(96, 227, 20, 0.08);
            border: 1px solid rgba(96, 227, 20, 0.35);
            color: #60e314;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          /* 2. TÍTULO PEDRO LIMA */
          .about-mobile-title {
            font-family: var(--font-heading);
            font-size: clamp(34px, 8.5vw, 42px);
            font-weight: 900;
            color: #ffffff;
            line-height: 1.12;
            letter-spacing: -0.6px;
            margin: 0 0 10px 0;
            text-align: left;
          }

          .about-mobile-title .text-neon {
            color: #60e314;
          }

          /* 3. FRASE PRINCIPAL */
          .about-mobile-lead {
            font-family: var(--font-body);
            font-size: 15.5px;
            font-weight: 500;
            color: #cbd5e1;
            line-height: 1.5;
            margin: 0 0 22px 0;
            text-align: left;
          }

          /* 4. FOTO DO PEDRO */
          .about-mobile-photo-frame {
            position: relative;
            width: 100%;
            height: 360px;
            margin: 0 0 20px 0;
            border-radius: 20px;
            overflow: hidden;
            background-color: #06140d;
            border: 1px solid rgba(96, 227, 20, 0.25);
            box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(96, 227, 20, 0.1);
          }

          .about-mobile-photo {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center 22%;
            display: block;
            filter: contrast(1.06) brightness(1.0);
          }

          .about-mobile-photo-fade-bottom {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 120px;
            background: linear-gradient(to top, rgba(3, 17, 9, 0.95) 0%, rgba(3, 17, 9, 0.4) 45%, transparent 100%);
            pointer-events: none;
            z-index: 1;
          }

          .about-mobile-photo-badge {
            position: absolute;
            bottom: 14px;
            left: 50%;
            transform: translateX(-50%);
            display: inline-flex;
            align-items: center;
            gap: 7px;
            background: rgba(6, 17, 12, 0.85);
            border: 1px solid rgba(96, 227, 20, 0.4);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            padding: 6px 14px;
            border-radius: 999px;
            color: #ffffff;
            font-size: 11.5px;
            font-weight: 700;
            letter-spacing: 0.2px;
            white-space: nowrap;
            z-index: 2;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
          }

          /* 5. STATS BAR */
          .about-mobile-stats-row {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 14px 12px;
            margin-bottom: 22px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 14px;
          }

          .about-mobile-stat-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .about-mobile-stat-num {
            font-family: var(--font-heading);
            font-size: 18px;
            font-weight: 800;
            color: #60e314;
            line-height: 1.2;
          }

          .about-mobile-stat-lbl {
            font-size: 11px;
            color: #94a3b8;
            font-weight: 500;
            margin-top: 2px;
          }

          .about-mobile-stat-div {
            width: 1px;
            height: 28px;
            background: rgba(255, 255, 255, 0.1);
          }

          /* 6. TEXTO EXPLICATIVO */
          .about-mobile-text {
            font-family: var(--font-body);
            font-size: 15px;
            line-height: 1.65;
            color: #94a3b8;
            margin: 0 0 20px 0;
            text-align: left;
          }

          .about-mobile-text-proof {
            margin: 0 0 24px 0;
            color: #cbd5e1;
            font-size: 14.5px;
          }

          .text-highlight-green {
            color: #60e314;
            font-weight: 700;
          }

          /* 7. PILARES HORIZONTAIS */
          .about-mobile-pillars-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 0 0 22px 0;
          }

          .about-mobile-pillar-card {
            background: linear-gradient(135deg, rgba(8, 22, 16, 0.9) 0%, rgba(5, 14, 10, 0.95) 100%);
            border: 1px solid rgba(96, 227, 20, 0.18);
            border-radius: 14px;
            padding: 14px 14px;
            display: flex;
            align-items: flex-start;
            gap: 12px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
          }

          .about-mobile-pillar-icon {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            background: rgba(96, 227, 20, 0.1);
            border: 1px solid rgba(96, 227, 20, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-shadow: 0 0 10px rgba(96, 227, 20, 0.15);
          }

          .about-mobile-pillar-info {
            display: flex;
            flex-direction: column;
            gap: 3px;
          }

          .about-mobile-pillar-title {
            font-size: 14px;
            font-weight: 700;
            color: #ffffff;
            line-height: 1.3;
          }

          .about-mobile-pillar-desc {
            font-size: 12.5px;
            color: #94a3b8;
            line-height: 1.45;
          }

          /* 8. BOTÃO PRINCIPAL (CTA) */
          .about-mobile-cta-wrapper {
            width: 100%;
            margin-bottom: 16px;
          }

          .about-mobile-cta-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            height: 50px;
            white-space: nowrap !important;
            background-color: #60e314;
            color: #000000;
            font-family: var(--font-heading);
            font-size: 13.5px;
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
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            flex-wrap: wrap;
            width: 100%;
            margin-top: 4px;
          }

          .about-mobile-proof-item {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 11.5px;
            color: #94a3b8;
            font-weight: 500;
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
            font-size: 32px;
          }
          .about-mobile-lead {
            font-size: 14.5px;
          }
          .about-mobile-photo-frame {
            height: 330px;
          }
          .about-mobile-cta-btn {
            font-size: 12px !important;
            height: 46px !important;
            white-space: nowrap !important;
          }
          .about-mobile-proof-item {
            font-size: 10.5px;
            gap: 3px;
          }
        }
      `}</style>
    </section>
  );
};

