export interface Depoimento {
  nome: string;
  iniciais: string;
  profissao: string;
  cidade: string;
  texto: string;
}

export const depoimentos: Depoimento[] = [
  {
    nome: 'Adriana Rodrigues',
    iniciais: 'AR',
    profissao: 'Cabeleireira',
    cidade: 'Imperatriz/MA',
    texto:
      'Uso toda a linha, esse CPR ele é perfeito! Super amei, ganho tempo e me dá segurança, resultado incrível!',
  },
  {
    nome: 'Halyne Seledor',
    iniciais: 'HS',
    profissao: 'Cabeleireira',
    cidade: 'João Lisboa/MA',
    texto:
      'Revendo os produtos e uso a RoyalPlástia, ela é perfeita! Super amei!',
  },
  {
    nome: 'Adriele Pereira',
    iniciais: 'AP',
    profissao: 'Revendedora',
    cidade: 'Imperatriz/MA',
    texto:
      'Sou revendedora da Linha Home Care, essa logística da Zenix é perfeita! Não tenho concorrência e ainda os consumidores finais me encontram através da busca!',
  },
];