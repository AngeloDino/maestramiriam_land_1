import { Flame } from "lucide-react";
import { handleWhatsAppClick } from "../hooks/handleWhatsapp.js";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <section
        id="contacto"
        className="py-24 bg-linear-to-b from-red-950/30 to-black border-t border-red-900/30"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-10">
            {/* ICONO */}
            <Flame className="w-16 h-16 text-red-700 mx-auto animate-pulse" />

            {/* TÍTULO */}
            <h2 className="text-4xl md:text-6xl font-title tracking-wide text-red-600">
              Agenda Tu Consulta
            </h2>

            {/* TEXTO */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-sans">
              No permitas que las energías negativas o un destino adverso
              controlen tu vida. Estoy aquí para ayudarte a encontrar el camino
              hacia la luz, el amor y la prosperidad.
            </p>

            {/* CTA */}
            <div className="pt-10 flex justify-center">
              <button
                onClick={() => handleWhatsAppClick("Consulta Urgente")}
                className="
                  relative flex items-center gap-3
                  px-12 py-5
                  font-sans font-bold uppercase tracking-[0.25em]
                  text-lg text-black
                  bg-green-600
                  border border-green-500
                  shadow-[0_0_35px_rgba(34,197,94,0.35)]
                  transition-all duration-300
                  hover:scale-105 hover:shadow-[0_0_45px_rgba(34,197,94,0.55)]
                  animate-[float_5s_ease-in-out_infinite]
                "
              >
                <FaWhatsapp className="w-6 h-6" />
                Consulta por WhatsApp
              </button>
            </div>
            {/* TELÉFONO */}
            <p
              className="
  mt-6
  text-3xl md:text-4xl
  font-title
  tracking-widest
  text-green-500/90
"
            >
              +57 314 569 0393
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER FINAL */}
      <footer className="py-8 text-center border-t border-red-900/30 bg-black">
        <p className="text-red-300/60 text-sm font-sans tracking-wide">
          © 2025 Maestra Miriam · Magia Blanca y Brujería
        </p>
      </footer>
    </>
  );
}
