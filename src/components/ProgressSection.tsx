import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Target, CheckCircle2, ChevronRight, Flame } from 'lucide-react';
import { PROGRESS_POINTS } from '../data/deliverables';
import { STUDENTS_DATA } from '../data/results';
import { CONFIG } from '../data/config';
import { RevealOnScroll } from './RevealOnScroll';

export const ProgressSection: React.FC = () => {
  return (
    <section
      id="progresso"
      style={{
        paddingTop: '80px',
        paddingBottom: '90px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <RevealOnScroll>
            <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
              <Target size={14} />
              <span>Evolução Constante</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.8vw, 42px)',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '16px',
                letterSpacing: '-0.5px'
              }}
            >
              Seu Progresso é Nossa Prioridade
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                maxWidth: '680px',
                margin: '0 auto',
                lineHeight: 1.6
              }}
            >
              Conosco, você terá um plano completo e sob medida, com treino, periodização e dieta meticulosamente ajustados aos seus objetivos e limitações. A cada 45 dias, realizaremos um retorno completo com reavaliação de métricas:
            </p>
          </RevealOnScroll>
        </div>

        {/* 3 Progress Cards */}
        <div
          className="progress-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '50px'
          }}
        >
          {PROGRESS_POINTS.map((pt, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <div
                className="card-fitness"
                style={{
                  padding: '24px 22px',
                  backgroundColor: '#0c1814',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  height: '100%'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <CheckCircle2 size={20} color="var(--green-primary)" />
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff' }}>
                    {pt.title}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {pt.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* 3rd Swiper Carousel: Students showcase */}
      <div style={{ width: '100%', marginBottom: '46px', position: 'relative' }}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={12}
          slidesPerView={1.5}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false
          }}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 12
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 12
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 14
            }
          }}
          className="swiper-continuous"
        >
          {STUDENTS_DATA.concat(STUDENTS_DATA).map((item, idx) => (
            <SwiperSlide key={`st-${item.id}-${idx}`}>
              <div
                style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background: '#0c1814',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }}
                className="carousel-card"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '16/10',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA Button */}
      <div className="container" style={{ textAlign: 'center' }}>
        <RevealOnScroll delay={200}>
          <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '100%' }}>
            <a
              href={CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta progress-cta-btn"
              style={{
                padding: '13px 32px',
                fontSize: '14px'
              }}
            >
              <Flame size={16} />
              <span>QUERO FAZER MINHA APLICAÇÃO</span>
              <ChevronRight size={16} strokeWidth={3} />
            </a>
            <span style={{ fontSize: '12.5px', color: 'var(--text-muted)', textAlign: 'center' }}>
              Garanta seu planejamento sob medida para o próximo retorno
            </span>
          </div>
        </RevealOnScroll>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .progress-cta-btn {
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
