export interface Categoria {
  id: string;
  nome: string;
  descricao: string;
  emoji: string;
}

export const categorias: Categoria[] = [
  {
    id: 'royalplastia',
    nome: 'RoyalPlástia',
    descricao:
      'Reestruturador capilar que alinha e recupera os fios, devolvendo brilho e maciez para todos os tipos de cabelo.',
    emoji: '👑',
  },
  {
    id: 'home-care',
    nome: 'Home Care',
    descricao:
      'Produtos para manutenção em casa com resultado profissional.',
    emoji: '🏠',
  },
  {
    id: 'cpr',
    nome: 'CPR',
    descricao:
      'Cauterização e reconstrução cuticular intensiva. Repara profundamente a estrutura dos fios danificados, devolvendo força, resistência e saúde.',
    emoji: '⚡',
  },
  {
    id: 'linha-4',
    nome: 'Linha Profissional',
    descricao:
      'Produtos de alta performance para uso profissional em salões. Resultados excelentes que você confia e recomenda.',
    emoji: '✨',
  },
];