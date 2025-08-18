import Autores from "../../components/Autores";
import Galeria from "../../components/Galeria";
import Navbar from "../../components/NavBar";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-emerald-50 via-green-100 to-emerald-200">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Menos Desperdício, Mais Sustentabilidade
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Produção de Bioplástico a partir de batatas com baixo valor comercial
        </p>
      </section>


      {/* Introdução */}
      <section id="introducao" className="min-h-screen p-6 md:p-12 bg-green-50 scroll-mt-10">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Introdução</h2>
        <p className="text-gray-700 mb-8 text-l md:text-xl text-justify leading-relaxed">
          Você já parou para pensar na quantidade de plástico
          que usamos todos os dias? Das sacolas que trazem
          nossas compras às embalagens de alimentos e garrafas
          de refrigerante, o plástico se tornou parte essencial da
          nossa vida moderna. No entanto, o que acontece com
          todo esse material depois que o usamos? A triste verdade
          é que a maioria dos plásticos leva centenas, ou até
          milhares, de anos para se decompor na natureza,
          acumulando-se em nossos solos, rios e oceanos, causando
          sérios danos ao meio ambiente e à vida selvagem. Essa
          persistência é um dos grandes desafios da nossa geração,
          exigindo soluções inovadoras e sustentáveis (NEMITZ,
          2025).   
          É aqui que entram os bioplásticos! Diferente dos
          plásticos comuns, que vêm do petróleo (um recurso não
          renovável), os bioplásticos são feitos de materiais
          encontrados na natureza, como o amido de plantas. Isso
          significa que eles são biodegradáveis, ou seja, se
          decompõem muito mais rápido no ambiente,
          transformando-se em elementos naturais que não
          agridem o planeta.
        </p>

        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-3xl h-60 sm:h-90 md:h-[70vh] ">
            <Image
              src="/bioplastico.png"
              alt="Bioplástico"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Autores */}
      <section id="autores" className="min-h-screen p-10 bg-white">
        <Autores/>
      </section>

      <section id="projeto" className="min-h-screen p-6 md:p-12 bg-white scroll-mt-10">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Andamento do projeto</h2>
        <p className="text-gray-700 mb-8 text-l md:text-xl text-justify leading-relaxed">
            O projeto “Menos Desperdício, Mais Sustentabilidade: Produção de Bioplástico a partir de Batatas de Baixo Valor Comercial para Conservação de Frutas”, desenvolvido por alunos da Escola Estadual de Educação Profissional Luiz Gonzaga Fonseca Mota, em Amontada-CE, integra o Ceará Científico 2025.

O plástico é amplamente utilizado na sociedade moderna por sua durabilidade, baixo custo e versatilidade, especialmente em embalagens de alimentos, setor em que seu uso cresce cerca de 5% ao ano. No entanto, os plásticos convencionais causam impactos ambientais e riscos à saúde humana, devido à sua origem fóssil, lenta degradação e liberação de micropoluentes.

Como alternativa, o projeto propõe a produção de bioplástico biodegradável a partir do amido extraído de batatas fora do padrão comercial (murchas, brocadas ou esverdeadas), aproveitando seu alto teor de amido mesmo em condições de descarte. A proposta visa reduzir o desperdício de alimentos, promover a economia circular e incentivar o reaproveitamento de resíduos alimentares para fins não alimentares.
        </p>

        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-3xl h-50 sm:h-[70vh] ">
            <Image
              src="/grupo.jpg" // coloque sua imagem na pasta /public/imagens
              alt="Bioplástico"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      
      {/* Vídeo */}
      <section id="video" className="md:min-h-screen p-12 bg-green-50 scroll-mt-10">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Vídeo</h2>
        <div className="aspect-video max-w-3xl mx-auto">
          <iframe
            className="w-full h-full rounded-xl shadow"
            src="https://www.youtube.com/embed/wCUtarVlixw?si=jc6su_kBf6xatuqN"
            title="Vídeo do projeto"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="min-h-screen bg-white scroll-mt-16">
        <Galeria/>
      </section>

      <div className="md:flex">
      
        {/* Guia */}
        <section id="guia" className="p-6 bg-green-50 text-center md:w-[50vw]">
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Guia</h2>
          <p className="text-gray-700 mb-4 text-justify leading-relaxed">
            Este guia foi criado para apresentar de forma simples e acessível os principais conceitos sobre os bioplásticos, destacando sua importância como alternativa sustentável ao plástico comum. Aqui você encontrará explicações, exemplos práticos e informações úteis que mostram como a ciência pode ajudar a construir um futuro mais equilibrado com o meio ambiente.
          </p>
          <a href="/Guia.pdf" target="_blank" className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition">
            Abrir PDF em outra aba
          </a>

        </section>

        {/* Documentação */}
        <section id="documentacao" className="p-6 bg-green-50 text-center md:w-[50vw]">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Documentação</h2>
          <p className="text-gray-700">Aqui entram as referências e detalhes técnicos.</p>
          <h3 className="text-xl font-bold text-green-700 my-6 ">Artigo</h3>
          <a href="/artigo.pdf" target="_blank" className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition">
            Abrir PDF em outra aba
          </a>
          <h3 className="text-xl font-bold text-green-700 my-6 ">Anexos</h3>
          <a href="/Anexos.pdf" target="_blank" className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition">
            Abrir PDF em outra aba
          </a>

        </section>
      </div>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-4">
        <p>
        Site desenvolvido por <strong>Joziberto Alves</strong> © {new Date().getFullYear()}
      </p>
      </footer>
    </div>
  );
}
