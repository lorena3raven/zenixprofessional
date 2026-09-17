import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { links } from '../utils/whatsapp';

const navegacao = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Linhas', href: '#categorias' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-zenix-rose via-zenix-mauve to-zenix-rose-dark shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center shrink-0">
          <img
            src="/logo-zenix.png"
            alt="ZENIX Professional"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </a>

        {/* Navegação desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-xs font-medium tracking-[0.2em] uppercase text-white/90 hover:text-white transition group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href={links.parceiro}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center bg-white text-zenix-rose-dark text-xs font-semibold tracking-[0.15em] uppercase px-6 py-3 rounded-full hover:bg-zenix-cream transition shadow-sm"
        >
          Entre em contato
        </a>

        {/* Botão menu mobile */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="lg:hidden text-white p-2"
          aria-label="Menu"
        >
          {menuAberto ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {menuAberto && (
        <div className="lg:hidden bg-linear-to-b from-zenix-rose to-zenix-rose-dark px-6 py-6 border-t border-white/20">
          <nav className="flex flex-col gap-4">
            {navegacao.map((item) => (
              <a
                key={item.href} 
                href={item.href}
                onClick={() => setMenuAberto(false)}
                className="text-sm font-medium tracking-[0.15em] uppercase text-white/90 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}

            <a
              href={links.parceiro}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-white text-zenix-rose-dark text-sm font-semibold tracking-[0.15em] uppercase px-5 py-3 rounded-full text-center"
            >
              Entre em contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}