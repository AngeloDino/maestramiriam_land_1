import { services } from "../data/services";
import ServiceReveal from "./ServiceReveal";

export default function Services() {
  return (
    <section id="servicios" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceReveal
            key={service.id}
            service={service}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}

