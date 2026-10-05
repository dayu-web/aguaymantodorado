import { Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { formatDate, type NewsItem, type Product } from "@/data/content";

export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <Reveal as="article" delay={delay} className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-card)]">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.alt}
            loading="lazy"
            width={1200}
            height={900}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl">{product.name}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>
          <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-border pt-4 text-xs">
            {product.details.map((detail) => (
              <div key={detail.label}>
                <dt className="font-semibold uppercase tracking-wide text-muted-foreground">
                  {detail.label}
                </dt>
                <dd className="text-foreground">{detail.value}</dd>
              </div>
            ))}
          </dl>
          <Button asChild variant="cta" className="mt-6 w-full">
            <Link to="/contacto">
              {product.cta}
            </Link>
          </Button>
        </div>
      </div>
    </Reveal>
  );
}

export function ServiceCard({
  icon,
  title,
  text,
  delay = 0,
}: {
  icon: string;
  title: string;
  text: string;
  delay?: number;
}) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[icon] ?? Icons.Leaf;
  return (
    <Reveal as="article" delay={delay} className="h-full">
      <div className="flex h-full flex-col rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-secondary/40 hover:shadow-[var(--shadow-card)]">
        <span className="flex size-12 items-center justify-center rounded-lg bg-primary/8 text-primary">
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-lg">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
        <Button asChild variant="soft" className="mt-6 self-start">
          <Link to="/contacto">Consultar</Link>
        </Button>
      </div>
    </Reveal>
  );
}

export function ValueCard({
  index,
  title,
  text,
  delay = 0,
}: {
  index: number;
  title: string;
  text: string;
  delay?: number;
}) {
  return (
    <Reveal as="article" delay={delay} className="h-full">
      <div className="h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/60">
        <span className="font-display text-2xl text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-3 text-lg">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
      </div>
    </Reveal>
  );
}

export function NewsCard({ item, delay = 0 }: { item: NewsItem; delay?: number }) {
  return (
    <Reveal as="article" delay={delay} className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)]">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={item.image}
            alt={item.alt}
            loading="lazy"
            width={1200}
            height={750}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full bg-accent-soft/50 px-3 py-1 font-semibold text-primary-deep">
              {item.category}
            </span>
            <time dateTime={item.date}>{formatDate(item.date)}</time>
          </div>
          <h3 className="mt-4 text-lg leading-snug">{item.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {item.excerpt}
          </p>
          <Link
            to="/noticias/$slug"
            params={{ slug: item.slug }}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
          >
            Leer más <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
