import React from 'react';
import { ScanLine, Dumbbell, Utensils, MessageCircle, TrendingUp, CheckCircle, Package } from 'lucide-react';
import { DELIVERABLES_DATA } from '../data/deliverables';
import { RevealOnScroll } from './RevealOnScroll';

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
      style={{
        paddingTop: '80px',
        paddingBottom: '90px',
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(6, 15, 12, 0.4) 0%, rgba(4, 9, 7, 0.8) 100%)'
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '54px' }}>
          <RevealOnScroll>
            <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
              <Package size={14} />
              <span>O Que Está Incluso</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.8vw, 42px)',
                fontWeight: 800,
                color: '#ffffff',
                maxWidth: '750px',
                margin: '0 auto 16px auto',
                letterSpacing: '-0.5px'
              }}
            >
              Tudo o que está incluso na Consultoria Pedro Fit
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                maxWidth: '620px',
                margin: '0 auto'
              }}
            >
              Uma estrutura completa de treino, planejamento alimentar e acompanhamento diário no WhatsApp para acelerar sua evolução.
            </p>
          </RevealOnScroll>
        </div>

        {/* Deliverables Grid */}
        <div
          className="deliverables-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px'
          }}
        >
          {DELIVERABLES_DATA.map((item, index) => (
            <RevealOnScroll key={item.id} delay={index * 80}>
              <div
                className="card-fitness deliverable-card"
                style={{
                  padding: '28px 24px',
                  backgroundColor: '#0c1814',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '18px'
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(96, 227, 20, 0.12)',
                      border: '1px solid rgba(96, 227, 20, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getIcon(item.icon)}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '26px',
                      fontWeight: 800,
                      color: 'rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    {item.number}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '10px'
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    flex: 1
                  }}
                >
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .deliverable-card {
            padding: 22px 16px !important;
            border-radius: 14px !important;
          }
        }
      `}</style>
    </section>
  );
};
