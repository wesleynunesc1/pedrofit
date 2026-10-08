import React from 'react';
import {
  Activity,
  Apple,
  Dumbbell,
  MessageSquare,
  Check,
  Award,
  Trophy,
  UserCheck,
  TrendingUp
} from 'lucide-react';
import { PILLARS_DATA, PILLARS_BENEFITS, PillarItem } from '../data/pillars';
import { RevealOnScroll } from './RevealOnScroll';

export const Pillars: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity size={20} strokeWidth={1.8} color="var(--green-primary)" />;
      case 'Apple':
        return <Apple size={20} strokeWidth={1.8} color="var(--green-primary)" />;
      case 'Dumbbell':
        return <Dumbbell size={20} strokeWidth={1.8} color="var(--green-primary)" />;
      case 'MessageSquare':
        return <MessageSquare size={20} strokeWidth={1.8} color="var(--green-primary)" />;
      default:
        return <Dumbbell size={20} strokeWidth={1.8} color="var(--green-primary)" />;
    }
  };

  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award size={16} strokeWidth={2} color="var(--green-primary)" />;
      case 'Trophy':
        return <Trophy size={16} strokeWidth={2} color="var(--green-primary)" />;
      case 'UserCheck':
        return <UserCheck size={16} strokeWidth={2} color="var(--green-primary)" />;
      case 'TrendingUp':
        return <TrendingUp size={16} strokeWidth={2} color="var(--green-primary)" />;
      default:
        return <Award size={16} strokeWidth={2} color="var(--green-primary)" />;
    }
  };

  const renderCard = (pilar: PillarItem) => (
    <div className="pillar-premium-card" key={pilar.id}>
      {/* Background Image with Integrated Fades */}
      <div className="pillar-card-image-wrap">
        <img
          src={pilar.image}
          alt={pilar.title}
          className="pillar-card-img"
          loading="lazy"
        />
        {/* Horizontal Gradient Overlay: Fades from solid card background on left to translucent on right */}
        <div className="pillar-card-gradient-h" />
        {/* Vertical Gradient Overlay */}
        <div className="pillar-card-gradient-v" />
        {/* Subtle Ambient Emerald Glow */}
        <div className="pillar-card-ambient-glow" />
      </div>

      {/* Watermark Number */}
      <span className="pillar-card-number" aria-hidden="true">
        {pilar.number}
      </span>

      {/* Foreground Content */}
      <div className="pillar-card-content">
        <div>
          {/* Icon Box */}
          <div className="pillar-icon-box">
            {getPillarIcon(pilar.icon)}
          </div>

          {/* Heading */}
          <h3 className="pillar-card-title">{pilar.title}</h3>

          {/* Short Subtitle */}
          <p className="pillar-card-subtitle">{pilar.subtitle}</p>
        </div>

        {/* Bullets */}
        <div className="pillar-card-bullets">
          {pilar.bullets.map((bullet, idx) => (
            <div key={idx} className="pillar-bullet-item">
              <span className="pillar-check-badge">
                <Check size={12} strokeWidth={3} color="var(--green-primary)" />
              </span>
              <span className="pillar-bullet-text">{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="pilares" className="pillars-section-root">
      <div className="container pillars-container">
        {/* 1. Header: Subtle Connector, Badge, Headline & Subtitle */}
        <div className="pillars-header">
          <RevealOnScroll>
            {/* Linha vertical verde muito sutil integrando com o carrossel */}
            <div className="pillars-connector-line" aria-hidden="true" />

            {/* Selo minimalista */}
            <div className="eyebrow-badge pillars-eyebrow">
              <Dumbbell size={13} strokeWidth={2} />
              <span>Pilares da Consultoria</span>
            </div>

            {/* Título Principal com destaque exclusivo na palavra "transformação" */}
            <h2 className="pillars-main-title">
              Os 4 pilares da sua{' '}
              <span className="pillars-highlight-text">transformação</span>
            </h2>

            {/* Subtítulo elegante com leitura confortável */}
            <p className="pillars-main-subtitle">
              Uma metodologia integrada que une treino, nutrição, acompanhamento e
              estratégia para acelerar seus resultados de forma consistente e sustentável.
            </p>
          </RevealOnScroll>
        </div>

        {/* 2. Grid 2x2 com os 4 Pilares */}
        <div className="pillars-grid-wrapper">
          <div className="pillars-grid">
            {PILLARS_DATA.map((pilar, idx) => (
              <RevealOnScroll key={pilar.id} delay={idx * 80}>
                {renderCard(pilar)}
              </RevealOnScroll>
            ))}
          </div>

          {/* Detalhe Central com a Logo Oficial Pedro Lima */}
          <div className="pillars-center-badge" aria-hidden="true">
            <div className="pillars-center-badge-inner">
              <img
                src="/images/logo/logo-pedro.png"
                alt="Pedro Fit"
                className="pillars-center-logo"
              />
            </div>
          </div>
        </div>

        {/* 3. Barra Final de Benefícios (Seção 14) */}
        <RevealOnScroll delay={250}>
          <div className="pillars-benefits-bar">
            {/* Desktop View */}
            <div className="pillars-benefits-desktop">
              {PILLARS_BENEFITS.map((benefit, idx) => (
                <React.Fragment key={benefit.id}>
                  <div className="pillar-benefit-item">
                    {getBenefitIcon(benefit.icon)}
                    <span className="pillar-benefit-label">{benefit.title}</span>
                  </div>
                  {idx < PILLARS_BENEFITS.length - 1 && (
                    <span className="pillar-benefit-separator" aria-hidden="true">
                      |
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile View: 2x2 Grid */}
            <div className="pillars-benefits-mobile">
              {PILLARS_BENEFITS.map(benefit => (
                <div key={benefit.id} className="pillar-benefit-mobile-card">
                  {getBenefitIcon(benefit.icon)}
                  <span className="pillar-benefit-label">{benefit.title}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <style>{`
        /* SEÇÃO RAIZ */
        .pillars-section-root {
          padding-top: 110px;
          padding-bottom: 110px;
          position: relative;
          background-color: #05110B;
          overflow: hidden;
        }

        .pillars-container {
          max-width: 1240px;
        }

        /* 1. CABEÇALHO */
        .pillars-header {
          text-align: center;
          margin-bottom: 54px;
        }

        .pillars-connector-line {
          width: 1px;
          height: 38px;
          background: linear-gradient(to bottom, rgba(96, 227, 20, 0.45), rgba(96, 227, 20, 0.02));
          margin: 0 auto 20px auto;
        }

        .pillars-eyebrow {
          margin-bottom: 18px;
          border-color: rgba(96, 227, 20, 0.22);
          background: rgba(96, 227, 20, 0.05);
          font-size: 12px;
          letter-spacing: 1.2px;
        }

        .pillars-main-title {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          letter-spacing: -0.6px;
          color: #ffffff;
          margin: 0 auto 16px auto;
          line-height: 1.2;
          max-width: 720px;
        }

        .pillars-highlight-text {
          color: var(--green-primary);
          text-shadow: 0 0 20px rgba(96, 227, 20, 0.35);
        }

        .pillars-main-subtitle {
          font-size: 15.5px;
          line-height: 1.68;
          color: var(--text-secondary);
          max-width: 620px;
          margin: 0 auto;
        }

        /* 2. GRID DESKTOP (2x2) */
        .pillars-grid-wrapper {
          position: relative;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          align-items: stretch;
        }

        /* CARD INDIVIDUAL */
        .pillar-premium-card {
          background-color: #09140F;
          border: 1px solid rgba(96, 227, 20, 0.14);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          min-height: 290px;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
          transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1),
                      border-color 0.3s cubic-bezier(0.22, 0.61, 0.36, 1),
                      box-shadow 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
        }

        .pillar-premium-card:hover {
          transform: translateY(-4px);
          border-color: rgba(96, 227, 20, 0.32);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.6), 0 0 24px rgba(96, 227, 20, 0.08);
        }

        /* IMAGEM INTEGRADA COM FADE */
        .pillar-card-image-wrap {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 44%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .pillar-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.4s ease;
          filter: contrast(1.05) brightness(0.9);
        }

        .pillar-premium-card:hover .pillar-card-img {
          transform: scale(1.03);
        }

        .pillar-card-gradient-h {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            #09140F 0%,
            #09140F 12%,
            rgba(9, 20, 15, 0.88) 42%,
            rgba(9, 20, 15, 0.28) 85%,
            transparent 100%
          );
        }

        .pillar-card-gradient-v {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            #09140F 0%,
            transparent 35%
          );
        }

        .pillar-card-ambient-glow {
          position: absolute;
          top: 10%;
          right: 15%;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(96, 227, 20, 0.12) 0%, transparent 70%);
          filter: blur(40px);
        }

        /* MARCA D'ÁGUA NUMÉRICA */
        .pillar-card-number {
          position: absolute;
          top: 24px;
          right: 28px;
          z-index: 3;
          font-family: var(--font-heading);
          font-size: 38px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.09);
          letter-spacing: 1px;
          user-select: none;
          line-height: 1;
        }

        /* CONTEÚDO TEXTUAL */
        .pillar-card-content {
          position: relative;
          z-index: 2;
          padding: 32px 30px;
          max-width: 62%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .pillar-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(96, 227, 20, 0.08);
          border: 1px solid rgba(96, 227, 20, 0.24);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .pillar-premium-card:hover .pillar-icon-box {
          border-color: rgba(96, 227, 20, 0.45);
          box-shadow: 0 0 14px rgba(96, 227, 20, 0.25);
        }

        .pillar-card-title {
          font-size: 21px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
          margin-bottom: 6px;
        }

        .pillar-card-subtitle {
          font-size: 13.5px;
          font-weight: 600;
          color: var(--green-primary);
          letter-spacing: 0.2px;
          margin-bottom: 22px;
        }

        /* BULLETS */
        .pillar-card-bullets {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .pillar-bullet-item {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .pillar-check-badge {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(96, 227, 20, 0.12);
          border: 1px solid rgba(96, 227, 20, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pillar-bullet-text {
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.4;
        }

        /* DETALHE CENTRAL: LOGO OFICIAL (DESKTOP) */
        .pillars-center-badge {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 5;
          pointer-events: none;
        }

        .pillars-center-badge-inner {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          border: none;
          background: transparent;
          box-shadow: none;
        }

        .pillars-center-logo {
          height: 28px;
          width: auto;
          max-width: 140px;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.95));
        }

        /* 3. BARRA FINAL DE BENEFÍCIOS (SEÇÃO 14) */
        .pillars-benefits-bar {
          margin-top: 48px;
        }

        .pillars-benefits-desktop {
          background-color: #06100B;
          border: 1px solid rgba(96, 227, 20, 0.16);
          border-radius: 14px;
          padding: 16px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }

        .pillar-benefit-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .pillar-benefit-label {
          font-family: var(--font-heading);
          font-size: 12.5px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.88);
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .pillar-benefit-separator {
          color: rgba(255, 255, 255, 0.14);
          font-weight: 300;
          font-size: 13px;
          user-select: none;
        }

        .pillars-benefits-mobile {
          display: none;
        }

        /* RESPONSIVIDADE */
        @media (max-width: 1024px) {
          .pillars-grid {
            gap: 20px;
          }
          .pillar-card-content {
            padding: 26px 22px;
            max-width: 65%;
          }
          .pillar-card-title {
            font-size: 19px;
          }
        }

        @media (max-width: 860px) {
          .pillars-section-root {
            padding-top: 76px;
            padding-bottom: 80px;
          }

          .pillars-header {
            margin-bottom: 38px;
          }

          .pillars-main-title {
            font-size: clamp(26px, 6vw, 34px);
          }

          .pillars-main-subtitle {
            font-size: 14.5px;
          }

          /* Empilhar no Mobile: 01, 02, 03, 04 */
          .pillars-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          /* Remove o detalhe central no mobile (Requisito 15) */
          .pillars-center-badge {
            display: none !important;
          }

          .pillar-premium-card {
            min-height: 250px;
          }

          .pillar-card-content {
            padding: 24px 20px;
            max-width: 68%;
          }

          .pillar-card-image-wrap {
            width: 38%;
          }

          .pillar-card-title {
            font-size: 19px;
          }

          .pillar-card-subtitle {
            font-size: 13px;
            margin-bottom: 16px;
          }

          .pillar-card-number {
            font-size: 32px;
            top: 20px;
            right: 20px;
          }

          /* Barra de benefícios: Grid 2x2 no mobile (Requisito 14) */
          .pillars-benefits-desktop {
            display: none !important;
          }

          .pillars-benefits-mobile {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .pillar-benefit-mobile-card {
            background-color: #08140E;
            border: 1px solid rgba(96, 227, 20, 0.14);
            border-radius: 12px;
            padding: 14px 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            text-align: center;
          }

          .pillar-benefit-mobile-card .pillar-benefit-label {
            font-size: 11px;
            letter-spacing: 0.5px;
          }
        }

        @media (max-width: 480px) {
          .pillar-card-content {
            padding: 22px 16px;
            max-width: 70%;
          }

          .pillar-card-title {
            font-size: 18px;
          }

          .pillar-card-subtitle {
            font-size: 12.5px;
          }

          .pillar-bullet-text {
            font-size: 13px;
          }

          .pillar-card-number {
            font-size: 28px;
            top: 18px;
            right: 16px;
          }

          .pillar-benefit-mobile-card {
            padding: 12px 8px;
            gap: 6px;
          }

          .pillar-benefit-mobile-card .pillar-benefit-label {
            font-size: 10.5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pillar-premium-card,
          .pillar-card-img,
          .pillar-icon-box {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};
