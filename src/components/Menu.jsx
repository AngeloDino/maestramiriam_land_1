export default function Menu({ open, onClose }) {
  const links = [
    { id: "hero", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "contacto", label: "Contacto" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-lg
      transition-all duration-700
      ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="h-full flex items-center justify-center">
        <nav className="flex flex-col gap-12 text-center">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="font-title text-4xl md:text-5xl text-red-600
              tracking-[0.25em] uppercase
              hover:text-red-400 transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
