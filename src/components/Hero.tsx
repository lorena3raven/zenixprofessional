import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { links } from '../utils/whatsapp';

export function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[#fff9f8]
        lg:min-h-screen
      "
    >
      {/* ==================================================
          FUNDO GERAL
      =================================================== */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_20%_45%,#ffffff_0%,#fffafa_32%,#f9eeee_60%,#f2dadd_100%)]
        "
      />

      {/* ==================================================
          FOTO
      =================================================== */}
      <div
        className="
          relative

          -mt-[30px]
lg:mt-0

          lg:absolute
          lg:inset-y-0
          lg:right-0

          w-full
          lg:w-[62%]

          h-[500px]
          sm:h-[580px]
          lg:h-full

          order-2
        "
      >
        <img
  src="/cabelo1.jpg"
  alt="Modelo Zenix Professional"
  className="
    absolute inset-0
    w-full h-full
    object-cover

    object-[55%_55%]

    sm:object-[55%_48%]

    lg:object-[55%_center]
  "
/>

        {/* =========================
            DEGRADÊ DESKTOP
        ========================== */}
        <div
          className="
            hidden lg:block

            absolute
            inset-y-0
            left-0
            z-10

            w-[43%]

            pointer-events-none

            bg-[linear-gradient(90deg,#fff9f8_0%,#fff9f8_12%,rgba(250,238,239,0.92)_28%,rgba(242,211,216,0.68)_48%,rgba(224,163,175,0.30)_68%,rgba(210,135,151,0.08)_84%,transparent_100%)]
          "
        />

        {/* Rosa suave no encontro do fundo com a foto */}
        <div
          className="
            hidden lg:block

            absolute
            inset-y-0
            left-[15%]
            z-[9]

            w-[35%]

            pointer-events-none

            bg-[radial-gradient(ellipse_at_center,rgba(232,185,193,0.25)_0%,rgba(232,185,193,0.10)_45%,transparent_75%)]
          "
        />

        {/* =========================
            DEGRADÊ MOBILE
        ========================== */}
        <div
  className="
    lg:hidden

    absolute
    inset-x-0
    top-0
    z-10

    h-[120px]

    pointer-events-none

    bg-[linear-gradient(180deg,#fff9f8_0%,rgba(255,249,248,0.88)_18%,rgba(249,228,231,0.55)_45%,rgba(229,177,187,0.20)_70%,transparent_100%)]
  "
/>

        {/* Tratamento rosa muito leve */}
        <div
          className="
            absolute inset-0
            bg-[#c9798b]/[0.04]
            pointer-events-none
          "
        />

        {/* =========================
            TEXTO LATERAL
            SOMENTE DESKTOP
        ========================== */}
        <div
          className="
            hidden xl:flex

            absolute
            z-20

            top-[18%]
            right-[6%]

            flex-col
            gap-3

            border-l
            border-white/80

            pl-6

            text-white

            text-[11px]

            font-semibold

            tracking-[0.30em]

            uppercase
          "
        >
          <span>Cabelos</span>
          <span>mais saudáveis</span>
          <span>Profissionais</span>
          <span>mais confiantes</span>
        </div>
      </div>

      {/* ==================================================
          CONTEÚDO
      =================================================== */}
      <div
        className="
          relative
          z-20

          max-w-[1600px]
          mx-auto

          lg:min-h-screen

          flex
          items-center

          px-6
          sm:px-8
          md:px-10
          lg:px-[6vw]

          pt-[105px]
          pb-0

          lg:pt-32
          lg:pb-16
        "
      >
        <div
          className="
            w-full

            lg:w-[53%]
            xl:w-[51%]

            text-center
            lg:text-left
          "
        >
          {/* =========================
              TEXTO SUPERIOR
          ========================== */}
          <span
            className="
              block

              text-[9px]
              min-[400px]:text-[10px]
              md:text-[13px]

              font-semibold

              tracking-[0.30em]
              md:tracking-[0.35em]

              uppercase

              text-zenix-rose-dark

              mb-4
lg:mb-5
            "
          >
            Cosméticos Profissionais
          </span>

          {/* ==================================================
              TÍTULO
          =================================================== */}
          <h1
            className="
              text-[#292526]

              text-[34px]
              min-[390px]:text-[36px]
              min-[430px]:text-[38px]
              sm:text-[46px]
              md:text-[56px]

              lg:text-[4.2vw]
              xl:text-[72px]

              leading-[1.04]
              lg:leading-[0.96]

              tracking-[-0.045em]

              font-light

              max-w-[760px]

              mx-auto
              lg:mx-0

             mb-5
lg:mb-7
            "
          >
            {/* =========================
                TÍTULO MOBILE
            ========================== */}
            <span className="lg:hidden">
              <span className="whitespace-nowrap">
                Beleza{' '}

                <span
                  className="
                    font-serif
                    italic
                    font-normal
                    text-zenix-rose
                    tracking-[-0.035em]
                  "
                >
                  profissional.
                </span>
              </span>

              <br />

              <span className="whitespace-nowrap">
                Resultados que
              </span>

              <br />

              <span className="whitespace-nowrap">
                fazem a diferença.
              </span>
            </span>

            {/* =========================
                TÍTULO DESKTOP
            ========================== */}
            <span className="hidden lg:inline">
              Beleza{' '}

              <span
                className="
                  font-serif
                  italic
                  font-normal
                  text-zenix-rose
                  tracking-[-0.035em]
                "
              >
                profissional.
              </span>

              <br />

              Resultados que

              <br />

              fazem a diferença.
            </span>
          </h1>

          {/* ==================================================
              DESCRIÇÃO
          =================================================== */}
          <p
            className="
              text-[#777173]

              text-[13px]
              sm:text-[14px]
              md:text-[16px]
              lg:text-[17px]

              leading-[1.6]

              max-w-[540px]

              mx-auto
              lg:mx-0

              mb-5
lg:mb-8
            "
          >
           Produtos exclusivos para profissionais e revendedoras credenciadas. Não vendemos ao consumidor final.
          </p>

          {/* ==================================================
              BOTÕES
          =================================================== */}
          <div
            className="
              flex
              flex-col
              sm:flex-row

              items-center

              justify-center
              lg:justify-start

              gap-2
              sm:gap-8

              relative
              z-30
            "
          >
            {/* BOTÃO PRINCIPAL */}
            <a
  href="#categorias"
  className="
    group

    inline-flex
    items-center
    justify-center

    gap-4

    w-auto
    min-w-[285px]
    sm:min-w-0

    bg-zenix-rose
    hover:bg-zenix-rose-dark

    text-white
    font-semibold

    tracking-[0.14em]
    uppercase

    text-[10px]
    min-[400px]:text-[11px]
    md:text-[13px]

    px-7
    py-[15px]
    md:py-[17px]

    rounded-full

    shadow-[0_10px_30px_rgba(184,95,120,0.20)]

    hover:shadow-[0_15px_35px_rgba(184,95,120,0.3)]
    hover:-translate-y-0.5

    transition-all
    duration-300
  "
>
  Conheça nossas linhas

  <ArrowRightIcon
    className="
      w-4 h-4
      shrink-0
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  />
</a>

            {/* BOTÃO / LINK SECUNDÁRIO */}
            <a
              href={links.parceiro}
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative

                w-fit

                text-[#373233]
                hover:text-zenix-rose-dark

                text-[9px]
                min-[400px]:text-[10px]
                md:text-[12px]

                font-semibold

                tracking-[0.20em]

                uppercase

                py-1.5

                after:absolute
                after:left-0
                after:bottom-0

                after:w-full
                after:h-px

                after:bg-zenix-rose

                hover:after:w-1/2

                after:transition-all
                after:duration-300

                transition
              "
            >
              Falar com a gente
            </a>
          </div>
        </div>
      </div>

      {/* ==================================================
          COMPORTAMENTO MOBILE
      =================================================== */}
      <style>{`
        @media (max-width: 1023px) {

          #home {
            display: flex;
            flex-direction: column;
          }

          /* conteúdo primeiro */
          #home > div:nth-child(3) {
            order: 1;
          }

          /* foto logo depois */
          #home > div:nth-child(2) {
            order: 2;
          }

        }
      `}</style>
    </section>
  );
}