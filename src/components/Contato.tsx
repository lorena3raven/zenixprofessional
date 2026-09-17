import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { links } from '../utils/whatsapp';

export function Contato() {
  return (
    <section
      id="contato"
      className="
        relative

        py-8
        sm:py-10
        md:py-12

        px-5
        sm:px-6
        md:px-8

        bg-zenix-cream

        overflow-hidden
      "
    >
      {/* =========================================
          CONTAINER
      ========================================== */}

      <div
        className="
          relative
          z-10

          max-w-6xl
          mx-auto
        "
      >
        {/* =========================================
            CTA ROSA
        ========================================== */}

        <div
          className="
            relative
            overflow-hidden

            bg-zenix-rose

            rounded-[26px]
            sm:rounded-[30px]
            md:rounded-[34px]

            px-6
            sm:px-10
            md:px-14

            py-10
            sm:py-11
            md:py-12

            text-center

            shadow-[0_18px_45px_rgba(150,80,100,0.16)]
          "
        >
          {/* =========================================
              GLOW SUAVE
          ========================================== */}

          <div
            className="
              absolute

              -top-28
              left-1/2
              -translate-x-1/2

              w-[550px]
              md:w-[650px]

              h-[260px]

              bg-white/15

              rounded-full
              blur-3xl

              pointer-events-none
            "
          />

          {/* =========================================
              CONTEÚDO
          ========================================== */}

          <div className="relative z-10">

            {/* TÍTULO */}

            <h2
              className="
                text-[26px]
                sm:text-[32px]
                md:text-[38px]

                text-white

                font-light

                tracking-[-0.04em]

                leading-[1.1]

                mb-4
              "
            >
              Pronto pra fazer parte da ZENIX?
            </h2>

            {/* SUBTÍTULO */}

            <p
              className="
                text-white/85

                text-[12px]
                sm:text-[13px]
                md:text-[14px]

                font-light

                leading-[1.7]

                max-w-[650px]
                mx-auto

                mb-7
              "
            >
              Fale agora com nossa equipe profissional e descubra as condições exclusivas para você.
            </p>

            {/* =========================================
                BOTÃO
            ========================================== */}

            <a
              href={links.parceiro}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group

                inline-flex
                items-center
                justify-center

                gap-3

                bg-white
                hover:bg-[#FBF8F7]

                text-zenix-rose-dark

                font-semibold

                tracking-[0.16em]

                uppercase

                text-[9px]
                sm:text-[10px]
                md:text-[11px]

                px-7
                sm:px-9

                py-3.5
                sm:py-4

                rounded-full

                shadow-[0_10px_30px_rgba(100,40,60,0.14)]

                hover:-translate-y-0.5

                hover:shadow-[0_14px_35px_rgba(100,40,60,0.20)]

                transition-all
                duration-300
              "
            >
              Quero ser parceiro(a)

              <ArrowRightIcon
                className="
                  w-4
                  h-4

                  stroke-[1.5]

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}