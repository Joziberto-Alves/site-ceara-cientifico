"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

// Importar estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Galeria() {
  const imagens = [
    { src: "/images/foto1.jpg", alt: "Preparação dos materiais" },
    { src: "/images/foto2.jpg", alt: "Produção do bioplástico" },
    { src: "/images/foto3.jpg", alt: "Equipe trabalhando" },
    { src: "/images/foto4.jpg", alt: "Teste do produto final" },
  ];

  return (
    <section id="galeria" className="min-h-screen p-12 bg-white">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Galeria do Projeto</h2>
      <p className="text-gray-600 mb-8 text-center">
        Confira algumas fotos registradas durante a produção do nosso trabalho.
      </p>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="max-w-4xl mx-auto rounded-xl shadow-lg"
      >
        {imagens.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={500}
              className="w-full h-auto object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
