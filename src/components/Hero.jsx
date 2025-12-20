import { FaWhatsapp } from "react-icons/fa";
import { PHONE_NUMBER } from "../App.jsx";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
    >
      {/* LOGO FONDO */}
      <img
        src="/logomm.svg"
        alt=""
        className="
        absolute pointer-events-none
        opacity-25
        w-[120vw] max-w-none
        md:w-[90vw] md:max-w-170

        top-1/2
        left-1/2 md:left-[75%]
        -translate-x-1/2 -translate-y-1/2"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-10">
          {/* TEXTO */}
          <div className="max-w-xl flex flex-col items-center md:items-start">
            {/* LOGO SUPERIOR */}
            <img
              src="/logomm.svg"
              alt="Maestra Miriam"
              className="
              w-40 sm:w-100 md:w-100
              mb-8
              opacity-95
              drop-shadow-[0_0_25px_rgba(220,38,38,0.55)]
              animate-[fadeBlurIn_1s_ease-out_forwards]
              "
            />

            {/* TÍTULO */}
            <h1
              className="
      text-3xl sm:text-4xl md:text-6xl
      font-bold leading-tight
      tracking-wide md:tracking-wider
      bg-linear-to-r from-red-700 via-red-500 to-red-700
      bg-clip-text text-transparent
    "
            >
              Bienvenido al
              <br />
              Mundo Místico
            </h1>

            {/* DESCRIPCIÓN */}
            <h2 className="mt-5 text-base sm:text-lg md:text-xl text-red-200/85 leading-relaxed">
              🔮 La Maestra Miriam te ayudará a salir del estancamiento, lograr
              ese amor imposible y conseguir la riqueza que tanto mereces y
              deseas. ✨ Con más de 10 años de experiencia, guía caminos
              espirituales hacia el amor ❤️, la prosperidad 💰 y la protección
              🧿. 📿 Consultas totalmente GRATIS; solo pagas los materiales. ✍️
              Escríbenos hoy y da el primer paso hacia el cambio.
            </h2>
          </div>

          {/* BOTONES */}
          <div className="w-full max-w-sm flex flex-col gap-4">
            <a
              href={`https://wa.me/${PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-3
                px-6 py-4
                text-xs sm:text-sm font-bold uppercase
                tracking-[0.15em] sm:tracking-[0.25em]
                text-black
                bg-green-600 hover:bg-green-500
                transition-all duration-300
                hover:scale-105
                shadow-[0_0_25px_rgba(34,197,94,0.45)]
              "
            >
              <FaWhatsapp className="text-lg" />
              Consulta Totalmente Gratuita
            </a>

            <a
              href="#servicios"
              className="
                text-center
                bg-linear-to-r from-red-900 to-red-700
                px-6 py-4
                text-xs sm:text-sm font-bold uppercase
                tracking-[0.2em]
                border border-red-700
                shadow-xl
                transition hover:scale-105
              "
            >
              Explorar Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
