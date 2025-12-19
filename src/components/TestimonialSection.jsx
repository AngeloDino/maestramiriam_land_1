import t1 from "../assets/testimonials/testimonio-1.webp";
import t2 from "../assets/testimonials/testimonio-2.webp";
import t3 from "../assets/testimonials/testimonio-3.webp";

const images = [t1, t2, t3];

export default function Testimonials() {
  return (
    <section className="mt-0 mb-32 md:mb-40">
      {/* TÍTULO */}
      <h2 className="
        text-center font-title
        text-4xl md:text-5xl
        text-red-600
        tracking-[0.3em]
        mb-16
      ">
        TESTIMONIOS
      </h2>

      {/* IMÁGENES */}
      <div className="
        grid grid-cols-1 sm:grid-cols-3
        gap-8
        max-w-5xl mx-auto
        px-6
      ">
        {images.map((image, i) => (
          <div
            key={i}
            className="
              border border-red-700
              shadow-xl shadow-red-900/30
              overflow-hidden
            "
          >
            <img
              src={image}
              alt="Testimonio espiritual"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
