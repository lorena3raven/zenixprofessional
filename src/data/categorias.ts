export interface Categoria {
  id: string;
  nome: string;
  descricao: string;
  emoji: string; // placeholder — depois trocamos por imagem
}

export const categorias: Categoria[] = [
  {
    id: 'royalplastia',
    nome: 'RoyalPlástia',
    descricao: 'Linha de reconstrução e plasticidade capilar.',
    emoji: '👑',
  },
  {
    id: 'home-care',
    nome: 'Home Care',
    descricao: 'Produtos para manutenção em casa com resultado profissional.',
    emoji: '🏠',
  },
  {
    id: 'cpr',
    nome: 'CPR',
    descricao: 'Alta performance em coloração e tratamento.',
    emoji: '⚡',
  },
  {
    id: 'linha-4',
    nome: 'Linha Profissional',
    descricao: 'Placeholder — trocar pelo nome real.',
    emoji: '✨',
  },
];