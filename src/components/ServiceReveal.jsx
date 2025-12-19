import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";
import { FaWhatsapp } from "react-icons/fa";
import { PHONE_NUMBER } from "../App.jsx";

export default function ServiceReveal({ service, reverse }) {
  const { ref, visible } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`
        grid md:grid-cols-2 gap-20 items-center
        mb-16 md:mb-24
        transition-all duration-1000 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
      `}
    >
      {/* IMAGEN */}
      <div className={`${reverse ? "md:order-2" : "md:order-1"}`}>
        <div className="border border-red-700 p-6 md:p-8">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-95 object-cover"
          />
        </div>
      </div>

      {/* TEXTO */}
      <div className={`${reverse ? "md:order-1" : "md:order-2"}`}>
        <h3 className="font-title text-4xl md:text-5xl text-red-600 mb-8">
          {service.title}
        </h3>

        {/* DESCRIPCIÓN – aparece sola */}
        <p
          className={`
            font-body text-red-200/90 leading-relaxed
            transition-all duration-1000 delay-200
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          {service.description}
        </p>

        {/* LÍNEA */}
        <div className="h-px w-full bg-red-700 my-8" />

        {/* BOTÓN */}
        <button
          onClick={() => {
            const message = encodeURIComponent(
              `Hola Maestra Miriam, ${service.cta}. Deseo una consulta GRATIS y más información. Muchas gracias.`
            );
            window.open(
              `https://wa.me/${PHONE_NUMBER}?text=${message}`,
              "_blank",
              "noopener,noreferrer"
            );
          }}
          className="
            flex items-center gap-4
            border border-red-700 px-10 py-4
            uppercase tracking-[0.25em] text-sm
            hover:bg-red-900/30
            transition-all duration-300
            hover:scale-[1.03]
          "
        >
          <FaWhatsapp className="text-green-500 text-lg" />
          {service.cta} · Consulta Gratis
        </button>
      </div>
    </div>
  );
}

