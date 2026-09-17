import { useRef, useState } from 'react';
import {
  TruckIcon,
  HandRaisedIcon,
  BuildingStorefrontIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';

const itens = [
  {
    icone: TruckIcon,
    titulo: 'Pronta Entrega',
    descricao: 'Produtos disponíveis para envio imediato',
  },
  {
    icone: HandRaisedIcon,
    titulo: 'Parceria Exclusiva',
    descricao: 'Vendemos apenas para profissionais credenciados',
  },
  {
    icone: BuildingStorefrontIcon,
    titulo: 'Atendimento Presencial',
    descricao: 'Suporte direto e personalizado para você',
  },
  {
    icone: CalendarDaysIcon,
    titulo: 'Visita sem Compromisso',
    descricao: 'Agende uma visita e conheça os produtos',
  },
];

export function Destaques() {
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
        border-y
        border-zenix-rose/20
        overflow-hidden
        bg-zenix-rose/30
      "
    >
      {/* Gradiente animado que segue o mouse */}
      <div
        className="
          absolute
          inset-0
          transition-[background]
          duration-300
          ease-out
          pointer-events-none
        "
        style={{
          background: `radial-gradient(
            700px circle at ${pos.x}% ${pos.y}%,
            #b76e82 0%,
            #c97a8e 20%,
            #d98a9e 45%,
            #e8a5b8 75%,
            #f0c0cc 100%
          )`,
        }}
      />

      {/* Conteúdo */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          py-14
        "
      >
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {itens.map((item) => {
            const Icone = item.icone;

            return (
              <div
                key={item.titulo}
                className="
                  group

                  flex
                  flex-col
                  items-center
                  text-center

                  p-6

                  rounded-2xl

                  bg-zinc-900/40
                  backdrop-blur-md

                  shadow-lg

                  transition-all
                  duration-300

                  hover:bg-zinc-900/50
                  hover:-translate-y-1
                "
              >
                {/* Ícone */}
                <div
                  className="
                    w-14
                    h-14

                    rounded-full

                    bg-white/20
                    border
                    border-white/40

                    flex
                    items-center
                    justify-center

                    mb-5

                    shadow-sm

                    transition-all
                    duration-300

                    group-hover:bg-white/30
                    group-hover:scale-110
                  "
                >
                  <Icone
                    className="
                      w-6
                      h-6
                      text-white
                      stroke-[1.4]
                    "
                  />
                </div>

                {/* Título */}
                <h3
                  className="
                    text-[17px]
                    md:text-[18px]

                    font-light

                    tracking-[-0.025em]

                    leading-tight

                    text-white

                    mb-3
                  "
                >
                  {item.titulo}
                </h3>

                {/* Descrição */}
                <p
                  className="
                    text-[13px]
                    md:text-[14px]

                    font-light

                    tracking-[-0.01em]

                    text-white/85

                    leading-[1.55]

                    max-w-55
                  "
                >
                  {item.descricao}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}