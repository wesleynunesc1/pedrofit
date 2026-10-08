import React from 'react';
import { Dumbbell, BarChart3, Zap, Trophy } from 'lucide-react';

type TickerItem =
  | {
      id: string;
      type: 'text';
      text: string;
      icon: React.ReactNode;
    }
  | {
      id: string;
      type: 'logo';
    };

export const Marquee: React.FC = () => {
  const items: TickerItem[] = [
    {
      id: 'treino',
      type: 'text',
      text: 'TREINO PERSONALIZADO',
      icon: <Dumbbell size={15} strokeWidth={1.75} />
    },
    {
      id: 'logo-1',
      type: 'logo'
    },
    {
      id: 'acompanhamento',
      type: 'text',
      text: 'ACOMPANHAMENTO DIÁRIO',
      icon: <BarChart3 size={15} strokeWidth={1.75} />
    },
    {
      id: 'alta-performance',
      type: 'text',
      text: 'ALTA PERFORMANCE',
      icon: <Zap size={15} strokeWidth={1.75} />
    },
    {
      id: 'logo-2',
      type: 'logo'
    },
    {
      id: 'resultados',
      type: 'text',
      text: 'RESULTADOS REAIS',
      icon: <Trophy size={15} strokeWidth={1.75} />
    }
  ];

  // Repeat items 3 times per track so there's plenty of width and zero empty space on any resolution
  const trackItems = [...items, ...items, ...items];

  const renderItem = (item: TickerItem, key: string) => {
    return (
      <div key={key} className="ticker-item-wrapper">
        {item.type === 'logo' ? (
          <div className="ticker-logo-wrapper">
            <img
              src="/images/logo/logo-pedro.png"
              alt="Pedro Fit"
              className="ticker-logo-img"
            />
          </div>
        ) : (
          <span className="ticker-item">
            <span className="ticker-item-icon">{item.icon}</span>
            <span className="ticker-item-text">{item.text}</span>
          </span>
        )}
        <span className="ticker-separator" aria-hidden="true">|</span>
      </div>
    );
  };

  return (
    <div className="ticker-section-root">
      <div className="ticker-container" role="region" aria-label="Diferenciais Pedro Fit">
        <div className="ticker-track">
          {trackItems.map((item, idx) => renderItem(item, `t1-${item.id}-${idx}`))}
        </div>
        <div className="ticker-track" aria-hidden="true">
          {trackItems.map((item, idx) => renderItem(item, `t2-${item.id}-${idx}`))}
        </div>
      </div>

      <style>{`
        .ticker-section-root {
          width: 100%;
          position: relative;
          z-index: 10;
        }

        .ticker-container {
          width: 100%;
          height: 66px;
          background-color: #06100B;
          border-top: 1px solid rgba(96, 227, 20, 0.18);
          border-bottom: 1px solid rgba(96, 227, 20, 0.18);
          display: flex;
          align-items: center;
          overflow: hidden;
          position: relative;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 7%,
            black 93%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 7%,
            black 93%,
            transparent 100%
          );
        }

        .ticker-track {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          will-change: transform;
          animation: tickerScroll 30s linear infinite;
        }

        @keyframes tickerScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }

        .ticker-container:hover .ticker-track {
          animation-play-state: paused;
        }

        .ticker-item-wrapper {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
        }

        /* Logo no ticker */
        .ticker-logo-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .ticker-logo-img {
          height: 24px;
          width: auto;
          max-width: 140px;
          object-fit: contain;
          display: block;
          opacity: 0.92;
          filter: drop-shadow(0 0 10px rgba(96, 227, 20, 0.22));
          transition: opacity 0.25s ease, filter 0.25s ease;
        }

        .ticker-container:hover .ticker-logo-img {
          opacity: 1;
          filter: drop-shadow(0 0 14px rgba(96, 227, 20, 0.45));
        }

        /* Itens de texto */
        .ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.82);
          white-space: nowrap;
          transition: opacity 0.25s ease, color 0.25s ease;
        }

        .ticker-container:hover .ticker-item {
          opacity: 0.95;
        }

        .ticker-item-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.65);
          flex-shrink: 0;
        }

        .ticker-separator {
          color: rgba(255, 255, 255, 0.16);
          font-weight: 300;
          font-size: 14px;
          margin: 0 32px;
          user-select: none;
          flex-shrink: 0;
        }

        @media (max-width: 992px) {
          .ticker-separator {
            margin: 0 24px;
          }
          .ticker-item {
            font-size: 12.5px;
            letter-spacing: 1.4px;
          }
        }

        @media (max-width: 768px) {
          .ticker-container {
            height: 58px;
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 5%,
              black 95%,
              transparent 100%
            );
            mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 5%,
              black 95%,
              transparent 100%
            );
          }

          .ticker-logo-img {
            height: 18px;
            max-width: 105px;
          }

          .ticker-track {
            animation-duration: 25s;
          }

          .ticker-item {
            font-size: 11.5px;
            letter-spacing: 1.2px;
            gap: 8px;
          }

          .ticker-item-icon svg {
            width: 13px !important;
            height: 13px !important;
          }

          .ticker-separator {
            margin: 0 18px;
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none !important;
          }
          .ticker-container {
            overflow-x: auto;
          }
        }
      `}</style>
    </div>
  );
};
