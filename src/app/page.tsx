import Autores from "../../components/Autores";
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
          Produção de Bioplástico a partir de resíduos de batata
        </p>
      </section>

      {/* Autores */}
      <section id="autores" className="min-h-screen p-12 bg-white">
        <Autores/>
      </section>

      {/* Introdução */}
      <section id="introducao" className="min-h-screen p-12 bg-green-50">
  <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Introdução</h2>
  <p className="text-gray-700 mb-8 text-xl text-center">
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
    <div className="relative w-full max-w-4xl h-64 sm:h-96">
      <Image
        src="/bioplatico.png" // coloque sua imagem na pasta /public/imagens
        alt="Bioplástico"
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>
      {/* Galeria */}
      <section id="galeria" className="min-h-screen p-12 bg-white">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Galeria</h2>
        <p className="text-gray-700">Aqui vai entrar o carrossel de fotos do processo.</p>
      </section>

      {/* Vídeo */}
      <section id="video" className="min-h-screen p-12 bg-green-50">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Vídeo</h2>
        <div className="aspect-video max-w-3xl mx-auto">
          <iframe
            className="w-full h-full rounded-xl shadow"
            src="https://www.youtube.com/embed/https://youtu.be/wCUtarVlixw?si=jc6su_kBf6xatuqN"
            title="Vídeo do projeto"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Guia */}
      <section id="guia" className="min-h-screen p-12 bg-white">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Guia</h2>
        <a
          href="/Guia.pdf"
          download
          className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition"
        >
          📥 Baixar Guia Completo
        </a>
      </section>

      {/* Documentação */}
      <section id="documentacao" className="min-h-screen p-12 bg-green-50">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Documentação</h2>
        <p className="text-gray-700">Aqui entram as referências e detalhes técnicos.</p>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-4">
        <p>© 2025 Ceará Científico - Todos os direitos reservados</p>
        <p>made by Joziberto Alves</p>
      </footer>
    </div>
  );
}
