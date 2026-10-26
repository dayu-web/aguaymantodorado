/**
 * Configuración central del sitio.
 * Edita aquí los datos de la empresa: todos los componentes los leen desde acá.
 */
export const siteConfig = {
  companyName: "[NOMBRE DE LA EMPRESA]",
  brandName: "AGUAYMANTO PERÚ",
  tagline: "Calidad y compromiso desde el campo peruano.",
  contact: {
    whatsapp: "+51 957 714 811",
    // Número en formato internacional, solo dígitos (ej. 51999999999)
    whatsappNumber: "51957714811",
    whatsappMessage:
      "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.",
    phone: "+51 957 714 811",
    email: "contacto@aguaymantodorado.com",
    address: "Comunidad Sauceda S/N Limatambo",
    city: "Anta - Cusco",
    schedule: "Lunes a sábado: 8:00 a.m. - 6:00 p.m.",
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
