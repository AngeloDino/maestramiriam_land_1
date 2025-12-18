import { FaInstagram } from "react-icons/fa";

const INSTAGRAM_URL = "https://www.instagram.com/maestra.777";

export default function InstagramFloat() {
  const handleClick = () => {
    window.open(
      INSTAGRAM_URL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Instagram"
      className="
        fixed bottom-24 right-6 z-50
        bg-linear-to-r from-pink-600 via-red-500 to-yellow-500
        p-4 rounded-full
        border border-pink-400/40
        shadow-[0_0_30px_rgba(236,72,153,0.45)]
        transition-all duration-300
        hover:scale-110
        hover:shadow-[0_0_45px_rgba(236,72,153,0.7)]
        animate-[float_5s_ease-in-out_infinite]
      "
    >
      <FaInstagram className="w-7 h-7 text-white" />
    </button>
  );
}
