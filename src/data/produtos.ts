export interface Produto {
  id: number;
  nome: string;
  categoria: string;
  descricaoCurta: string;
  descricaoLonga: string;
  imagem: string;
  destaque?: boolean;
}

export const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Biotox Royal Blond',
    categoria: 'royalplastia',
    descricaoCurta: 'Reconstrução profunda e brilho espelhado',
    descricaoLonga:
      'O Biotox Royal é o tratamento de reconstrução e alinhamento que devolve aos fios a beleza e a saúde que merecem. Sua fórmula de alta tecnologia atua reconstruindo a fibra capilar, repondo massa, selando as cutículas e eliminando o frizz. Entrega fios alinhados, disciplinados, com brilho intenso e toque sedoso. Ideal para todos os tipos de cabelo, especialmente os danificados por química, ressecamento ou calor.',
    imagem: '/produtos/biotox_royal.jpg',
    destaque: true,
  },
  {
    id: 2,
    nome: 'ZenitPro Btox Branco',
    categoria: 'linha-4',
    descricaoCurta: 'Alinhamento intensivo com efeito teia',
    descricaoLonga:
      'Desenvolvido com tecnologia Efeito Teia, proporciona máxima emoliência e distribuição uniforme dos ativos, garantindo alinhamento impecável e alta absorção pelos fios desde a primeira aplicação. Fórmula orgânica que combina Manteiga de Cupuaçu, Ácido Hialurônico e a tecnologia exclusiva Hair Link®. O resultado é redução de volume, selagem cuticular e reestruturação da fibra sem agredir a saúde capilar.',
    imagem: '/produtos/zenitpro-btox.png',
  },
  {
    id: 3,
    nome: 'Cauterização Intensiva CPR',
    categoria: 'cpr',
    descricaoCurta: '21 aminoácidos em 35 a 50 minutos',
    descricaoLonga:
      'A solução definitiva para cabelos elásticos, porosos e quebradiços. Composta por um blend exclusivo de 21 Aminoácidos, forma o sistema de reconstrução mais completo do mercado — penetrando profundamente em todas as camadas da fibra capilar. Ação antiporosidade, efeito teia e resultado profissional impecável em apenas 35 a 50 minutos. Indicado para cabelos danificados por descoloração, luzes, alisamentos ou progressivas.',
    imagem: '/produtos/cauterizacao-cpr.png',
    destaque: true,
  },
  {
    id: 4,
    nome: 'Selagem BioZenit Blond',
    categoria: 'linha-4',
    descricaoCurta: 'Matização + reconstrução para loiros',
    descricaoLonga:
      'Reestruturador capilar de alta performance para cabelos loiros, descoloridos ou com tom amarelado. Fórmula enriquecida com Nano® Link, Ácido Hialurônico e Manteiga de Abacate. Reduz volume, disciplina, restaura a maciez, entrega brilho espelhado e promove matização especial que neutraliza tons amarelados. Perfeito para cabelos quimicamente tratados, ressecados ou sem brilho.',
    imagem: '/produtos/selagem-biozenit-blond.png',
  },
  {
    id: 5,
    nome: 'RoyalPlástia Blond',
    categoria: 'royalplastia',
    descricaoCurta: 'Plástica capilar para todos os tipos de cabelo',
    descricaoLonga:
      'Tecnologia avançada que proporciona uma verdadeira plástica capilar sem agredir. Alinhamento profundo, reconstrução, brilho intenso e matização para todos os tipos de fios. Sela as cutículas, elimina o frizz, reduz o volume e repõe nutrientes. Em cabelos loiros, neutraliza tons amarelados e alaranjados. Em cabelos naturais ou escuros, realça a cor, elimina opacidade e valoriza os reflexos. Resultado profissional, duradouro e natural.',
    imagem: '/produtos/royalplastia-blond.png',
  },
  {
    id: 6,
    nome: 'Longmax',
    categoria: 'linha-4',
    descricaoCurta: 'Beleza de dentro pra fora — cápsulas',
    descricaoLonga:
      'Suplemento em cápsulas para cabelos fortes, pele bonita e crescimento acelerado. Neutraliza a queda causada por tratamentos de emagrecimento (como Ozempic e Mounjaro), repõe nutrientes essenciais, fortalece a raiz e impulsiona o crescimento. Fórmula rica em Vitamina B12, Vitamina C, Colágeno, Selênio e Biotina — que também melhora a textura, firmeza e brilho da pele.',
    imagem: '/produtos/longmax.png',
  },
  {
    id: 7,
    nome: 'Liso Absoluto — Home Care',
    categoria: 'home-care',
    descricaoCurta: 'Kit completo pós-química',
    descricaoLonga:
      'O kit completo para prolongar o efeito da química, com fios alinhados, brilho intenso e nutrientes devolvidos. Com óleo de linhaça, óleo de coco e manteiga de karité, atua hidratando, nutrindo e disciplinando os fios. Proporciona efeito liso natural, mantendo os cabelos leves, com movimento e sem pesar. Forma uma camada protetora que prolonga o alisamento e protege do calor.',
    imagem: '/produtos/liso_absoluto.png',
  },
  {
    id: 8,
    nome: 'Banana e Mel',
    categoria: 'home-care',
    descricaoCurta: 'Nutrição profunda e brilho',
    descricaoLonga:
      'Tratamento de nutrição profunda que devolve vida, maciez e brilho aos cabelos ressecados e sem vida. A combinação nutritiva de banana e mel age repondo os nutrientes essenciais, suavizando a fibra e devolvendo o toque sedoso e a luminosidade natural. Ideal para cabelos opacos, sem brilho e que perdem a hidratação com facilidade. Nutre profundamente, sela as pontas e controla o frizz.',
    imagem: '/produtos/banana_e_mel.png',
  },
  {
    id: 9,
    nome: 'Amber Glow Oil',
    categoria: 'home-care',
    descricaoCurta: 'Reparador de pontas com brilho luxuoso',
    descricaoLonga:
      'Reparador de pontas de alta performance que une nutrição, proteção e brilho luxuoso em um só produto. Com óleo de mirra e ingredientes selecionados, sela as pontas, previne pontas duplas, controla o frizz e devolve brilho multidimensional aos fios. Textura leve e absorção rápida — não deixa os fios pesados ou oleosos. Pode ser usado diariamente ou antes da escova/prancha para proteger do calor.',
    imagem: '/produtos/amber_glow.png',
  },
];