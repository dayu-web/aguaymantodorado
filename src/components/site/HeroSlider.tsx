import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoModal } from "@/components/site/VideoModal";
import { cn } from "@/lib/utils";
import { heroSlides } from "@/data/content";

const PROMO_VIDEO_ID = "aG-EexHoO10";
const PROMO_VIDEO_TITLE = "Video sobre el aguaymanto peruano";

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 5000);
    return () => window.clearInterval(id);
  }, [paused]);

  const current = heroSlides[index] ?? heroSlides[0]!;

  return (
    <section
      aria-label="Presentación de la empresa"
      className="relative isolate h-[88svh] min-h-[520px] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroSlides.map((slide, i) => (
        <div
          key={slide.title}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            i === index ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            className={cn("size-full object-cover", i === index && "hero-slide-image")}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "var(--gradient-hero)" }}
            aria-hidden="true"
          />
        </div>
      ))}

      <div className="container-site relative flex h-full items-center">
        <div key={index} className="max-w-2xl animate-fade-up pb-16">
          <p className="mb-4 inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur-sm">
            Aguaymanto peruano
          </p>
          <h1 className="text-balance-title text-4xl leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
            {current.title}
          </h1>
          {current.text ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
              {current.text}
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            {current.actions.map((action) => (
              <Button
                key={action.label}
                asChild
                size="xl"
                variant={action.variant === "outlineLight" ? "outlineLight" : "cta"}
              >
                <Link to={action.to as "/"}>{action.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-site absolute inset-x-0 bottom-7 flex items-center justify-between">
        <div className="flex gap-2" role="tablist" aria-label="Indicadores del slider">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.title}
              role="tab"
              aria-selected={i === index}
              aria-label={`Ir a la diapositiva ${i + 1}`}
              onClick={() => go(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index
                  ? "w-10 bg-accent"
                  : "w-5 bg-primary-foreground/50 hover:bg-primary-foreground/80",
              )}
            />
          ))}
        </div>
        <div className="hidden gap-2 sm:flex">
          <Button
            variant="outlineLight"
            size="icon"
            aria-label="Diapositiva anterior"
            onClick={() => go(index - 1)}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outlineLight"
            size="icon"
            aria-label="Siguiente diapositiva"
            onClick={() => go(index + 1)}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
