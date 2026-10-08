import React from 'react';
import { X, Check, ChevronRight, Zap } from 'lucide-react';
import { COMPARISON_DATA } from '../data/comparison';
import { CONFIG } from '../data/config';
import { RevealOnScroll } from './RevealOnScroll';

export const Comparison: React.FC = () => {
  return (
    <section
      id="comparativo"
      style={{
        paddingTop: '80px',
        paddingBottom: '90px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <RevealOnScroll>
            <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
              <Zap size={14} />
              <span>O Diferencial</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.8vw, 42px)',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '14px',
                letterSpacing: '-0.5px'
              }}
            >
              Quer ter grandes resultados? Então esteja com os melhores!
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              O resultado que você procura está a um clique de distância. Veja a diferença entre um serviço genérico e nossa consultoria de elite.
            </p>
          </RevealOnScroll>
        </div>

        {/* Comparison Grid */}
        <div
          className="comparison-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '28px',
            alignItems: 'stretch',
            marginBottom: '40px'
          }}
        >
          {/* Left Column: Negative (Other consultancies) */}
          <RevealOnScroll delay={100}>
            <div
              className="comparison-card"
              style={{
                backgroundColor: '#0a100d',
                border: '1px solid rgba(249, 56, 25, 0.25)',
                borderRadius: '20px',
                padding: '36px 30px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '28px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(249, 56, 25, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--red-accent)'
                  }}
                >
                  <X size={20} strokeWidth={3} />
                </div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 800,
                    color: '#fca5a5'
                  }}
                >
                  {COMPARISON_DATA.negative.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', flex: 1 }}>
                {COMPARISON_DATA.negative.items.map((item, index) => (
                  <div
                    key={`neg-${index}`}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}
                  >
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(249, 56, 25, 0.15)',
                        border: '1px solid rgba(249, 56, 25, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      <X size={12} color="var(--red-accent)" strokeWidth={3} />
                    </div>
                    <span
                      style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: 1.5
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Column: Positive (Pedro Fit) */}
          <RevealOnScroll delay={200}>
            <div
              className="comparison-card"
              style={{
                backgroundColor: '#0c1814',
                border: '1px solid rgba(96, 227, 20, 0.35)',
                borderRadius: '20px',
                padding: '36px 30px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(96, 227, 20, 0.08)'
              }}
            >
              {/* Recommended pill badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '24px',
                  background: 'var(--green-primary)',
                  color: '#040907',
                  padding: '4px 14px',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                MÉTODO COMPROVADO
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '28px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(96, 227, 20, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--green-primary)'
                  }}
                >
                  <Check size={20} strokeWidth={3} />
                </div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 800,
                    color: '#ffffff'
                  }}
                >
                  {COMPARISON_DATA.positive.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', flex: 1 }}>
                {COMPARISON_DATA.positive.items.map((item, index) => (
                  <div
                    key={`pos-${index}`}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}
                  >
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(96, 227, 20, 0.2)',
                        border: '1px solid var(--green-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      <Check size={12} color="var(--green-primary)" strokeWidth={3} />
                    </div>
                    <span
                      style={{
                        fontSize: '14px',
                        color: '#f8fafc',
                        lineHeight: 1.5,
                        fontWeight: 500
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Central CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <RevealOnScroll delay={300}>
            <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '100%' }}>
              <a
                href={CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta comparison-cta-btn"
                style={{
                  padding: '13px 32px',
                  fontSize: '14px'
                }}
              >
                <span>COMEÇAR CONSULTORIA</span>
                <ChevronRight size={16} strokeWidth={3} />
              </a>
              <span
                style={{
                  fontSize: '12.5px',
                  color: 'var(--text-muted)',
                  textAlign: 'center'
                }}
              >
                Acompanhamento 100% individualizado via WhatsApp • Vagas limitadas por mês
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .comparison-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 600px) {
          .comparison-card {
            padding: 24px 18px !important;
            border-radius: 16px !important;
          }
          .comparison-cta-btn {
            width: auto !important;
            max-width: 100% !important;
            padding: 11px 20px !important;
            font-size: 12px !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
};
