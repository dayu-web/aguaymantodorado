import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/Cards";
import { WholesaleCTA } from "@/components/site/CTASection";
import { images, products, qualityAttributes } from "@/data/content";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos | Aguaymanto fresco y presentaciones comerciales" },
      {
        name: "description",
        content:
          "Catálogo de aguaymanto fresco, presentaciones para distribución y opciones especiales. Consulta disponibilidad y solicita una cotización.",
      },
      { property: "og:title", content: "Nuestros productos | Aguaymanto Perú" },
      {
        property: "og:description",
        content:
          "Aguaymanto fresco seleccionado y presentaciones comerciales para distribuidores, tiendas y restaurantes.",
      },
    ],
  }),
  component: Productos,
});

function Productos() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros productos"
        title="Aguaymanto fresco y presentaciones comerciales"
        text="Un catálogo pensado para crecer: cada producto puede ampliarse con fotografías, ficha técnica, presentación y disponibilidad."
        image={images.hero1}
        alt="Aguaymanto fresco seleccionado en cajas de madera"
      />

      <section id="catalogo" className="py-20 sm:py-24">
        <div className="container-site">
          <SectionTitle eyebrow="Catálogo" title="Presentaciones disponibles" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((product, i) => (
              <ProductCard key={product.slug} product={product} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <section id="calidad" className="bg-muted/60 py-20 sm:py-24">
        <div className="container-site">
          <SectionTitle
            eyebrow="Calidad"
            title="Calidad que se nota"
            text="Los atributos que cuidamos en cada pedido que entregamos."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {qualityAttributes.map((attribute, i) => (
              <Reveal key={attribute.title} delay={i * 80} className="h-full">
                <div className="h-full rounded-xl border border-border bg-card p-6">
                  <h3 className="text-lg">{attribute.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {attribute.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div id="pedidos-mayoristas">
        <WholesaleCTA />
      </div>
    </>
  );
}
