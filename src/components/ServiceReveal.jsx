import { useState } from "react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";
import { FaWhatsapp } from "react-icons/fa";
import { PHONE_NUMBER } from "../App.jsx";

export default function ServiceReveal({ service, reverse }) {
  const [revealed, setRevealed] = useState(false);
  const { ref, visible } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-24 items-center mb-48
      transition-all duration-1000 ease-out
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
    >
      {/* IMAGEN */}
      <div className={`${reverse ? "md:order-2" : "md:order-1"}`}>
        <div className="border border-red-700 p-8">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-100 object-cover"
          />
        </div>
      </div>

      {/* TEXTO */}
      <div className={`${reverse ? "md:order-1" : "md:order-2"}`}>
        <h3 className="font-title text-4xl md:text-5xl text-red-600 mb-10">
          {service.title}
        </h3>

        {/* REVELADO */}
        <div
          className="relative overflow-hidden cursor-pointer"
          onMouseEnter={() => setRevealed(true)}
          onClick={() => setRevealed(true)}
        >
          {/* TEXTO */}
          <p
            className={`font-body text-red-200/90 leading-relaxed
            transition-opacity duration-700
            ${revealed ? "opacity-100" : "opacity-0"}`}
          >
            {service.description}
          </p>

          {/* VELO MÁS SUAVE */}
          <div
            className={`absolute inset-0 bg-black/80 backdrop-blur-sm
            transition-transform duration-1200 ease-in-out
            ${revealed ? "translate-x-full" : "translate-x-0"}`}
          >
            <div className="flex items-center justify-center h-full">
              <span className="text-red-600 tracking-[0.3em] uppercase text-xs">
                Desvelar
              </span>
            </div>
          </div>
        </div>

        {/* LÍNEA */}
        <div className="h-px w-full bg-red-700 my-10" />

        {/* BOTÓN GÓTICO FINO */}
        <button
          onClick={() => {
            const message = encodeURIComponent(
              `Hola Maestra Miriam, ${service.cta}, Necesito una consulta urgente, Agradecería más información, Muchas Gracias.`
            );
            window.open(
              `https://wa.me/${PHONE_NUMBER}?text=${message}`,
              "_blank"
            );
          }}
          className="flex items-center gap-4
    border border-red-700 px-10 py-4
    uppercase tracking-[0.25em] text-sm
    hover:bg-red-900/30
    transition-all duration-300"
        >
          <FaWhatsapp className="text-green-500 text-lg" />
          {service.cta}
        </button>
      </div>
    </div>
  );
}
