import { useRef, useState } from 'react';
import {
  ShieldCheckIcon,
  UserGroupIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const diferenciais = [
  {
    icone: ShieldCheckIcon,
    titulo: 'Exclusivo para profissionais',
    descricao:
      'Não vendemos ao consumidor final. Nosso único canal são salões e revendedoras credenciadas.',
  },
  {
    icone: UserGroupIcon,
    titulo: 'Parceria que transforma',
    descricao:
      'Crescemos junto com quem usa nossos produtos. Sua clientela não encontra a ZENIX em qualquer lugar.',
  },
  {
    icone: SparklesIcon,
    titulo: 'Qualidade que se vê',
    descricao:
      'Fórmulas desenvolvidas para alta performance em salão, com resultado profissional de verdade.',
  },
  {
    icone: ChatBubbleLeftRightIcon,
    titulo: 'Atendimento próximo',
    descricao:
      'Suporte direto, ágil e humano. Aqui você fala com quem entende de cosmético profissional.',
  },
];

export function Diferenciais() {
  const sectionRef = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPos({ x, y });
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="
        relative
        py-20
        md:py-28
        px-5
        sm:px-6
        border-y
        border-zenix-rose/20
        overflow-hidden
        bg-zenix-rose/30
      "
    >
      {/* FUNDO ROSA */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-b
          from-zenix-rose-dark/90
          via-zenix-rose/40
          to-zenix-rose/20
          pointer-events-none
        "
      />

      {/* SPOTLIGHT */}
      <div
        className="
          absolute
          inset-0
          transition-[background]
          duration-300
          ease-out
          pointer-events-none
          opacity-50
        "
        style={{
          background: `radial-gradient(
            700px circle at ${pos.x}% ${pos.y}%,
            rgba(183, 110, 130, 0.6),
            transparent 70%
          )`,
        }}
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
            md:mb-14
          "
        >
          {/* TAG */}

          <span
            className="
              inline-block
              text-white
              text-[9px]
              sm:text-[10px]
              md:text-[11px]
              font-semibold
              tracking-[0.30em]
              uppercase
              mb-5
              px-4
              py-1.5
              bg-white/15
              backdrop-blur-sm
              rounded-full
              border
              border-white/30
            "
          >
            Nossos Diferenciais
          </span>

          {/* =========================================
              TÍTULO

              MOBILE:
              Por que a ZENIX
              é diferente?

              DESKTOP:
              Por que a ZENIX é diferente?
          ========================================== */}

          <h2
            className="
              text-[30px]
              sm:text-[38px]
              md:text-[48px]
              text-white
              font-light
              tracking-[-0.04em]
              leading-[1.08]
              mt-2
              mb-5
              drop-shadow-lg
            "
          >
            {/* MOBILE */}
            <span className="sm:hidden">
              <span className="block whitespace-nowrap">
                Por que a ZENIX
              </span>

              <span className="block">
                é diferente?
              </span>
            </span>

            {/* TABLET / DESKTOP */}
            <span className="hidden sm:inline">
              Por que a ZENIX é diferente?
            </span>
          </h2>

          {/* =========================================
              DESCRIÇÃO

              MOBILE:
              Mais do que produtos, entregamos uma
              parceria real com quem vive da beleza.
          ========================================== */}

          <p
            className="
              text-white/90
              text-[13px]
              sm:text-[14px]
              md:text-[16px]
              font-light
              max-w-2xl
              mx-auto
              leading-[1.65]
              drop-shadow-md
            "
          >
            {/* MOBILE */}
            <span className="sm:hidden">
              <span className="block whitespace-nowrap">
                Mais do que produtos, entregamos uma
              </span>

              <span className="block whitespace-nowrap">
                parceria real com quem vive da beleza.
              </span>
            </span>

            {/* TABLET / DESKTOP */}
            <span className="hidden sm:inline">
              Mais do que produtos, entregamos uma parceria real com quem vive
              da beleza.
            </span>
          </p>
        </div>

        {/* =========================================
            CARDS DOS DIFERENCIAIS
        ========================================== */}

        <div
          className="
            grid
            md:grid-cols-2
            gap-4
            md:gap-5
          "
        >
          {diferenciais.map((item) => {
            const Icone = item.icone;

            return (
              <div
                key={item.titulo}
                className="
                  group
                  relative
                  flex
                  items-start
                  gap-4
                  md:gap-5
                  bg-[#F8F4F2]/95
                  backdrop-blur-xl
                  border
                  border-white/50
                  rounded-[24px]
                  md:rounded-3xl
                  p-5
                  sm:p-6
                  md:p-7
                  shadow-[0_14px_35px_rgba(90,50,60,0.11)]
                  hover:bg-white
                  hover:border-zenix-rose/40
                  hover:-translate-y-1
                  hover:shadow-[0_20px_45px_rgba(90,50,60,0.16)]
                  transition-all
                  duration-300
                  overflow-hidden
                "
              >
                {/* GLOW ROSA */}

                <div
                  className="
                    absolute
                    -top-12
                    -right-12
                    w-40
                    h-40
                    bg-zenix-rose/0
                    group-hover:bg-zenix-rose/10
                    blur-3xl
                    rounded-full
                    transition-all
                    duration-500
                    pointer-events-none
                  "
                />

                {/* ÍCONE */}

                <div className="relative shrink-0">
                  <div
                    className="
                      w-11
                      h-11
                      md:w-12
                      md:h-12
                      rounded-xl
                      md:rounded-2xl
                      bg-zenix-rose/10
                      border
                      border-zenix-rose/25
                      flex
                      items-center
                      justify-center
                      text-zenix-rose-dark
                      transition-all
                      duration-300
                      group-hover:bg-zenix-rose
                      group-hover:text-white
                      group-hover:border-zenix-rose
                      group-hover:scale-105
                      group-hover:shadow-lg
                      group-hover:shadow-zenix-rose/20
                    "
                  >
                    <Icone
                      className="
                        w-5
                        h-5
                        md:w-6
                        md:h-6
                        stroke-[1.4]
                      "
                    />
                  </div>
                </div>

                {/* TEXTO */}

                <div className="relative pt-0.5">
                  <h3
                    className="
                      text-[17px]
                      md:text-[19px]
                      text-zenix-ink
                      font-light
                      tracking-[-0.025em]
                      leading-[1.2]
                      mb-2
                    "
                  >
                    {item.titulo}
                  </h3>

                  <p
                    className="
                      text-[12px]
                      sm:text-[13px]
                      md:text-[14px]
                      text-zenix-warm-gray
                      font-light
                      leading-[1.6]
                    "
                  >
                    {item.descricao}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}