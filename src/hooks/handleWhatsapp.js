import { PHONE_NUMBER } from "../App.jsx";

export const handleWhatsAppClick = () => {
  const message = encodeURIComponent(
    `Hola Maestra Miriam, me interesa consultar sobre sus servicios de magia blanca y brujería. Me gustaría obtener más información. Muchas gracias.`
  );

  window.open(
    `https://wa.me/${PHONE_NUMBER}?text=${message}`,
    "_blank",
    "noopener,noreferrer"
  );
};
