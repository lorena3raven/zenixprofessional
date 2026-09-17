import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Destaques } from './components/Destaques';
import { Sobre } from './components/Sobre';
import { Categorias } from './components/Categorias';
import { Produtos } from './components/Produtos';
import { Diferenciais } from './components/Diferenciais';
import { Depoimentos } from './components/Depoimentos';
import { Cadastro } from './components/Cadastro';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zenix-cream text-zenix-ink">
      <Header />
      <main>
        <Hero />
        <Destaques />
        <Sobre />
        <Categorias />
        <Produtos />
        <Diferenciais />
        <Depoimentos />
        <Cadastro />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}