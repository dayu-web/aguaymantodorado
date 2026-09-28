/**
 * Contenido editable del sitio (textos institucionales, productos,
 * servicios, noticias, galería y preguntas frecuentes).
 * Todos los textos son provisionales y pueden reemplazarse libremente.
 */
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import about from "@/assets/about.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const images = { hero1, hero2, hero3, about, gallery1, gallery2, gallery3, gallery4 };

export type Slide = {
  image: string;
  alt: string;
  title: string;
  text?: string;
  actions: { label: string; to: string; variant?: "cta" | "outlineLight" }[];
};

export const heroSlides: Slide[] = [
  {
    image: hero1,
    alt: "Aguaymanto fresco seleccionado en cajas de madera en el campo peruano",
    title: "Aguaymanto peruano, calidad que nace en nuestra tierra",
    text: "Producimos y comercializamos aguaymanto seleccionado, llevando el sabor y la calidad del campo peruano a nuestros clientes.",
    actions: [
      { label: "Conocer nuestros productos", to: "/productos", variant: "cta" },
      { label: "Solicitar cotización", to: "/contacto", variant: "outlineLight" },
    ],
  },
  {
    image: hero2,
    alt: "Plantación de aguaymanto en un valle andino del Perú al amanecer",
    title: "Del campo peruano a nuevos mercados",
    text: "Trabajamos para ofrecer productos agrícolas de calidad, con compromiso, responsabilidad y visión de crecimiento.",
    actions: [{ label: "Conoce nuestra empresa", to: "/quienes-somos", variant: "cta" }],
  },
  {
    image: hero3,
    alt: "Aguaymanto fresco empacado en presentaciones comerciales",
    title: "Natural, versátil y de excelente calidad",
    actions: [{ label: "Ver productos", to: "/productos", variant: "cta" }],
  },
];

export const timeline = [
  { step: "01", title: "Nuestros inicios", text: "Inicio de las actividades de la empresa." },
  {
    step: "02",
    title: "Crecimiento",
    text: "Desarrollo de nuestras operaciones y ampliación de clientes.",
  },
  {
    step: "03",
    title: "Consolidación",
    text: "Fortalecimiento de nuestros procesos y productos.",
  },
  {
    step: "04",
    title: "Proyección",
    text: "Expansión hacia nuevos mercados y oportunidades comerciales.",
  },
];

export const mission =
  "Producir y comercializar aguaymanto de calidad, trabajando con responsabilidad, eficiencia y compromiso para satisfacer las necesidades de nuestros clientes y generar valor de manera sostenible.";

export const vision =
  "Ser una empresa reconocida por la calidad de nuestros productos, la confiabilidad de nuestro servicio y nuestra capacidad para generar oportunidades en nuevos mercados.";

export const values = [
  { title: "Calidad", text: "Trabajamos para ofrecer productos que cumplan altos estándares." },
  { title: "Compromiso", text: "Cumplimos nuestros compromisos con clientes y colaboradores." },
  { title: "Responsabilidad", text: "Actuamos responsablemente en nuestras operaciones." },
  { title: "Integridad", text: "Construimos relaciones basadas en confianza y transparencia." },
  { title: "Innovación", text: "Buscamos mejorar continuamente nuestros procesos." },
  { title: "Sostenibilidad", text: "Promovemos prácticas responsables con nuestro entorno." },
];

export const commitments = [
  {
    title: "Calidad",
    text: "Cuidamos la selección, el manejo y la presentación del producto en cada etapa.",
  },
  {
    title: "Personas",
    text: "Valoramos el trabajo de quienes hacen posible nuestra producción y atención.",
  },
  {
    title: "Medio ambiente",
    text: "Promovemos prácticas responsables con el entorno donde trabajamos.",
  },
];

