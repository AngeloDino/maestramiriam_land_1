import { FaWhatsapp } from "react-icons/fa";
import { PHONE_NUMBER } from "../App.jsx";

export default function WhatsAppFloat() {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hola Maestra Miriam, deseo una consulta espiritual."
    );

    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      onClick={handleClick}
      aria-label="WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        bg-linear-to-r from-green-600 to-green-500
        p-4 rounded-full
        border border-green-400/50
        shadow-[0_0_30px_rgba(34,197,94,0.45)]
        transition-all duration-300
        hover:scale-110
        hover:shadow-[0_0_45px_rgba(34,197,94,0.7)]
        animate-[float_5s_ease-in-out_infinite]
      "
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
    </button>
  );
}
