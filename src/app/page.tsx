import Galeria from "../../components/Galeria";
import Navbar from "../../components/NavBar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-green-100 to-white">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Projeto Bioplástico de Batata</h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Uma alternativa sustentável para redução do uso de plásticos convencionais.
        </p>
      </section>

      {/* Projeto */}
      <section id="projeto" className="min-h-screen p-12 bg-white">
        <h2 className="text-3xl font-bold text-green-700 mb-6">O Projeto</h2>
        <p className="text-gray-700 max-w-3xl">
          Aqui você coloca a explicação do projeto: objetivos, importância, benefícios...
        </p>
      </section>

      {/* Vídeo */}
      <section id="video" className="min-h-screen p-12 bg-green-50">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Vídeo</h2>
        <div className="aspect-video max-w-3xl">
          <iframe
            className="w-full h-full rounded-xl shadow"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Vídeo do projeto"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <Galeria/>

      {/* Guia */}
      <section id="guia" className="min-h-screen p-12 bg-white">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Guia</h2>
        <p className="text-gray-700">Aqui você coloca instruções e guia de uso.</p>
      </section>

      {/* Documentação */}
      <section id="documentacao" className="min-h-screen p-12 bg-green-50">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Documentação</h2>
        <p className="text-gray-700">Aqui você insere os detalhes técnicos, links para PDF etc.</p>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-4">
        <p>© 2025 Ceará Científico - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
