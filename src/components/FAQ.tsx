import React, { useState } from 'react';
import { Plus, Minus, MessageSquare, ChevronRight, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/faq';
import { CONFIG } from '../data/config';
import { RevealOnScroll } from './RevealOnScroll';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section
      id="duvidas"
      style={{
        paddingTop: '80px',
        paddingBottom: '90px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          className="faq-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '380px 1fr',
            gap: '48px',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Heading & "Ainda com Dúvida?" Box */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <RevealOnScroll>
              <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
                <HelpCircle size={14} />
                <span>Perguntas Mais Frequentes</span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '16px',
                  letterSpacing: '-1px'
                }}
              >
                FAQ
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '32px'
                }}
              >
                Tire suas dúvidas e entenda por que o método Pedro Fit é o acompanhamento ideal para transformar seu corpo.
              </p>

              {/* Box "Ainda com Dúvida?" */}
              <div
                style={{
                  backgroundColor: '#0c1814',
                  border: '1px solid rgba(96, 227, 20, 0.3)',
                  borderRadius: '18px',
                  padding: '28px 24px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(96, 227, 20, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <MessageSquare size={20} color="var(--green-primary)" />
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff' }}>
                    Ainda com Dúvida?
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    marginBottom: '20px'
                  }}
                >
                  Fale diretamente conosco no WhatsApp. Nossa equipe responde rapidamente com todas as orientações.
                </p>

                <a
                  href={CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta"
                  style={{
                    width: '100%',
                    padding: '13px 20px',
                    fontSize: '13px'
                  }}
                >
                  <span>ATENDIMENTO POR WHATSAPP</span>
                  <ChevronRight size={16} strokeWidth={3} />
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Accordion */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {FAQ_DATA.map((item, index) => {
                const isOpen = openIndex === index;
                const panelId = `faq-panel-${item.id}`;
                const headerId = `faq-header-${item.id}`;

                return (
                  <RevealOnScroll key={item.id} delay={index * 50}>
                    <div
                      style={{
                        backgroundColor: isOpen ? '#0d1f19' : '#0a1410',
                        border: isOpen
                          ? '1px solid rgba(96, 227, 20, 0.4)'
                          : '1px solid rgba(255, 255, 255, 0.07)',
                        borderRadius: '14px',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <button
                        id={headerId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleAccordion(index)}
                        className="faq-q-btn"
                        style={{
                          width: '100%',
                          padding: '20px 24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '16px',
                          textAlign: 'left',
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '16px',
                          fontFamily: 'var(--font-heading)'
                        }}
                      >
                        <span style={{ color: isOpen ? 'var(--green-primary)' : '#ffffff' }}>
                          {item.question}
                        </span>

                        <div
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '8px',
                            background: isOpen ? 'rgba(96, 227, 20, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            color: isOpen ? 'var(--green-primary)' : 'var(--text-secondary)',
                            transition: 'all 0.25s ease'
                          }}
                        >
                          {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                        </div>
                      </button>

                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={headerId}
                        style={{
                          display: 'grid',
                          gridTemplateRows: isOpen ? '1fr' : '0fr',
                          transition: 'grid-template-rows 0.35s cubic-bezier(0.22, 0.61, 0.36, 1)'
                        }}
                      >
                        <div style={{ overflow: 'hidden' }}>
                          <p
                            className="faq-a-text"
                            style={{
                              padding: '0 24px 22px 24px',
                              fontSize: '14px',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.7,
                              borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                              paddingTop: '16px'
                            }}
                          >
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-layout {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .faq-layout > div:first-child {
            position: static !important;
          }
        }
        @media (max-width: 600px) {
          .faq-q-btn {
            padding: 16px 16px !important;
            font-size: 14.5px !important;
            gap: 12px !important;
          }
          .faq-a-text {
            padding: 0 16px 18px 16px !important;
            font-size: 13.5px !important;
          }
        }
      `}</style>
    </section>
  );
};
