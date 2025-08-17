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
    { src: "/galeria01.jpg", alt: "galeria" },
    { src: "/galeria02.jpg", alt: "galeria" },
    { src: "/galeria03.jpg", alt: "galeria" },
    { src: "/galeria04.jpg", alt: "galeria" },
    { src: "/galeria05.jpg", alt: "galeria" },
    { src: "/galeria06.jpg", alt: "galeria" },
    { src: "/galeria07.jpg", alt: "galeria" },
    { src: "/galeria08.jpg", alt: "galeria" },
    { src: "/galeria09.jpg", alt: "galeria" },
    { src: "/galeria10.jpg", alt: "galeria" },
    { src: "/galeria11.jpg", alt: "galeria" },
    { src: "/galeria12.jpg", alt: "galeria" },    
    { src: "/galeria13.jpg", alt: "galeria" },    
    { src: "/galeria14.jpg", alt: "galeria" },    
    { src: "/galeria15.jpg", alt: "galeria" },    
    { src: "/galeria16.jpg", alt: "galeria" },    
    { src: "/galeria17.jpg", alt: "galeria" },    
    { src: "/galeria18.jpg", alt: "galeria" },    
    { src: "/galeria19.jpg", alt: "galeria" },    
    { src: "/galeria20.jpg", alt: "galeria" },    
    { src: "/galeria21.jpg", alt: "galeria" },    
    { src: "/galeria22.jpg", alt: "galeria" },    
    { src: "/galeria23.jpg", alt: "galeria" },
  ];

  return (
    <section id="galeria" className="min-h-screen p-12 bg-white">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Galeria do Projeto</h2>
      <p className="text-gray-600 mb-8 text-center">
        Confira algumas fotos registradas durante a produção do nosso trabalho.
      </p>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="max-w-xs md:max-w-[30vw] mx-auto rounded-xl shadow-lg"
      >
        {imagens.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={500}
              className="w-full h-[75vh] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
