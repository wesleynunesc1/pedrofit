import React from 'react';
import {
  ScanLine,
  Dumbbell,
  Utensils,
  MessageCircle,
  TrendingUp,
  CheckCircle,
  Package,
  CheckCircle2,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { DELIVERABLES_DATA } from '../data/deliverables';
import { CONFIG } from '../data/config';
import { RevealOnScroll } from './RevealOnScroll';

const DELIVERABLE_TAGS: Record<number, string[]> = {
  1: ['Bioimpedância & Medidas', 'Diagnóstico de Rotina', 'Alinhamento 360°'],
  2: ['Periodização Científica', 'Vídeos de Execução', 'Séries & Cargas'],
  3: ['Alimentos Acessíveis', 'Tabela de Substituições', 'Sem Fórmulas Malucas'],
  4: ['Suporte Diário', 'Análise Técnica de Vídeos', 'Direto com o Pedro'],
  5: ['Check-ins Regulares', 'Quebra de Platôs', 'Ajustes Estratégicos']
};

export const Deliverables: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ScanLine':
        return <ScanLine size={24} color="var(--green-primary)" />;
      case 'Dumbbell':
        return <Dumbbell size={24} color="var(--green-primary)" />;
      case 'Utensils':
        return <Utensils size={24} color="var(--green-primary)" />;
      case 'MessageCircle':
        return <MessageCircle size={24} color="var(--green-primary)" />;
      case 'TrendingUp':
        return <TrendingUp size={24} color="var(--green-primary)" />;
      default:
        return <CheckCircle size={24} color="var(--green-primary)" />;
    }
  };

  return (
    <section
      id="entregaveis"
      className="deliverables-section"
      style={{
        paddingTop: '90px',
        paddingBottom: '100px',
        position: 'relative',
        backgroundColor: '#040d08',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(96, 227, 20, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <RevealOnScroll>
            <div className="eyebrow-badge" style={{ marginBottom: '16px' }}>
              <Package size={14} color="var(--green-primary)" />
              <span>O QUE ESTÁ INCLUSO</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(26px, 4vw, 44px)',
                fontWeight: 800,
                color: '#ffffff',
                maxWidth: '780px',
                margin: '0 auto 16px auto',
                letterSpacing: '-0.6px',
                lineHeight: 1.18
              }}
            >
              Tudo o que está incluso na{' '}
              <span style={{ color: 'var(--green-primary)' }}>Consultoria Pedro Fit</span>
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                maxWidth: '640px',
                margin: '0 auto',
                lineHeight: 1.6
              }}
            >
              Uma metodologia 360° com planejamento personalizado, nutrição estratégica e acompanhamento diário no WhatsApp para você atingir seu físico definitivo.
            </p>
          </RevealOnScroll>
        </div>

        {/* Deliverables Grid (3 no topo + 2 na linha inferior no desktop) */}
        <div className="deliverables-grid">
          {DELIVERABLES_DATA.map((item, index) => {
            const tags = DELIVERABLE_TAGS[item.id] || [];
            const isWideCard = index >= 3;

            return (
              <RevealOnScroll
                key={item.id}
                delay={index * 80}
                className={`deliverable-grid-item ${isWideCard ? 'item-wide' : 'item-standard'}`}
              >
                <div className="deliverable-card">
                  {/* Top Bar: Icon + Number Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '20px'
                    }}
                  >
                    <div className="deliverable-icon-box">
                      {getIcon(item.icon)}
                    </div>
                    <span className="deliverable-number">
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="deliverable-title">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="deliverable-desc">
                    {item.description}
                  </p>

                  {/* Feature Tags / Pills */}
                  {tags.length > 0 && (
                    <div className="deliverable-tags">
                      {tags.map((tag, tIdx) => (
                        <span key={tIdx} className="deliverable-tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bottom Inclusion Check */}
                  <div className="deliverable-footer">
                    <CheckCircle2 size={15} color="var(--green-primary)" />
                    <span>Incluso no Plano Completo</span>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <RevealOnScroll delay={400}>
          <div className="deliverables-cta-banner">
            <div className="deliverables-cta-text">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Sparkles size={16} color="var(--green-primary)" />
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--green-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  ACOMPANHAMENTO COMPLETO
                </span>
              </div>
              <h4 style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                Pronto para ter todos esses entregáveis na palma da sua mão?
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '6px 0 0 0' }}>
                Comece hoje com periodização individual e tire suas dúvidas direto comigo no WhatsApp.
              </p>
            </div>

            <a
              href={CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta deliverables-cta-btn"
            >
              <MessageCircle size={18} color="#040d07" />
              <span>GARANTIR MINHA VAGA</span>
              <ChevronRight size={18} strokeWidth={3} />
            </a>
          </div>
        </RevealOnScroll>
      </div>

      <style>{`
        /* Grid base 6 colunas para desktop: 3 em cima (span 2) e 2 embaixo (span 3) */
        .deliverables-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 22px;
          margin-bottom: 48px;
        }

        .deliverable-grid-item {
          height: 100%;
          display: flex;
        }

        .item-standard {
          grid-column: span 2;
        }

        .item-wide {
          grid-column: span 3;
        }

        .deliverable-card {
          width: 100%;
          padding: 30px 26px;
          background: linear-gradient(145deg, #0a1912 0%, #06120d 100%);
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-top: 2px solid rgba(96, 227, 20, 0.45);
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          box-sizing: border-box;
        }

        .deliverable-card:hover {
          transform: translateY(-4px);
          border-color: rgba(96, 227, 20, 0.4);
          border-top-color: var(--green-primary);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(96, 227, 20, 0.12);
        }

        .deliverable-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(96, 227, 20, 0.12);
          border: 1px solid rgba(96, 227, 20, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 16px rgba(96, 227, 20, 0.15);
        }

        .deliverable-number {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.12);
          letter-spacing: -1px;
        }

        .deliverable-title {
          font-size: 19px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.35;
          margin: 0 0 12px 0;
        }

        .deliverable-desc {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.65;
          margin: 0 0 20px 0;
          flex: 1;
        }

        .deliverable-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }

        .deliverable-tag-pill {
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(96, 227, 20, 0.08);
          border: 1px solid rgba(96, 227, 20, 0.2);
          color: #86efac;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.1px;
        }

        .deliverable-footer {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          color: var(--green-primary);
          font-size: 12.5px;
          font-weight: 700;
        }

        /* Banner CTA */
        .deliverables-cta-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 30px 36px;
          background: linear-gradient(135deg, rgba(14, 30, 22, 0.9) 0%, rgba(6, 17, 12, 0.95) 100%);
          border: 1px solid rgba(96, 227, 20, 0.3);
          border-radius: 20px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.4), 0 0 24px rgba(96, 227, 20, 0.1);
        }

        .deliverables-cta-text {
          flex: 1;
        }

        .deliverables-cta-btn {
          padding: 14px 28px;
          font-size: 14px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* Responsividade para Tablet */
        @media (max-width: 992px) {
          .deliverables-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }

          .deliverable-card-standard,
          .deliverable-card-wide {
            grid-column: span 1 !important;
          }

          .deliverable-card-wide:last-child {
            grid-column: span 2 !important;
          }

          .deliverables-cta-banner {
            flex-direction: column !important;
            align-items: stretch !important;
            text-align: center !important;
            padding: 26px 20px !important;
          }

          .deliverables-cta-text {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .deliverables-cta-btn {
            align-self: center !important;
            width: 100% !important;
            max-width: 340px !important;
            justify-content: center !important;
          }
        }

        /* Responsividade para Mobile */
        @media (max-width: 640px) {
          .deliverables-section {
            padding-top: 60px !important;
            padding-bottom: 70px !important;
          }

          .deliverables-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
            margin-bottom: 32px !important;
          }

          .deliverable-card-standard,
          .deliverable-card-wide,
          .deliverable-card-wide:last-child {
            grid-column: span 1 !important;
          }

          .deliverable-card {
            padding: 22px 18px !important;
            border-radius: 16px !important;
          }

          .deliverable-title {
            font-size: 17px !important;
            margin-bottom: 10px !important;
          }

          .deliverable-desc {
            font-size: 13.5px !important;
            line-height: 1.6 !important;
            margin-bottom: 16px !important;
          }

          .deliverable-tag-pill {
            font-size: 11px !important;
            padding: 3px 8px !important;
          }

          .deliverable-number {
            font-size: 24px !important;
          }

          .deliverables-cta-banner {
            padding: 22px 16px !important;
            border-radius: 16px !important;
          }

          .deliverables-cta-btn {
            font-size: 13px !important;
            padding: 12px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};
