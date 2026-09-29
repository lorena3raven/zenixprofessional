import { useRef, useState } from 'react';

import {
  SparklesIcon,
  HomeIcon,
  BoltIcon,
  StarIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

import { categorias } from '../data/categorias';

const iconesPorCategoria: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  royalplastia: SparklesIcon,
  'home-care': HomeIcon,
  cpr: BoltIcon,
  'linha-4': StarIcon,
};

export function Categorias() {
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
      id="categorias"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="
        relative
        py-16
        sm:py-20
        md:py-24
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

      {/* SPOTLIGHT QUE SEGUE O MOUSE */}
      <div
        className="
          absolute
          inset-0
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

        {/* CABEÇALHO */}
        <div
          className="
            max-w-3xl
            mx-auto
            text-center
            mb-10
            sm:mb-12
            md:mb-12
          "
        >
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
              mb-4
              px-4
              py-1.5
              bg-white/15
              rounded-full
              border
              border-white/30
            "
          >
            Nossas Linhas
          </span>

          <h2
            className="
              text-[29px]
              sm:text-[38px]
              md:text-[48px]
              text-white
              font-light
              tracking-[-0.04em]
              leading-[1.08]
              mt-1
              mb-4
              md:mb-5
              drop-shadow-lg
            "
          >
            Linhas profissionais
            <br />
            para cada necessidade
          </h2>

          <p
            className="
              text-white/90
              text-[12px]
              sm:text-[14px]
              md:text-[16px]
              font-light
              max-w-2xl
              mx-auto
              leading-[1.65]
              drop-shadow-md
            "
          >
            Do tratamento à coloração, cada linha foi desenvolvida com alta
            tecnologia para entregar resultado impecável de salão.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
            sm:gap-5
            lg:gap-6
            items-stretch
          "
        >
          {categorias.map((cat, index) => {
            const Icone =
              iconesPorCategoria[cat.id] ?? SparklesIcon;

            return (
              <a
                key={cat.id}
                href="#cadastro"
                className="
                  group
                  relative
                  isolate
                  w-full
                  min-w-0
                  h-full
                  flex
                  flex-col
                  bg-[#F8F4F2]
                  border
                  border-white/50
                  rounded-[24px]
                  sm:rounded-3xl
                  p-5
                  sm:p-6
                  lg:p-6
                  shadow-[0_14px_35px_rgba(90,50,60,0.11)]
                  hover:border-zenix-rose/40
                  hover:-translate-y-1
                  hover:shadow-[0_20px_45px_rgba(90,50,60,0.16)]
                  transition-[transform,box-shadow,border-color]
                  duration-300
                  overflow-hidden
                "
              >
                {/* GLOW INTERNO */}
                <div
                  className="
                    absolute
                    -z-0
                    -top-12
                    -left-12
                    w-40
                    h-40
                    rounded-full
                    bg-zenix-rose/0
                    group-hover:bg-zenix-rose/10
                    blur-2xl
                    transition-colors
                    duration-500
                    pointer-events-none
                  "
                />

                {/* TOPO */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-between
                    mb-4
                  "
                >
                  {/* ÍCONE */}
                  <div
                    className="
                      w-10
                      h-10
                      sm:w-11
                      sm:h-11
                      shrink-0
                      rounded-xl
                      sm:rounded-2xl
                      bg-zenix-rose/10
                      border
                      border-zenix-rose/25
                      flex
                      items-center
                      justify-center
                      text-zenix-rose-dark
                      transition-colors
                      duration-300
                      group-hover:bg-zenix-rose
                      group-hover:text-white
                      group-hover:border-zenix-rose
                    "
                  >
                    <Icone
                      className="
                        w-[18px]
                        h-[18px]
                        sm:w-5
                        sm:h-5
                        stroke-[1.4]
                      "
                    />
                  </div>

                  {/* NÚMERO */}
                  <span
                    className="
                      text-[26px]
                      sm:text-[29px]
                      md:text-[30px]
                      font-light
                      tracking-[-0.04em]
                      text-zenix-rose/25
                      group-hover:text-zenix-rose/55
                      transition-colors
                      duration-300
                      select-none
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* TEXTO */}
                <div className="relative z-10">
                  <h3
                    className="
                      text-[17px]
                      sm:text-[18px]
                      md:text-[19px]
                      text-zenix-ink
                      font-light
                      tracking-[-0.025em]
                      leading-tight
                      mb-2
                    "
                  >
                    {cat.nome}
                  </h3>

                  <p
                    className="
                      text-[12px]
                      sm:text-[13px]
                      md:text-[13px]
                      font-light
                      text-zenix-warm-gray
                      leading-[1.5]
                    "
                  >
                    {cat.descricao}
                  </p>
                </div>

                {/* CTA */}
                <div
                  className="
                    relative
                    z-10
                    mt-auto
                    pt-5
                  "
                >
                  <div
                    className="
                      pt-3
                      border-t
                      border-zenix-rose/15
                      group-hover:border-zenix-rose/30
                      flex
                      items-center
                      justify-between
                      text-[9px]
                      sm:text-[10px]
                      font-semibold
                      tracking-[0.18em]
                      uppercase
                      text-zenix-warm-gray
                      group-hover:text-zenix-rose-dark
                      transition-colors
                      duration-300
                    "
                  >
                    <span>Tenho interesse</span>

                    <ArrowRightIcon
                      className="
                        w-4
                        h-4
                        shrink-0
                        stroke-[1.5]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}