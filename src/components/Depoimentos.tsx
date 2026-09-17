import { depoimentos } from '../data/depoimentos';
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid';

// Corações flutuantes decorativos
const coracoesFlutuantes = [
  { left: '5%', delay: 0, duration: 18, size: 80, opacity: 0.12 },
  { left: '15%', delay: 3, duration: 22, size: 60, opacity: 0.10 },
  { left: '28%', delay: 6, duration: 20, size: 100, opacity: 0.14 },
  { left: '42%', delay: 2, duration: 24, size: 70, opacity: 0.11 },
  { left: '55%', delay: 8, duration: 19, size: 90, opacity: 0.13 },
  { left: '68%', delay: 4, duration: 23, size: 65, opacity: 0.10 },
  { left: '82%', delay: 7, duration: 21, size: 95, opacity: 0.14 },
  { left: '94%', delay: 1, duration: 25, size: 55, opacity: 0.09 },
];

export function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="
        relative
        py-20
        md:py-28
        px-5
        sm:px-6
        bg-zenix-cream
        overflow-hidden
      "
    >
      {/* =========================================
          CORAÇÕES FLUTUANTES
      ========================================== */}
      {coracoesFlutuantes.map((c, i) => (
        <div
          key={i}
          className="
            absolute
            bottom-0
            pointer-events-none
            animate-float-up
          "
          style={{
            left: c.left,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            opacity: c.opacity,
          }}
        >
          <HeartIcon
            className="text-zenix-rose"
            style={{
              width: c.size,
              height: c.size,
            }}
          />
        </div>
      ))}

      {/* =========================================
          BLOBS DECORATIVOS
      ========================================== */}
      <div
        className="
          absolute
          top-1/3
          -left-20

          w-80
          h-80

          bg-zenix-blush

          rounded-full
          blur-3xl

          opacity-60

          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-20
          -right-20

          w-72
          h-72

          bg-zenix-rose/20

          rounded-full
          blur-3xl

          opacity-60

          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* =========================================
            CABEÇALHO
        ========================================== */}
        <div
          className="
            max-w-3xl
            mx-auto
            text-center

            mb-12
            md:mb-16
          "
        >
          {/* Tag */}
          <span
            className="
              inline-flex
              items-center
              gap-2

              text-zenix-rose-dark

              text-[9px]
              sm:text-[10px]
              md:text-[11px]

              font-semibold

              tracking-[0.30em]

              uppercase

              mb-5

              px-4
              py-1.5

              bg-white

              rounded-full

              border
              border-zenix-rose/25

              shadow-sm
            "
          >
            <HeartIcon
              className="
                w-3
                h-3

                text-zenix-rose

                animate-gentle-pulse
              "
            />

            Depoimentos
          </span>

          {/* Título */}
          <h2
  className="
    text-[30px]
    sm:text-[38px]
    md:text-[48px]

    text-zenix-ink
    font-light
    tracking-[-0.04em]
    leading-[1.08]

    mt-2
    mb-5
  "
>
  Quem usa,{' '}

  <span
    className="
      font-display
      text-zenix-rose
      italic
      font-normal

      text-[36px]
      sm:text-[46px]
      md:text-[58px]

      tracking-[-0.025em]
      leading-none
    "
  >
    se apaixona
  </span>
</h2>

          {/* Descrição */}
          <p
            className="
              text-zenix-warm-gray

              text-[13px]
              sm:text-[14px]
              md:text-[16px]

              font-light

              leading-[1.65]
            "
          >
            Histórias reais de profissionais que confiam na ZENIX.
          </p>
        </div>

        {/* =========================================
            GRID DE DEPOIMENTOS
        ========================================== */}
        <div
          className="
            grid
            md:grid-cols-3

            gap-5
            md:gap-6
          "
        >
          {depoimentos.map((dep, index) => (
            <div
              key={dep.nome}
              className="
                group
                relative

                bg-white

                p-6
                md:p-8

                shadow-md

                hover:shadow-2xl
                hover:-translate-y-1.5

                transition-all
                duration-500

                border
                border-zenix-rose/10
              "
              style={{
                borderTopLeftRadius:
                  index % 2 === 0 ? '2.5rem' : '4rem',
                borderTopRightRadius:
                  index % 2 === 0 ? '4rem' : '2.5rem',
                borderBottomLeftRadius: '2.5rem',
                borderBottomRightRadius: '2.5rem',
              }}
            >
              {/* =========================================
                  ESTRELAS
              ========================================== */}
              <div
                className="
                  flex
                  gap-1

                  mb-5
                  md:mb-6
                "
              >
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon
                    key={i}
                    className="
                      w-4
                      h-4
                      text-zenix-rose
                    "
                  />
                ))}
              </div>

              {/* =========================================
                  TEXTO DO DEPOIMENTO
              ========================================== */}
              <p
                className="
                  relative

                  text-zenix-ink

                  text-[15px]
                  md:text-[16px]

                  font-light
                  italic

                  tracking-[-0.01em]

                  leading-[1.7]

                  mb-7
                  md:mb-8
                "
              >
                {/* Aspas */}
                <span
                  className="
                    absolute
                    -top-4
                    -left-2

                    text-zenix-blush

                    text-5xl

                    font-serif

                    leading-none

                    select-none
                  "
                >
                  "
                </span>

                <span className="relative">
                  {dep.texto}
                </span>
              </p>

              {/* =========================================
                  AUTOR
              ========================================== */}
              <div
                className="
                  flex
                  items-center

                  gap-4

                  pt-5
                  md:pt-6

                  border-t
                  border-dashed
                  border-zenix-rose/20
                "
              >
                {/* Iniciais */}
                <div
                  className="
                    w-12
                    h-12
                    md:w-14
                    md:h-14

                    bg-linear-to-br
                    from-zenix-rose
                    to-zenix-rose-dark

                    flex
                    items-center
                    justify-center

                    text-white

                    font-semibold

                    text-[11px]
                    md:text-[12px]

                    tracking-[0.08em]

                    shrink-0

                    shadow-md
                    shadow-zenix-rose/30
                  "
                  style={{
                    borderRadius: '50% 50% 50% 20%',
                  }}
                >
                  {dep.iniciais}
                </div>

                {/* Dados */}
                <div>
                  <p
                    className="
                      text-zenix-ink

                      text-[14px]
                      md:text-[15px]

                      font-medium

                      tracking-[-0.015em]

                      leading-tight
                    "
                  >
                    {dep.nome}
                  </p>

                  <p
                    className="
                      text-[10px]
                      md:text-[11px]

                      text-zenix-warm-gray

                      font-light

                      mt-1

                      leading-relaxed
                    "
                  >
                    {dep.profissao} · {dep.cidade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}