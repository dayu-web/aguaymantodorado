import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, ShieldCheck, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { NewsCard, ProductCard, ServiceCard } from "@/components/site/Cards";
import { WholesaleCTA } from "@/components/site/CTASection";
import { Gallery } from "@/components/site/Gallery";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { images, news, products, reasons, services } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aguaymanto Perú | Producción y venta de aguaymanto peruano - Limatambo" },
      {
        name: "description",
        content:
          "Empresa peruana dedicada a la producción y comercialización de aguaymanto fresco. Venta al por mayor para restaurantes, tiendas y distribuidores. Solicita tu cotización.",
      },
      { property: "og:title", content: "Aguaymanto Perú | Aguaymanto fresco de calidad - Limatambo" },
      {
        property: "og:description",
        content:
          "Producimos y comercializamos aguaymanto seleccionado, llevando la calidad del campo peruano a nuestros clientes.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSlider />

      {/* Sobre nosotros*/}
      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <img
                src={images.about}
                alt="Productora peruana cosechando aguaymanto en el campo"
                loading="lazy"
                width={1280}
                height={1600}
                className="size-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionTitle
              eyebrow="Sobre la empresa"
              title="Comprometidos con la calidad del aguaymanto Limatambeño"
              text="Somos una empresa dedicada a la producción y comercialización de aguaymanto, comprometida con ofrecer productos de calidad y construir relaciones comerciales duraderas con nuestros clientes."
            />
            <Reveal delay={120}>
              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { Icon: Sprout, label: "Origen peruano" },
                  { Icon: ShieldCheck, label: "Calidad cuidada" },
                  { Icon: Leaf, label: "Producto natural" },
                ].map(({ Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                  >
                    <Icon className="size-5 text-secondary" aria-hidden="true" />
                    <span className="text-sm font-medium">{label}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="cta" size="xl" className="mt-8">
                <Link to="/quienes-somos">Conoce quiénes somos</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="bg-muted/60 py-20 sm:py-24">
        <div className="container-site">
          <SectionTitle
            eyebrow="Nuestros productos bandera"
            title="Aguaymanto para cada necesidad de los peruanos"
            text="Trabajamos presentaciones para consumo directo y para clientes comerciales."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((product, i) => (
              <ProductCard key={product.slug} product={product} delay={i * 100} />
            ))}
          </div>
          <Reveal className="mt-10 text-center" delay={120}>
            <Link
              to="/productos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary"
            >
              Ver todos los productos <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionTitle
            eyebrow="Nuestros servicios"
            title="Atención comercial pensada para tu negocio"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={i * 100} />
            ))}
          </div>
          <Reveal className="mt-10 text-center" delay={120}>
            <Button asChild variant="soft" size="lg">
              <Link to="/servicios">Conocer nuestros servicios</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <WholesaleCTA />

      {/* Por qué elegirnos */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionTitle eyebrow="¿Por qué elegirnos?" title="Razones para trabajar con nosotros" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 80} className="h-full">
                <div className="h-full rounded-xl border-t-2 border-accent bg-card p-6 shadow-[var(--shadow-soft)]">
                  <h3 className="text-base">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="bg-muted/60 py-20 sm:py-24">
        <div className="container-site">
          <SectionTitle
            eyebrow="Galería"
            title="Del campo al producto final"
            text="Campos, cosecha, selección, empaque y producto listo para nuestros clientes."
            align="center"
          />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionTitle eyebrow="Noticias" title="Novedades y actualidad" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {news.map((item, i) => (
              <NewsCard key={item.slug} item={item} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/60 py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas antes de comprar"
            text="Si necesitas información adicional, escríbenos por WhatsApp o desde el formulario de contacto."
          />
          <Reveal delay={100}>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>
    </>
  );
}
