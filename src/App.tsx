import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Pillars } from './components/Pillars';
import { ResultsCarousels } from './components/ResultsCarousels';
import { Comparison } from './components/Comparison';
import { Deliverables } from './components/Deliverables';
import { AboutPedro } from './components/AboutPedro';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="landing-page-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, paddingTop: 'var(--header-height)' }}>
        <Hero />
        <Marquee />
        <Pillars />
        <ResultsCarousels />
        <Comparison />
        <Deliverables />
        <AboutPedro />
      </main>
      <Footer />
    </div>
  );
};

export default App;
