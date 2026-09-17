import { useState } from 'react';
import { produtos, type Produto } from '../data/produtos';
import { categorias } from '../data/categorias';
import { links } from '../utils/whatsapp';

import {
  ArrowRightIcon,
  XMarkIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

function nomeCategoria(id: string): string {
  return categorias.find((c) => c.id === id)?.nome ?? id;
}

export function Produtos() {
  const [produtoAberto, setProdutoAberto] = useState<Produto | null>(null);

  return (
    <>
      <section
        id="produtos"
        className="
          relative
          py-16
          sm:py-20
          md:py-24
          px-4
          sm:px-6
          bg-zenix-cream
        "
      >
        <div className="max-w-7xl mx-auto">
          {/* ==================================================
              CABEÇALHO
          =================================================== */}

          <div
            className="
              max-w-3xl
              mx-auto
              text-center
              mb-10
              sm:mb-12
              md:mb-16
            "
          >
            {/* Tag */}

            <span
              className="
                text-zenix-rose-dark
                text-[9px]
                sm:text-[10px]
                md:text-[11px]
                font-semibold
                tracking-[0.30em]
                uppercase
              "
            >
              Catálogo
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
                mt-4
                mb-5
              "
            >
              Conheça nossos produtos
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
              Cada produto desenvolvido para entregar performance profissional.
            </p>
          </div>

          {/* ==================================================
              GRID DE PRODUTOS
          =================================================== */}

          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-3
              gap-3
              sm:gap-4
              md:gap-6
            "
          >
            {produtos.map((prod) => (
              <div
                key={prod.id}
                className="
                  group
                  bg-white
                  border
                  border-zenix-rose/15

                  rounded-[20px]
                  sm:rounded-[24px]
                  md:rounded-3xl

                  overflow-hidden

                  hover:border-zenix-rose/40
                  hover:shadow-xl
                  hover:-translate-y-1

                  transition-all
                  duration-300

                  flex
                  flex-col
                "
              >
                {/* ==================================================
                    IMAGEM
                =================================================== */}

                <div
                  className="
                    relative
                    aspect-square
                    bg-zenix-blush/40
                    overflow-hidden
                  "
                >
                  {/* Destaque */}

                  {prod.destaque && (
                    <div
                      className="
                        absolute
                        top-2.5
                        left-2.5
                        sm:top-3
                        sm:left-3
                        md:top-4
                        md:left-4

                        z-10

                        bg-zenix-rose
                        text-white

                        text-[7px]
                        sm:text-[8px]
                        md:text-[9px]

                        font-semibold

                        tracking-[0.12em]
                        sm:tracking-[0.15em]
                        md:tracking-[0.18em]

                        uppercase

                        px-2
                        sm:px-2.5
                        md:px-3

                        py-1
                        sm:py-1.5

                        rounded-full

                        flex
                        items-center
                        gap-1

                        shadow-md
                      "
                    >
                      <SparklesIcon
                        className="
                          w-2.5
                          h-2.5
                          sm:w-3
                          sm:h-3
                          stroke-[1.5]
                        "
                      />

                      Destaque
                    </div>
                  )}

                  <img
                    src={prod.imagem}
                    alt={prod.nome}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />
                </div>

                {/* ==================================================
                    INFORMAÇÕES
                =================================================== */}

                <div
                  className="
                    p-3.5
                    sm:p-5
                    md:p-6

                    flex
                    flex-col
                    flex-1
                  "
                >
                  {/* Categoria */}

                  <span
                    className="
                      text-[7px]
                      sm:text-[8px]
                      md:text-[10px]

                      text-zenix-rose-dark

                      font-semibold

                      tracking-[0.13em]
                      sm:tracking-[0.16em]
                      md:tracking-[0.20em]

                      uppercase

                      mb-1.5
                      sm:mb-2
                    "
                  >
                    {nomeCategoria(prod.categoria)}
                  </span>

                  {/* Nome */}

                  <h3
                    className="
                      text-[14px]
                      sm:text-[17px]
                      md:text-[20px]

                      text-zenix-ink

                      font-light

                      tracking-[-0.025em]

                      leading-[1.15]

                      mb-2
                      sm:mb-3
                    "
                  >
                    {prod.nome}
                  </h3>

                  {/* Descrição */}

                  <p
                    className="
                      text-[10px]
                      sm:text-[12px]
                      md:text-[14px]

                      text-zenix-warm-gray

                      font-light

                      leading-[1.5]
                      sm:leading-[1.6]

                      mb-4
                      sm:mb-5
                      md:mb-6

                      flex-1
                    "
                  >
                    {prod.descricaoCurta}
                  </p>

                  {/* ==================================================
                      BOTÕES
                  =================================================== */}

                  <div
                    className="
                      flex
                      items-stretch
                      gap-1.5
                      sm:gap-2
                    "
                  >
                    {/* Ver detalhes */}

                    <button
                      onClick={() => setProdutoAberto(prod)}
                      className="
                        flex-1

                        inline-flex
                        items-center
                        justify-center

                        border
                        border-zenix-ink/15

                        hover:border-zenix-rose

                        text-zenix-ink
                        hover:text-zenix-rose-dark

                        font-semibold

                        tracking-[0.08em]
                        sm:tracking-[0.12em]
                        md:tracking-[0.16em]

                        uppercase

                        text-[7px]
                        sm:text-[8px]
                        md:text-[10px]

                        px-2
                        sm:px-3
                        md:px-4

                        py-2.5
                        sm:py-3

                        rounded-full

                        transition
                      "
                    >
                      Ver detalhes
                    </button>

                    {/* WhatsApp */}

                    <a
                      href={links.produto(prod.nome)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        shrink-0

                        inline-flex
                        items-center
                        justify-center

                        bg-zenix-rose
                        hover:bg-zenix-rose-dark

                        text-white

                        w-9
                        sm:w-10
                        md:w-11

                        rounded-full

                        transition
                      "
                      aria-label="Falar no WhatsApp"
                    >
                      <ArrowRightIcon
                        className="
                          w-3.5
                          h-3.5
                          sm:w-4
                          sm:h-4
                          stroke-[1.5]
                        "
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          MODAL
      =================================================== */}

      {produtoAberto && (
        <div
          className="
            fixed
            inset-0
            z-100

            flex
            items-center
            justify-center

            p-4

            bg-zenix-ink/60

            backdrop-blur-sm
          "
          onClick={() => setProdutoAberto(null)}
        >
          <div
            className="
              relative

              bg-zenix-cream

              rounded-3xl

              max-w-4xl
              w-full

              max-h-[90vh]

              overflow-y-auto

              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* ==================================================
                FECHAR
            =================================================== */}

            <button
              onClick={() => setProdutoAberto(null)}
              className="
                absolute
                top-4
                right-4
                z-10

                w-10
                h-10

                rounded-full

                bg-white
                hover:bg-zenix-blush

                border
                border-zenix-rose/20

                flex
                items-center
                justify-center

                text-zenix-ink

                transition
              "
              aria-label="Fechar"
            >
              <XMarkIcon
                className="
                  w-5
                  h-5
                  stroke-[1.4]
                "
              />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* ==================================================
                  IMAGEM DO MODAL
              =================================================== */}

              <div
                className="
                  aspect-square
                  bg-zenix-blush/40
                  overflow-hidden
                "
              >
                <img
                  src={produtoAberto.imagem}
                  alt={produtoAberto.nome}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              </div>

              {/* ==================================================
                  CONTEÚDO DO MODAL
              =================================================== */}

              <div
                className="
                  p-7
                  md:p-10

                  flex
                  flex-col
                "
              >
                {/* Categoria */}

                <span
                  className="
                    text-[9px]
                    md:text-[10px]

                    text-zenix-rose-dark

                    font-semibold

                    tracking-[0.20em]

                    uppercase

                    mb-3
                  "
                >
                  {nomeCategoria(produtoAberto.categoria)}
                </span>

                {/* Nome */}

                <h3
                  className="
                    text-[25px]
                    md:text-[32px]

                    text-zenix-ink

                    font-light

                    tracking-[-0.035em]

                    leading-[1.08]

                    mb-4
                  "
                >
                  {produtoAberto.nome}
                </h3>

                {/* Descrição */}

                <p
                  className="
                    text-[13px]
                    md:text-[15px]

                    text-zenix-warm-gray

                    font-light

                    leading-[1.7]

                    mb-8

                    flex-1
                  "
                >
                  {produtoAberto.descricaoLonga}
                </p>

                {/* CTA */}

                <a
                  href={links.produto(produtoAberto.nome)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center

                    gap-3

                    bg-zenix-rose
                    hover:bg-zenix-rose-dark

                    text-white

                    font-semibold

                    tracking-[0.16em]

                    uppercase

                    text-[10px]
                    md:text-[11px]

                    px-6
                    py-3.5

                    rounded-full

                    transition
                  "
                >
                  Tenho interesse

                  <ArrowRightIcon
                    className="
                      w-4
                      h-4
                      stroke-[1.5]
                    "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}