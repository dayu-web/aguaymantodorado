import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/site/Cards";
import { SectionTitle } from "@/components/site/SectionTitle";
import { formatDate, news } from "@/data/content";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const item = news.find((n) => n.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | Noticias | Aguaymanto Perú` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  component: NoticiaDetalle,
});

function NoticiaDetalle() {
  const item = Route.useLoaderData();
  const related = news.filter((n) => n.slug !== item.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="bg-muted/60 py-14">
          <div className="container-site max-w-3xl">
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary"
            >
              <ArrowLeft className="size-4" aria-hidden="true" /> Volver a noticias
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-full bg-accent-soft/50 px-3 py-1 font-semibold text-primary-deep">
                {item.category}
              </span>
              <time dateTime={item.date}>{formatDate(item.date)}</time>
              <span>Por {item.author}</span>
            </div>
            <h1 className="mt-4 text-balance-title text-3xl leading-tight sm:text-4xl">
              {item.title}
            </h1>
          </div>
        </header>

        <div className="container-site max-w-3xl py-12">
          <img
            src={item.image}
            alt={item.alt}
            loading="lazy"
            width={1200}
            height={750}
            className="w-full rounded-xl object-cover shadow-[var(--shadow-card)]"
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            {item.content.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-border bg-card p-6 text-center">
            <p className="text-sm text-muted-foreground">
              ¿Te interesa nuestro aguaymanto? Cuéntanos qué necesitas.
            </p>
            <Button asChild variant="cta" size="lg" className="mt-4">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
          </div>
        </div>
      </article>

      <section className="bg-muted/60 py-20">
        <div className="container-site">
          <SectionTitle eyebrow="También te puede interesar" title="Noticias relacionadas" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((relatedItem, i) => (
              <NewsCard key={relatedItem.slug} item={relatedItem} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
