import Image from "next/image";

// components/Autores.tsx
type Autor = {
  nome: string;
  cargo: string;
  foto: string; // caminho da imagem
};

const autores: Autor[] = [
    {
    nome: "Angélica Brito",
    cargo: "Orientadora",
    foto: "/angelica.jpg",
  },
  {
    nome: "Joziberto Alves",
    cargo: "Apresentador e Desenvolvedor",
    foto: "/FotoPerfil.jpg",
  },
  {
    nome: "Thafiny de Aguiar",
    cargo: "Apresentadora",
    foto: "/thafiny.jpg",
  },
  {
    nome: "Patrícia Santos",
    cargo: "Pesquisadora Científica",
    foto: "/patricia.jpg",
  },
  {
    nome: "Taís Teixeira",
    cargo: "Pesquisadora Científica",
    foto: "/tais.png",
  },
    {
    nome: "Ellen Soraya",
    cargo: "Pesquisadora Científica",
    foto: "/elen.png",
  },
];

export default function Autores() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-8">Nossos Integrantes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {autores.map((autor) => (
            <div key={autor.nome} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Image
                    src={autor.foto}
                    alt={autor.nome}
                    width={128} // largura fixa
                    height={128} // altura fixa
                    className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
                />
              <h3 className="text-xl text-gray-400 font-semibold">{autor.nome}</h3>
              <p className="text-gray-500">{autor.cargo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
