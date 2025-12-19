import { FaFacebookF } from "react-icons/fa";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61585262915799"; // cambia esto

export default function FacebookFloat() {
  const handleClick = () => {
    window.open(FACEBOOK_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Facebook"
      className="
        fixed bottom-42 right-6 z-50
        bg-linear-to-r from-blue-700 to-blue-600
        p-4 rounded-full
        shadow-2xl shadow-blue-900/50
        transition-all duration-300
        hover:scale-110
        animate-[float_5s_ease-in-out_infinite]
      "
    >
      <FaFacebookF className="w-7 h-7 text-white" />
    </button>
  );
}
