import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { links } from '../utils/whatsapp';

const navegacao = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Linhas', href: '#categorias' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Cadastro', href: '#cadastro' },
];

const contatos = [
  {
    label: 'WhatsApp',
    valor: '+55 63 9206-8388',
    href: links.parceiro,
  },
  {
    label: 'E-mail',
    valor: 'zenixbelezaprofissional@gmail.com',
    href: 'mailto:zenixbelezaprofissional@gmail.com',
  },
  {
    label: 'Instagram',
    valor: '@zenix.professional',
    href: 'https://www.instagram.com/zenix.professional',
  },
  {
    label: 'Localização',
    valor: 'Imperatriz / MA',
    href: 'https://maps.google.com/?q=Imperatriz+MA',
  },
];

export function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden
        text-white
        bg-[#C98296]
      "
    >
      {/* =========================================
          FUNDO ROSA
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[#C98296]
          pointer-events-none
        "
      />

      {/* =========================================
          LUZ SUAVE CENTRAL
      ========================================== */}

      <div
        className="
          absolute
          -top-52
          left-1/2
          -translate-x-1/2

          w-[900px]
          h-[420px]

          bg-white/8

          rounded-full
          blur-3xl

          pointer-events-none
        "
      />

      {/* =========================================
          CONTEÚDO
      ========================================== */}

      <div
        className="
          relative
          z-10

          max-w-7xl
          mx-auto

          px-5
          sm:px-6

          pt-14
          sm:pt-16
          md:pt-20

          pb-7
          md:pb-8
        "
      >
        {/* =========================================
            PARTE SUPERIOR
        ========================================== */}

        <div
          className="
            grid
            grid-cols-1

            md:grid-cols-2
            lg:grid-cols-12

            gap-10
            lg:gap-12

            mb-12
            md:mb-14
          "
        >
          {/* =====================================
              LOGO + DESCRIÇÃO
          ====================================== */}

          <div className="md:col-span-2 lg:col-span-5">
            <a
              href="#home"
              className="
                inline-flex
                items-center
                mb-5
                group
              "
            >
              <img
                src="/logo-zenix.png"
                alt="ZENIX Professional"
                className="
                  h-14
                  sm:h-16
                  w-auto

                  brightness-0
                  invert

                  transition-opacity
                  duration-300

                  group-hover:opacity-80
                "
              />
            </a>

            {/* DESCRIÇÃO */}

            <p
              className="
                text-white/80

                text-[13px]
                sm:text-[14px]
                md:text-[15px]

                font-light

                leading-[1.75]

                max-w-[470px]

                mb-7
              "
            >
              Cosméticos capilares profissionais exclusivos para salões e
              revendedoras credenciadas. Parceria que transforma.
            </p>

            {/* BOTÃO */}

            <a
              href={links.parceiro}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group

                inline-flex
                items-center
                justify-center

                gap-2.5

                bg-white
                hover:bg-[#FBF8F7]

                text-[#B56D82]

                font-semibold

                tracking-[0.16em]
                uppercase

                text-[9px]
                sm:text-[10px]

                px-6
                sm:px-7

                py-3.5

                rounded-full

                shadow-[0_10px_30px_rgba(110,50,70,0.12)]

                hover:-translate-y-0.5
                hover:shadow-[0_14px_35px_rgba(110,50,70,0.18)]

                transition-all
                duration-300
              "
            >
              Falar com a gente

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

          {/* =====================================
              NAVEGAÇÃO
          ====================================== */}

          <div className="lg:col-span-3">
            <h4
              className="
                text-[9px]
                sm:text-[10px]

                font-semibold

                tracking-[0.28em]
                uppercase

                text-white/55

                mb-5
              "
            >
              Navegação
            </h4>

            <nav
              className="
                grid
                grid-cols-2
                md:grid-cols-1

                gap-x-6
                gap-y-3
              "
            >
              {navegacao.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="
                    w-fit

                    text-white/85
                    hover:text-white

                    text-[13px]
                    sm:text-[14px]

                    font-light

                    transition-colors
                    duration-300
                  "
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* =====================================
              CONTATO
          ====================================== */}

          <div className="lg:col-span-4">
            <h4
              className="
                text-[9px]
                sm:text-[10px]

                font-semibold

                tracking-[0.28em]
                uppercase

                text-white/55

                mb-5
              "
            >
              Contato
            </h4>

            <ul
              className="
                flex
                flex-col
                gap-4
              "
            >
              {contatos.map((item) => {
                const externo = item.href.startsWith('http');

                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={externo ? '_blank' : undefined}
                      rel={externo ? 'noopener noreferrer' : undefined}
                      className="
                        group
                        flex
                        flex-col
                        w-fit
                        max-w-full
                      "
                    >
                      <span
                        className="
                          text-[8px]
                          sm:text-[9px]

                          text-white/50

                          uppercase
                          tracking-[0.18em]

                          font-medium

                          mb-1
                        "
                      >
                        {item.label}
                      </span>

                      <span
                        className="
                          text-white/90
                          group-hover:text-white

                          text-[12px]
                          sm:text-[13px]
                          md:text-[14px]

                          font-light

                          break-all

                          transition-colors
                          duration-300
                        "
                      >
                        {item.valor}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* =========================================
            PARTE INFERIOR
        ========================================== */}

        <div
          className="
            pt-6

            border-t
            border-white/20

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-3
          "
        >
          {/* COPYRIGHT */}

          <p
            className="
              text-[10px]
              sm:text-[11px]

              text-white/55

              font-light

              text-center
              md:text-left
            "
          >
            © {anoAtual} ZENIX Professional. Todos os direitos reservados.
          </p>

          {/* =====================================
              CRÉDITOS
          ====================================== */}

          <p
            className="
              text-[10px]
              sm:text-[11px]

              text-white/55

              font-light

              text-center
              md:text-right
            "
          >
            Desenvolvido por{' '}

            {/* LORENA */}

            <a
              href="https://www.instagram.com/design.lorena/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white/90
                font-medium

                hover:text-white
                hover:underline

                underline-offset-4

                transition-all
                duration-300
              "
            >
              Lorena Ravena
            </a>

            {' '}e{' '}

            {/* PAULA */}

            <a
              href="https://github.com/paulamelo2404"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white/90
                font-medium

                hover:text-white
                hover:underline

                underline-offset-4

                transition-all
                duration-300
              "
            >
              Paula Melo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}