import Navbar from "../../components/NavBar";

export default function HomePage() {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-green-100 to-white">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Menos Desperdício, Mais Sustentabilidade
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Produção de Bioplástico a partir de resíduos de baixo valor comercial
        </p>
      </section>

      {/* Autores */}
      <section id="autores" className="min-h-screen p-12 bg-white">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Autores</h2>
        <p className="text-gray-700">Aqui entra a apresentação da equipe e professora orientadora.</p>
      </section>

      {/* Introdução */}
      <section id="introducao" className="min-h-screen p-12 bg-green-50">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Introdução</h2>
        <p className="text-gray-700">
          Resumo sobre o problema do plástico convencional e a importância dos bioplásticos.
        </p>
      </section>

      {/* Projeto */}
      <section id="projeto" className="min-h-screen p-12 bg-white">
        <h2 className="text-3xl font-bold text-green-700 mb-6">O Projeto</h2>
        <p className="text-gray-700">Objetivo geral e justificativa do projeto.</p>
      </section>

      {/* Produção */}
      <section id="producao" className="min-h-screen p-12 bg-green-50">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Produção</h2>
        <p className="text-gray-700">Aqui podemos explicar as diferentes formas de síntese (arroz, café, soja etc.).</p>
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
            src="https://www.youtube.com/embed/VIDEO_ID"
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
      </footer>
    </div>
  );
}
