import { CheckBadgeIcon, HeartIcon, TrophyIcon } from '@heroicons/react/24/outline';

const pilares = [
  {
    icone: HeartIcon,
    titulo: 'Parceria Real',
    descricao:
      'Nosso único canal de vendas são os profissionais. Crescemos juntos com quem usa e revende nossos produtos.',
  },
  {
    icone: CheckBadgeIcon,
    titulo: 'Qualidade Premium',
    descricao:
      'Produtos desenvolvidos para alta performance em salões, com resultado profissional de verdade.',
  },
  {
    icone: TrophyIcon,
    titulo: 'Atendimento de Excelência',
    descricao:
      'Suporte próximo, ágil e personalizado. Aqui você fala com gente que entende do assunto.',
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="relative bg-zenix-cream">

      {/* ==================================================
          CABEÇALHO DA SEÇÃO
      =================================================== */}
      <div className="max-w-3xl mx-auto text-center px-6 pt-24 pb-16">

        {/* Texto pequeno */}
        <span
          className="
            text-zenix-rose-dark
            text-[10px]
            md:text-[12px]
            font-semibold
            tracking-[0.35em]
            uppercase
          "
        >
          Sobre a ZENIX
        </span>

        {/* Título */}
        <h2
  className="
    text-[30px]
    sm:text-[36px]
    md:text-[48px]
    text-zenix-ink
    font-light
    tracking-[-0.04em]
    mt-4
    mb-6
    leading-[1.08]
  "
>
  <span className="whitespace-nowrap">
    Elevando o padrão
  </span>

  <br />

  <span className="whitespace-nowrap">
    do mercado profissional
  </span>
</h2>

        {/* Descrição */}
        <p
          className="
            text-zenix-warm-gray
            text-[14px]
            md:text-[16px]
            font-light
            leading-[1.7]
            max-w-[720px]
            mx-auto
          "
        >
          A{' '}
          <span className="text-zenix-rose-dark font-medium">
            ZENIX Professional
          </span>{' '}
          surgiu em 2025 com um propósito claro: elevar o padrão de qualidade
          dos cosméticos capilares profissionais. Escolhemos o caminho da
          parceria, nosso único canal de vendas são os próprios profissionais.
        </p>
      </div>

      {/* ==================================================
          FOTO + MISSÃO
      =================================================== */}
      <div className="relative w-full h-100 md:h-130 overflow-hidden">

        <img
          src="/cabelo2.jpg"
          alt="Cabelo profissional ZENIX"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-linear-to-t
            from-zenix-ink/85
            via-zenix-ink/50
            to-zenix-ink/20
          "
        />

        {/* Missão */}
        <div
          className="
            relative
            z-10
            h-full
            flex
            items-center
            justify-center
            px-6
          "
        >
          <div className="max-w-3xl text-center">

            <span
              className="
                inline-block
                text-white/80
                text-[10px]
                md:text-[12px]
                font-semibold
                tracking-[0.35em]
                uppercase
                mb-5
                drop-shadow-md
              "
            >
              Nossa Missão
            </span>

            <p
              className="
                text-[25px]
                md:text-[38px]
                text-white
                font-light
                tracking-[-0.03em]
                leading-[1.15]
                drop-shadow-lg
              "
            >
              “Nos destacar no mercado de cosméticos pela parceria, qualidade e
              excelência no atendimento.”
            </p>

          </div>
        </div>
      </div>

      {/* ==================================================
          PILARES
      =================================================== */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-6">

          {pilares.map((pilar) => {
            const Icone = pilar.icone;

            return (
              <div
                key={pilar.titulo}
                className="
                  group
                  bg-white
                  border
                  border-zenix-rose/15
                  rounded-3xl
                  p-8

                  hover:border-zenix-rose/40
                  hover:shadow-xl
                  hover:-translate-y-1

                  transition-all
                  duration-300
                "
              >

                {/* Ícone */}
                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-zenix-blush

                    flex
                    items-center
                    justify-center

                    mb-6

                    transition-all
                    duration-300

                    group-hover:bg-zenix-rose
                  "
                >
                  <Icone
                    className="
                      w-6
                      h-6

                      text-zenix-rose-dark
                      stroke-[1.4]

                      transition-colors
                      duration-300

                      group-hover:text-white
                    "
                  />
                </div>

                {/* Título */}
                <h3
                  className="
                    text-[18px]
                    md:text-[20px]

                    text-zenix-ink

                    font-light

                    tracking-[-0.025em]

                    leading-tight

                    mb-3
                  "
                >
                  {pilar.titulo}
                </h3>

                {/* Descrição */}
                <p
                  className="
                    text-zenix-warm-gray

                    text-[13px]
                    md:text-[14px]

                    font-light

                    leading-[1.65]
                  "
                >
                  {pilar.descricao}
                </p>

              </div>
            );
          })}

        </div>
      </div>

    </section>
  );
}