export type Product = {
  slug: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  cta: string;
  details: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "aguaymanto-fresco",
    name: "Aguaymanto fresco",
    description:
      "Fruto seleccionado cuidadosamente para conservar su presentación, sabor y frescura.",
    image: images.hero1,
    alt: "Aguaymanto fresco con cáliz en caja de madera",
    cta: "Solicitar información",
    details: [
      { label: "Presentación", value: "[PRESENTACIÓN]" },
      { label: "Peso", value: "[PESO]" },
      { label: "Disponibilidad", value: "[DISPONIBILIDAD]" },
      { label: "Precio", value: "[PRECIO]" },
    ],
  },
  {
    slug: "aguaymanto-distribucion",
    name: "Aguaymanto para distribución",
    description: "Presentaciones orientadas a clientes comerciales y distribuidores.",
    image: images.gallery3,
    alt: "Cajas de aguaymanto listas para distribución en almacén",
    cta: "Consultar",
    details: [
      { label: "Presentación", value: "[PRESENTACIÓN]" },
      { label: "Peso", value: "[PESO]" },
      { label: "Disponibilidad", value: "[DISPONIBILIDAD]" },
      { label: "Precio", value: "[PRECIO]" },
    ],
  },
  {
    slug: "presentaciones-especiales",
    name: "Presentaciones especiales",
    description: "Opciones de acuerdo con las necesidades del cliente y disponibilidad.",
    image: images.hero3,
    alt: "Presentaciones especiales de aguaymanto empacado",
    cta: "Consultar presentación",
    details: [
      { label: "Presentación", value: "[PRESENTACIÓN]" },
      { label: "Peso", value: "[PESO]" },
      { label: "Disponibilidad", value: "[DISPONIBILIDAD]" },
      { label: "Precio", value: "[PRECIO]" },
    ],
  },
];

export const qualityAttributes = [
  { title: "Selección cuidadosa", text: "Revisamos el fruto para mantener una presentación uniforme." },
  { title: "Frescura", text: "Manejamos el producto buscando conservar sus características." },
  { title: "Presentación", text: "Cuidamos la apariencia final del producto entregado." },
  { title: "Control de calidad", text: "Aplicamos revisiones durante nuestros procesos." },
  { title: "Empaque adecuado", text: "Utilizamos empaques apropiados para cada presentación." },
  { title: "Atención al cliente", text: "Acompañamos al cliente antes y después de la compra." },
];

export const services = [
  {
    icon: "ShoppingBasket",
    title: "Venta de aguaymanto",
    text: "Venta de producto para clientes particulares y comerciales.",
  },
  {
    icon: "Boxes",
    title: "Venta al por mayor",
    text: "Atención de pedidos de mayor volumen.",
  },
  {
    icon: "UtensilsCrossed",
    title: "Atención a restaurantes",
    text: "Provisión de producto para restaurantes, hoteles, cafeterías y negocios gastronómicos.",
  },
  {
    icon: "Store",
    title: "Atención a tiendas y distribuidores",
    text: "Opciones comerciales para negocios que desean incorporar aguaymanto a su oferta.",
  },
  {
    icon: "ClipboardList",
    title: "Pedidos personalizados",
    text: "Evaluación de requerimientos específicos según producto, volumen y disponibilidad.",
  },
  {
    icon: "Headset",
    title: "Asesoría comercial",
    text: "Atención personalizada para ayudar al cliente a elegir la presentación adecuada.",
  },
] as const;

export const reasons = [
  {
    title: "Producto seleccionado",
    text: "Trabajamos para ofrecer una presentación adecuada y consistente.",
  },
  { title: "Calidad", text: "Priorizamos la calidad en cada etapa." },
  { title: "Atención personalizada", text: "Escuchamos las necesidades de cada cliente." },
  { title: "Compromiso", text: "Buscamos relaciones comerciales duraderas." },
  { title: "Origen peruano", text: "Nuestro producto tiene origen en el campo peruano." },
];

export type NewsItem = {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  alt: string;
  content: string[];
};

