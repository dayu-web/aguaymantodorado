/**
 * Configuración central del sitio.
 * Edita aquí los datos de la empresa: todos los componentes los leen desde acá.
 */
export const siteConfig = {
  companyName: "[NOMBRE DE LA EMPRESA]",
  brandName: "AGUAYMANTO PERÚ",
  tagline: "Calidad y compromiso desde el campo peruano.",
  contact: {
    whatsapp: "[WHATSAPP]",
    // Número en formato internacional, solo dígitos (ej. 51999999999)
    whatsappNumber: "51999999999",
    whatsappMessage:
      "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.",
    phone: "[TELÉFONO]",
    email: "[CORREO]",
    address: "[DIRECCIÓN]",
    city: "[CIUDAD]",
    schedule: "[HORARIO]",
  },
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    linkedin: "#",
  },
} as const;

export const whatsappLink = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.contact.whatsappMessage,
)}`;

export const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes Somos", to: "/quienes-somos" },
  { label: "Productos", to: "/productos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Noticias", to: "/noticias" },
  { label: "Contacto", to: "/contacto" },
] as const;
