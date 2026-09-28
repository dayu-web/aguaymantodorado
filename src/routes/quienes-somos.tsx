import { createFileRoute } from "@tanstack/react-router";
import { Compass, Target } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ValueCard } from "@/components/site/Cards";
import { WholesaleCTA } from "@/components/site/CTASection";
import { Gallery } from "@/components/site/Gallery";
import { commitments, images, mission, timeline, values, vision } from "@/data/content";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes somos | Empresa peruana productora de aguaymanto" },
      {
        name: "description",
        content:
          "Conoce nuestra empresa, historia, misión, visión, valores y compromiso con la calidad del aguaymanto peruano.",
      },
      { property: "og:title", content: "Quiénes somos | Aguaymanto Perú" },
      {
        property: "og:description",
        content:
          "Una empresa con raíces en el campo peruano dedicada a la producción y comercialización de aguaymanto.",
      },
    ],
  }),
  component: QuienesSomos,
});

function QuienesSomos() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Una empresa con raíces en el campo peruano"
        text="Producción, selección y comercialización de aguaymanto con una forma de trabajo cercana, responsable y orientada al cliente."
        image={images.hero2}
        alt="Plantación de aguaymanto en un valle andino del Perú"
      />

      <section id="nuestra-empresa" className="py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Nuestra empresa"
              title="Trabajamos el aguaymanto con cuidado en cada etapa"
              text="Nos dedicamos a la producción y comercialización de aguaymanto, atendiendo tanto a clientes particulares como a restaurantes, tiendas, distribuidores y empresas que requieren un proveedor confiable."
            />
            <Reveal delay={100}>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  Nuestro trabajo se apoya en la selección cuidadosa del fruto, el manejo adecuado
                  del producto y una atención comercial cercana que busca entender lo que cada
                  cliente necesita.
                </p>
                <p>
                  Nos diferencia el compromiso con la calidad y la disposición a acompañar al
                  cliente durante todo el proceso de compra: desde la consulta inicial hasta la
                  coordinación de la entrega.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <img
                src={images.about}
                alt="Cosecha manual de aguaymanto en el campo peruano"
                loading="lazy"
                width={1280}
                height={1600}
                className="size-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="nuestra-historia" className="bg-muted/60 py-20 sm:py-24">
        <div className="container-site">
          <SectionTitle
            eyebrow="Nuestra historia"
            title="Un recorrido en construcción"
            text="Contenido inicial editable: será reemplazado por la historia real de la empresa."
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, i) => (
              <Reveal as="li" key={item.step} delay={i * 90} className="h-full">
                <div className="h-full rounded-xl border border-border bg-card p-6">
                  <span className="font-display text-3xl text-accent">{item.step}</span>
                  <h3 className="mt-3 text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="mision-vision" className="py-20 sm:py-24">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-2xl gradient-green p-8 text-primary-foreground sm:p-10">
              <Target className="size-9 text-accent" aria-hidden="true" />
              <h2 className="mt-5 text-2xl text-primary-foreground">Nuestra Misión</h2>
              <p className="mt-3 leading-relaxed text-primary-foreground/85">{mission}</p>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article className="h-full rounded-2xl border border-border bg-card p-8 sm:p-10">
              <Compass className="size-9 text-secondary" aria-hidden="true" />
              <h2 className="mt-5 text-2xl">Nuestra Visión</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{vision}</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section id="valores" className="bg-muted/60 py-20 sm:py-24">
        <div className="container-site">
          <SectionTitle eyebrow="Valores" title="Nuestros valores" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <ValueCard key={value.title} index={i} {...value} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section id="compromiso" className="py-20 sm:py-24">
        <div className="container-site">
          <SectionTitle eyebrow="Compromiso" title="Nuestro compromiso" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {commitments.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="h-full">
                <div className="h-full rounded-xl border-l-2 border-accent bg-card p-6 shadow-[var(--shadow-soft)]">
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/60 py-20 sm:py-24">
        <div className="container-site">
          <SectionTitle eyebrow="Galería" title="Nuestro trabajo en imágenes" align="center" />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      <WholesaleCTA />
    </>
  );
}
