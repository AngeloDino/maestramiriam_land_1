import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-9 left-6 z-50 bg-black border border-red-700 p-3 hover:bg-red-900/30 transition"
    >
      <ArrowUp className="w-6 h-6 text-red-600" />
    </button>
  );
}
