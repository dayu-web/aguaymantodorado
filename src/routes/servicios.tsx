import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ServiceCard } from "@/components/site/Cards";
import { WholesaleCTA } from "@/components/site/CTASection";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { Reveal } from "@/components/site/Reveal";
import { images, services } from "@/data/content";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | Venta de aguaymanto al por mayor y atención comercial" },
      {
        name: "description",
        content:
          "Venta de aguaymanto al por menor y al por mayor, atención a restaurantes, tiendas y distribuidores, pedidos personalizados y asesoría comercial.",
      },
      { property: "og:title", content: "Nuestros servicios | Aguaymanto Perú" },
      {
        property: "og:description",
        content:
          "Atención comercial para restaurantes, tiendas, distribuidores y empresas que requieren aguaymanto.",
      },
    ],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros servicios"
        title="Acompañamos cada pedido, del primer contacto a la entrega"
        text="Servicios orientados a clientes particulares, negocios gastronómicos, tiendas y distribuidores."
        image={images.gallery3}
        alt="Cajas de producto fresco listas para distribución en almacén"
      />

      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionTitle eyebrow="Servicios" title="Qué ofrecemos" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <WholesaleCTA />

      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Dudas habituales sobre nuestros servicios"
          />
          <Reveal delay={100}>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>
    </>
  );
}
