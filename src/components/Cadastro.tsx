import { useRef, useState } from 'react';
import {
  UserIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

import { montarMensagemCadastro } from '../utils/whatsapp';

type Aba = 'profissional' | 'consumidor';

/*
  Produtos disponíveis para consumidor final.
  Conforme solicitado, somente a linha Home Care.
*/
const PRODUTOS_HOME_CARE = [
  'LongMax',
  'Hamber Glow',
  'Liso Absoluto',
  'Banana e Mel',
];

export function Cadastro() {
  const sectionRef = useRef<HTMLElement>(null);

  const [pos, setPos] = useState({
    x: 50,
    y: 50,
  });

  const [aba, setAba] = useState<Aba>('profissional');

  const [prof, setProf] = useState({
    nome: '',
    salao: '',
    cidade: '',
    endereco: '',
    whatsapp: '',
    email: '',
    observacoes: '',
  });

  const [cons, setCons] = useState({
    nome: '',
    cidade: '',
    bairro: '',
    cep: '',
    telefone: '',
  });

  const [produtosSelecionados, setProdutosSelecionados] = useState<string[]>([]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPos({ x, y });
  }

  function toggleProduto(nome: string) {
    setProdutosSelecionados((atual) =>
      atual.includes(nome)
        ? atual.filter((p) => p !== nome)
        : [...atual, nome]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const link =
      aba === 'profissional'
        ? montarMensagemCadastro(
            'Solicitação de Visita — Cabeleireira/Revendedora',
            {
              'Nome completo': prof.nome,
              'Salão/Empresa': prof.salao,
              'Cidade/Estado': prof.cidade,
              Endereço: prof.endereco,
              WhatsApp: prof.whatsapp,
              'E-mail': prof.email,
              Observações: prof.observacoes,
            }
          )
        : montarMensagemCadastro(
            'Pedido — Uso Próprio - Encontrar Revendedora',
            {
              Nome: cons.nome,
              Cidade: cons.cidade,
              Bairro: cons.bairro,
              CEP: cons.cep,
              Telefone: cons.telefone,
            },
            produtosSelecionados
          );

    window.open(link, '_blank');
  }

  const inputClass = `
    w-full
    bg-[#FBF8F7]
    border
    border-zenix-rose/15
    rounded-xl
    px-4
    py-3
    text-[13px]
    md:text-[14px]
    text-zenix-ink
    font-light
    placeholder:text-zenix-warm-gray/45
    focus:outline-none
    focus:bg-white
    focus:border-zenix-rose/60
    focus:ring-2
    focus:ring-zenix-rose/10
    transition-all
    duration-300
  `;

  const labelClass = `
    block
    text-[9px]
    md:text-[10px]
    font-semibold
    text-zenix-warm-gray
    uppercase
    tracking-[0.18em]
    mb-2
  `;

  return (
    <section
      id="cadastro"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="
        relative
        py-16
        sm:py-20
        lg:py-24
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

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-[0.8fr_1.2fr]
          gap-10
          lg:gap-12
          xl:gap-16
          items-center
        "
      >
        {/* LADO ESQUERDO */}
        <div
          className="
            text-center
            lg:text-left
            max-w-xl
            mx-auto
            lg:mx-0
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
            Cadastro
          </span>

          <h2
            className="
              text-[34px]
              sm:text-[40px]
              lg:text-[52px]
              xl:text-[56px]
              text-white
              font-light
              tracking-[-0.045em]
              leading-[1.03]
              mb-5
              drop-shadow-lg
            "
          >
            Vamos
            <br className="hidden lg:block" /> conversar?
          </h2>

          <p
            className="
              text-white/90
              text-[13px]
              sm:text-[14px]
              md:text-[15px]
              font-light
              leading-[1.7]
              max-w-[500px]
              mx-auto
              lg:mx-0
              drop-shadow-md
            "
          >
            Escolha o tipo de atendimento e envie seus dados. Nossa equipe entra
            em contato para apresentar as melhores soluções ZENIX para você.
          </p>

          {/* INFORMAÇÕES EXTRAS */}
          <div
            className="
              hidden
              lg:flex
              flex-col
              gap-5
              mt-9
              pt-8
              border-t
              border-white/20
            "
          >
            <div className="flex items-start gap-4">
              <div
                className="
                  shrink-0
                  w-10
                  h-10
                  rounded-xl
                  bg-white/12
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  text-white
                "
              >
                <SparklesIcon className="w-[18px] h-[18px] stroke-[1.4]" />
              </div>

              <div>
                <h3
                  className="
                    text-white
                    text-[15px]
                    font-light
                    tracking-[-0.02em]
                    mb-1
                  "
                >
                  Atendimento profissional
                </h3>

                <p
                  className="
                    text-white/70
                    text-[12px]
                    font-light
                    leading-[1.6]
                  "
                >
                  Para cabeleireiras, salões e revendedoras.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="
                  shrink-0
                  w-10
                  h-10
                  rounded-xl
                  bg-white/12
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  text-white
                "
              >
                <ChatBubbleLeftRightIcon className="w-[18px] h-[18px] stroke-[1.4]" />
              </div>

              <div>
                <h3
                  className="
                    text-white
                    text-[15px]
                    font-light
                    tracking-[-0.02em]
                    mb-1
                  "
                >
                  Atendimento próximo
                </h3>

                <p
                  className="
                    text-white/70
                    text-[12px]
                    font-light
                    leading-[1.6]
                  "
                >
                  Envie seus dados e fale diretamente com nossa equipe.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FORMULÁRIO */}
        <div
          className="
            w-full
            bg-white
            border
            border-white/70
            rounded-[22px]
            sm:rounded-[24px]
            lg:rounded-[26px]
            overflow-hidden
            shadow-[0_20px_50px_rgba(90,50,60,0.15)]
          "
        >
          {/* ABAS */}
          <div
            className="
              grid
              grid-cols-2
              border-b
              border-zenix-rose/15
            "
          >
            {/* PROFISSIONAL */}
            <button
              type="button"
              onClick={() => setAba('profissional')}
              className={`
                flex
                items-center
                justify-center
                gap-1.5
                sm:gap-2
                py-4
                md:py-[18px]
                px-2
                sm:px-3
                font-semibold
                text-[8px]
                sm:text-[9px]
                md:text-[10px]
                tracking-[0.10em]
                sm:tracking-[0.13em]
                uppercase
                transition-all
                duration-300
                ${
                  aba === 'profissional'
                    ? `
                      bg-white
                      text-zenix-rose-dark
                      border-b-2
                      border-zenix-rose
                    `
                    : `
                      bg-[#F8F4F2]
                      text-zenix-warm-gray
                      border-b-2
                      border-transparent
                      hover:text-zenix-rose-dark
                    `
                }
              `}
            >
              <UserIcon className="w-4 h-4 shrink-0 stroke-[1.4]" />

              <span>Cabeleireira / Revendedora</span>
            </button>

            {/* USO PRÓPRIO / ENCONTRAR REVENDEDORA */}
            <button
              type="button"
              onClick={() => setAba('consumidor')}
              className={`
                flex
                items-center
                justify-center
                gap-1.5
                sm:gap-2
                py-4
                md:py-[18px]
                px-2
                sm:px-3
                font-semibold
                text-[7px]
                sm:text-[8px]
                md:text-[9px]
                tracking-[0.07em]
                sm:tracking-[0.10em]
                uppercase
                transition-all
                duration-300
                ${
                  aba === 'consumidor'
                    ? `
                      bg-white
                      text-zenix-rose-dark
                      border-b-2
                      border-zenix-rose
                    `
                    : `
                      bg-[#F8F4F2]
                      text-zenix-warm-gray
                      border-b-2
                      border-transparent
                      hover:text-zenix-rose-dark
                    `
                }
              `}
            >
              <MapPinIcon className="w-4 h-4 shrink-0 stroke-[1.4]" />

              <span>Uso Próprio - Encontrar Revendedora</span>
            </button>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="
              p-5
              sm:p-6
              md:p-7
              lg:p-8
            "
          >
            {aba === 'profissional' ? (
              <>
                <h3
                  className="
                    text-[22px]
                    sm:text-[24px]
                    md:text-[27px]
                    text-zenix-ink
                    font-light
                    tracking-[-0.035em]
                    leading-[1.1]
                    mb-2
                  "
                >
                  Solicitar Visita
                </h3>

                <p
                  className="
                    text-[11px]
                    sm:text-[12px]
                    md:text-[13px]
                    text-zenix-warm-gray
                    font-light
                    leading-[1.6]
                    mb-6
                  "
                >
                  Preencha seus dados para solicitar uma apresentação das
                  linhas ZENIX.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelClass}>Nome completo</label>

                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={prof.nome}
                      onChange={(e) =>
                        setProf({
                          ...prof,
                          nome: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Nome do Salão / Empresa
                    </label>

                    <input
                      type="text"
                      placeholder="Nome do estabelecimento"
                      value={prof.salao}
                      onChange={(e) =>
                        setProf({
                          ...prof,
                          salao: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Cidade / Estado</label>

                    <input
                      type="text"
                      required
                      placeholder="Ex: Imperatriz / MA"
                      value={prof.cidade}
                      onChange={(e) =>
                        setProf({
                          ...prof,
                          cidade: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Nome da rua e número</label>

                    <input
                      type="text"
                      placeholder="Ex: Rua das Flores, 123"
                      value={prof.endereco}
                      onChange={(e) =>
                        setProf({
                          ...prof,
                          endereco: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>WhatsApp</label>

                    <input
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      value={prof.whatsapp}
                      onChange={(e) =>
                        setProf({
                          ...prof,
                          whatsapp: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>E-mail</label>

                    <input
                      type="email"
                      placeholder="seu@email.com"
                      value={prof.email}
                      onChange={(e) =>
                        setProf({
                          ...prof,
                          email: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className={labelClass}>Observações</label>

                  <textarea
                    rows={2}
                    placeholder="Como podemos ajudar?"
                    value={prof.observacoes}
                    onChange={(e) =>
                      setProf({
                        ...prof,
                        observacoes: e.target.value,
                      })
                    }
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </>
            ) : (
              <>
                {/* USO PRÓPRIO */}
                <h3
                  className="
                    text-[22px]
                    sm:text-[24px]
                    md:text-[27px]
                    text-zenix-ink
                    font-light
                    tracking-[-0.035em]
                    leading-[1.1]
                    mb-2
                  "
                >
                  Encontre uma Revendedora
                </h3>

                <p
                  className="
                    text-[11px]
                    sm:text-[12px]
                    md:text-[13px]
                    text-zenix-warm-gray
                    font-light
                    leading-[1.6]
                    mb-6
                  "
                >
                  Informe seus dados e selecione os produtos Home Care
                  desejados. Nossa equipe ajudará você a encontrar uma
                  revendedora ZENIX próxima.
                </p>

                {/* DADOS DO CLIENTE */}
                <div className="grid md:grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className={labelClass}>Nome</label>

                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={cons.nome}
                      onChange={(e) =>
                        setCons({
                          ...cons,
                          nome: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Cidade / Estado</label>

                    <input
                      type="text"
                      required
                      placeholder="Ex: Imperatriz / MA"
                      value={cons.cidade}
                      onChange={(e) =>
                        setCons({
                          ...cons,
                          cidade: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Bairro</label>

                    <input
                      type="text"
                      required
                      placeholder="Seu bairro"
                      value={cons.bairro}
                      onChange={(e) =>
                        setCons({
                          ...cons,
                          bairro: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>CEP</label>

                    <input
                      type="text"
                      required
                      placeholder="00000-000"
                      value={cons.cep}
                      onChange={(e) =>
                        setCons({
                          ...cons,
                          cep: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass}>Telefone / WhatsApp</label>

                    <input
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      value={cons.telefone}
                      onChange={(e) =>
                        setCons({
                          ...cons,
                          telefone: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* HOME CARE */}
                <div className="mb-6">
                  <label className={labelClass}>
                    Produtos Home Care desejados
                  </label>

                  <div
                    className="
                      grid
                      grid-cols-2
                      md:grid-cols-2
                      gap-2.5
                      mt-3
                    "
                  >
                    {PRODUTOS_HOME_CARE.map((nome) => {
                      const ativo = produtosSelecionados.includes(nome);

                      return (
                        <button
                          key={nome}
                          type="button"
                          onClick={() => toggleProduto(nome)}
                          className={`
                            text-[10px]
                            sm:text-[11px]
                            md:text-[12px]
                            font-light
                            px-3
                            py-2.5
                            rounded-xl
                            border
                            transition-all
                            duration-300
                            text-left
                            ${
                              ativo
                                ? `
                                  bg-zenix-rose
                                  text-white
                                  border-zenix-rose
                                  shadow-sm
                                  shadow-zenix-rose/20
                                `
                                : `
                                  bg-[#FBF8F7]
                                  text-zenix-ink
                                  border-zenix-rose/15
                                  hover:bg-white
                                  hover:border-zenix-rose/50
                                `
                            }
                          `}
                        >
                          {nome}
                        </button>
                      );
                    })}
                  </div>

                  <p
                    className="
                      text-[9px]
                      md:text-[10px]
                      text-zenix-warm-gray/70
                      font-light
                      italic
                      mt-3
                    "
                  >
                    {produtosSelecionados.length === 0
                      ? 'Nenhum produto selecionado'
                      : `${produtosSelecionados.length} produto(s) selecionado(s)`}
                  </p>
                </div>
              </>
            )}

            {/* BOTÃO */}
            <button
              type="submit"
              className="
                w-full
                sm:w-auto
                inline-flex
                items-center
                justify-center
                gap-2.5
                bg-zenix-rose
                hover:bg-zenix-rose-dark
                text-white
                font-semibold
                tracking-[0.14em]
                uppercase
                text-[9px]
                md:text-[10px]
                px-6
                md:px-7
                py-3.5
                rounded-full
                transition-all
                duration-300
                shadow-lg
                shadow-zenix-rose/20
                hover:-translate-y-0.5
                hover:shadow-xl
                hover:shadow-zenix-rose/30
              "
            >
              <PaperAirplaneIcon className="w-4 h-4 stroke-[1.5]" />

              {aba === 'profissional'
                ? 'Solicitar Visita via WhatsApp'
                : 'Encontrar Revendedora via WhatsApp'}
            </button>

            <p
              className="
                text-[9px]
                md:text-[10px]
                text-zenix-warm-gray/65
                font-light
                leading-[1.55]
                mt-3
                max-w-xl
              "
            >
              Ao clicar, o WhatsApp abrirá com a mensagem pronta para envio.
              Nenhum dado é armazenado no site.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}