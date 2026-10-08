export interface DeliverableItem {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const DELIVERABLES_DATA: DeliverableItem[] = [
  {
    id: 1,
    number: '01',
    title: 'Avaliação Física Completa e Diagnóstico 360°',
    description: 'Uma análise detalhada do seu corpo, incluindo bioimpedância, medidas corporais e avaliação da composição corporal. Além disso, um diagnóstico completo da sua rotina, objetivos e preferências para criar um plano sob medida.',
    icon: 'ScanLine'
  },
  {
    id: 2,
    number: '02',
    title: 'Plano de Treino Personalizado',
    description: 'Um programa de treinamento individualizado, focado nos seus objetivos, limitações e tempo disponível. Inclui vídeos de execução correta dos exercícios e informações completas sobre séries, repetições, cadência e descanso.',
    icon: 'Dumbbell'
  },
  {
    id: 3,
    number: '03',
    title: 'Plano Alimentar Individualizado',
    description: 'Uma dieta personalizada, com alimentos que você gosta e que se encaixam no seu orçamento e rotina diária. Inclui opções inteligentes de substituição para você nunca passar aperto.',
    icon: 'Utensils'
  },
  {
    id: 4,
    number: '04',
    title: 'Acompanhamento Diário via WhatsApp',
    description: 'Suporte constante e próximo, com comunicação direta com o treinador para tirar dúvidas imediatas, enviar vídeos dos exercícios para análise técnica e receber feedbacks constantes.',
    icon: 'MessageCircle'
  },
  {
    id: 5,
    number: '05',
    title: 'Avaliações Periódicas e Ajustes no Plano',
    description: 'Monitoramento contínuo da sua evolução estética e metabólica, com análises regulares e ajustes estratégicos no treino e na dieta para otimizar seus resultados e quebrar estagnações.',
    icon: 'TrendingUp'
  }
];

export const PROGRESS_POINTS = [
  {
    title: 'Aumento de massa muscular',
    description: 'Avaliaremos o ganho de massa magra e ajustaremos a periodização de treino para maximizar a hipertrofia nos grupos prioritários.'
  },
  {
    title: 'Redução do percentual de gordura',
    description: 'Monitoraremos a diminuição contínua da gordura corporal e adaptaremos a estratégia alimentar para acelerar a queima calórica sem perda de rendimento.'
  },
  {
    title: 'Melhora da definição e simetria',
    description: 'Analisaremos a definição de grupos musculares específicos (abdômen, pernas, costas e ombros), desenhando novas técnicas para aprimorar a estética global do seu físico.'
  }
];
