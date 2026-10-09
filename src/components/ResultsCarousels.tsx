import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Trophy, ChevronRight, Award } from 'lucide-react';
import { RESULTS_DATA, TESTIMONIALS_DATA } from '../data/results';
import { CONFIG } from '../data/config';
import { RevealOnScroll } from './RevealOnScroll';

export const ResultsCarousels: React.FC = () => {
  return (
    <section
      id="resultados"
      style={{
        paddingTop: '70px',
        paddingBottom: '90px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(96, 227, 20, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, marginBottom: '36px' }}>
        <div style={{ textAlign: 'center' }}>
          <RevealOnScroll>
            <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
              <Trophy size={14} />
              <span>Resultados Comprovados</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(26px, 4vw, 44px)',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '12px',
                letterSpacing: '-0.5px'
              }}
            >
              Contra resultados não há argumentos!
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                maxWidth: '620px',
                margin: '0 auto'
              }}
            >
              Alunos reais que transformaram o corpo, o metabolismo e a disciplina com a Consultoria Pedro Fit.
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* CAROUSEL 1: Antes e Depois (LTR - Going Left) */}
      <div style={{ width: '100%', marginBottom: '16px', position: 'relative' }}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={8}
          slidesPerView={2}
          loop={true}
          speed={3500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
          }}
          breakpoints={{
            480: {
              slidesPerView: 2.2,
              spaceBetween: 8
            },
            768: {
              slidesPerView: 3.2,
              spaceBetween: 8
            },
            1024: {
              slidesPerView: 5.2,
              spaceBetween: 8
            }
          }}
          className="swiper-continuous"
        >
          {RESULTS_DATA.concat(RESULTS_DATA).map((item, idx) => (
            <SwiperSlide key={`c1-${item.id}-${idx}`}>
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#0c1814',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  cursor: 'pointer'
                }}
                className="carousel-card"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '4/5',
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

      {/* CAROUSEL 2: Depoimentos WhatsApp (RTL - Going Right, Opposite Direction) */}
      <div style={{ width: '100%', marginBottom: '40px', position: 'relative' }} dir="rtl">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={8}
          slidesPerView={1.8}
          loop={true}
          speed={3500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
          }}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 8
            },
            768: {
              slidesPerView: 3.2,
              spaceBetween: 8
            },
            1024: {
              slidesPerView: 5.2,
              spaceBetween: 8
            }
          }}
          className="swiper-continuous"
        >
          {TESTIMONIALS_DATA.concat(TESTIMONIALS_DATA).map((item, idx) => (
            <SwiperSlide key={`c2-${item.id}-${idx}`}>
              <div
                dir="ltr"
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#0c1814',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  cursor: 'pointer'
                }}
                className="carousel-card"
              >
                <img
                  src={item.image}
                  alt={`Depoimento ${item.name}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '3.5/4.8',
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

      {/* CTA Button below carousels */}
      <div className="container" style={{ textAlign: 'center' }}>
        <RevealOnScroll delay={200}>
          <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '100%' }}>
            <a
              href={CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta results-cta-btn"
              style={{
                padding: '13px 30px',
                fontSize: '14px'
              }}
            >
              <Award size={16} />
              <span>FALAR NO WHATSAPP</span>
              <ChevronRight size={16} strokeWidth={3} />
            </a>
            <span
              style={{
                fontSize: '12.5px',
                color: 'var(--text-muted)',
                letterSpacing: '0.2px',
                textAlign: 'center'
              }}
            >
              Tire suas dúvidas e garanta sua vaga diretamente com o Pedro no WhatsApp
            </span>
          </div>
        </RevealOnScroll>
      </div>

      <style>{`
        .carousel-card:hover {
          transform: translateY(-4px);
          border-color: rgba(96, 227, 20, 0.4) !important;
        }
        @media (max-width: 600px) {
          .results-cta-btn {
            width: auto !important;
            max-width: 100% !important;
            padding: 10px 18px !important;
            font-size: 11.5px !important;
            white-space: nowrap !important;
            gap: 7px !important;
          }
        }
      `}</style>
    </section>
  );
};