export const news: NewsItem[] = [
  {
    slug: "aguaymanto-peruano-nuevos-mercados",
    title: "El aguaymanto peruano y su presencia en nuevos mercados",
    category: "Mercado",
    date: "2026-08-12",
    author: "[AUTOR]",
    excerpt:
      "El interés por frutas nativas del Perú abre oportunidades comerciales para productores y distribuidores.",
    image: images.hero3,
    alt: "Aguaymanto empacado listo para nuevos mercados",
    content: [
      "Este es un contenido de ejemplo y puede editarse o eliminarse fácilmente desde el archivo de noticias del proyecto.",
      "El aguaymanto es una fruta reconocida por su sabor característico y su versatilidad en la gastronomía. En los últimos años, el interés comercial por frutas nativas ha impulsado nuevas oportunidades para quienes trabajan en el campo peruano.",
      "Como empresa, seguimos de cerca estas oportunidades para acompañar a nuestros clientes con presentaciones adecuadas a cada necesidad.",
    ],
  },
  {
    slug: "cultivo-del-aguaymanto",
    title: "Conoce más sobre el cultivo del aguaymanto",
    category: "Agricultura",
    date: "2026-07-03",
    author: "[AUTOR]",
    excerpt:
      "Una mirada al proceso de cultivo, cuidado y cosecha del fruto que da identidad a nuestra empresa.",
    image: images.hero2,
    alt: "Plantación de aguaymanto en el campo peruano",
    content: [
      "Este es un contenido de ejemplo y puede editarse o eliminarse fácilmente desde el archivo de noticias del proyecto.",
      "El cultivo del aguaymanto requiere atención durante todo su ciclo: preparación del terreno, manejo de la planta, cuidado del fruto y una cosecha realizada en el momento adecuado.",
      "Cada etapa influye directamente en la presentación final del producto que llega a nuestros clientes.",
    ],
  },
  {
    slug: "apuesta-por-la-calidad",
    title: "Nuestra apuesta por la calidad y la producción responsable",
    category: "Noticias de la empresa",
    date: "2026-06-18",
    author: "[AUTOR]",
    excerpt:
      "Compartimos los principios que guían nuestro trabajo diario y nuestra relación con los clientes.",
    image: images.gallery1,
    alt: "Selección de aguaymanto en planta de procesamiento",
    content: [
      "Este es un contenido de ejemplo y puede editarse o eliminarse fácilmente desde el archivo de noticias del proyecto.",
      "La calidad es un compromiso que se construye en cada etapa: desde la selección del fruto hasta la coordinación de la entrega.",
      "Seguiremos publicando en esta sección las novedades de la empresa, del sector agrícola y del mercado del aguaymanto.",
    ],
  },
];

export const gallery = [
  { image: images.hero2, alt: "Campos y plantaciones de aguaymanto en el Perú" },
  { image: images.gallery2, alt: "Fruto de aguaymanto madurando en la planta" },
  { image: images.about, alt: "Productora cosechando aguaymanto en el campo" },
  { image: images.gallery1, alt: "Selección de aguaymanto en planta de procesamiento" },
  { image: images.gallery3, alt: "Cajas de producto listas para su distribución" },
  { image: images.gallery4, alt: "Aguaymanto fresco presentado en un tazón" },
  { image: images.hero1, alt: "Aguaymanto fresco recién cosechado" },
  { image: images.hero3, alt: "Producto empacado en presentaciones comerciales" },
];

export const faqs = [
  {
    q: "¿Qué productos ofrecen?",
    a: "Ofrecemos aguaymanto fresco seleccionado y presentaciones orientadas a clientes comerciales. Puedes revisar el detalle en la sección Productos.",
  },
  {
    q: "¿Realizan ventas al por mayor?",
    a: "Sí, atendemos pedidos de mayor volumen. Escríbenos indicando la cantidad aproximada que necesitas y coordinamos una cotización.",
  },
  {
    q: "¿Atienden restaurantes y empresas?",
    a: "Atendemos consultas de restaurantes, hoteles, cafeterías, tiendas, distribuidores y otras empresas del rubro.",
  },
  {
    q: "¿Qué presentaciones tienen disponibles?",
    a: "Las presentaciones dependen del producto y la disponibilidad. Consúltanos y te indicamos las opciones vigentes.",
  },
  {
    q: "¿Realizan entregas?",
    a: "Coordinamos la entrega según el pedido y la ubicación del cliente. Escríbenos para revisar tu caso.",
  },
  {
    q: "¿Cómo puedo solicitar una cotización?",
    a: "Puedes completar el formulario de la página de Contacto o escribirnos directamente por WhatsApp.",
  },
  {
    q: "¿Cómo puedo comunicarme con ustedes?",
    a: "Por WhatsApp, teléfono, correo electrónico o el formulario de contacto del sitio.",
  },
];

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
