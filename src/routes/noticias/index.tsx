import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { NewsCard } from "@/components/site/Cards";
import { WholesaleCTA } from "@/components/site/CTASection";
import { images, news } from "@/data/content";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Noticias y actualidad | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Novedades de la empresa, información sobre el cultivo del aguaymanto, mercado agrícola y producción responsable.",
      },
      { property: "og:title", content: "Noticias y actualidad | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Publicaciones sobre la empresa, el aguaymanto peruano y el sector agrícola.",
      },
    ],
  }),
  component: Noticias,
});

function Noticias() {
  return (
    <>
      <PageHero
        eyebrow="Noticias"
        title="Noticias y actualidad"
        text="Novedades de la empresa y contenidos sobre el aguaymanto, la agricultura y el mercado."
        image={images.gallery2}
        alt="Fruto de aguaymanto madurando en la planta"
      />

      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionTitle eyebrow="Publicaciones" title="Últimas publicaciones" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item, i) => (
              <NewsCard key={item.slug} item={item} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <WholesaleCTA />
    </>
  );
}
