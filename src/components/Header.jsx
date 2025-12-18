import { useEffect, useState } from "react";
import Menu from "./Menu";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 180);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50
        transition-all duration-700
        ${
          visible
            ? "opacity-100 translate-y-0 backdrop-blur-md bg-black/70 border-b border-red-900/30"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img src="/logomm.svg" alt="Logo" className="w-10 h-10" />
            <span className="font-title text-red-600 text-xl">
              Maestra Miriam
            </span>
          </div>

          {/* BOTÓN MENÚ */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1 group z-50"
          >
            <span
              className={`w-6 h-0.5 bg-red-600 transition-all
              ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-red-600 transition-all
              ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-red-600 transition-all
              ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* MENÚ */}
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
