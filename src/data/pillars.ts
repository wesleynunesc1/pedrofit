export interface PillarItem {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  bullets: string[];
  image: string;
  icon: 'Activity' | 'Apple' | 'Dumbbell' | 'MessageSquare';
}

export const PILLARS_DATA: PillarItem[] = [
  {
    id: 1,
    number: '01',
    title: 'Diagnóstico Completo e Personalizado',
    subtitle: 'Entenda seu ponto de partida.',
    bullets: ['Análise 360°', 'Avaliação física', 'Metas realistas'],
    image: '/images/pilares/pilar-01.jpg',
    icon: 'Activity'
  },
  {
    id: 2,
    number: '02',
    title: 'Dieta Inteligente e Sustentável',
    subtitle: 'Estratégia para resultados reais.',
    bullets: ['Cardápio flexível', 'Ajuste calórico', 'Sem radicalismo'],
    image: '/images/pilares/pilar-02.jpg',
    icon: 'Apple'
  },
  {
    id: 3,
    number: '03',
    title: 'Treino Eficiente e Adaptado',
    subtitle: 'Hipertrofia com segurança.',
    bullets: ['Periodização', 'Execução correta', 'Progressão constante'],
    image: '/images/pilares/pilar-03.jpg',
    icon: 'Dumbbell'
  },
  {
    id: 4,
    number: '04',
    title: 'Acompanhamento Diário e Motivação',
    subtitle: 'Suporte para manter consistência.',
    bullets: ['Suporte via WhatsApp', 'Ajustes semanais', 'Motivação contínua'],
    image: '/images/pilares/pilar-04.jpg',
    icon: 'MessageSquare'
  }
];

export const PILLARS_BENEFITS = [
  {
    id: 'metodologia',
    title: 'Metodologia Comprovada',
    icon: 'Award'
  },
  {
    id: 'resultados',
    title: 'Resultados Reais',
    icon: 'Trophy'
  },
  {
    id: 'acompanhamento',
    title: 'Acompanhamento Individualizado',
    icon: 'UserCheck'
  },
  {
    id: 'evolucao',
    title: 'Evolução Sustentável',
    icon: 'TrendingUp'
  }
];
