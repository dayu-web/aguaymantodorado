import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/95 shadow-[var(--shadow-soft)] backdrop-blur"
          : "border-b border-transparent bg-background/80 backdrop-blur-sm",
      )}
    >
      <div className="container-site flex items-center justify-between gap-6 py-3">
        <Link to="/" className="flex items-center gap-3" aria-label="Ir al inicio">
          <span
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-full gradient-green"
          >
            <span className="size-4 rounded-full bg-accent shadow-[var(--shadow-cta)]" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold tracking-tight text-primary-deep sm:text-lg">
              {siteConfig.brandName}
            </span>
            <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Producción y comercialización
            </span>
          </span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary [&.active]:text-primary [&.active]:underline [&.active]:decoration-accent [&.active]:decoration-2 [&.active]:underline-offset-8"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="cta" size="lg" className="hidden sm:inline-flex">
            <Link to="/contacto">Solicitar cotización</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Navegación móvil" className="container-site flex flex-col py-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted [&.active]:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="cta" size="lg" className="mt-3">
              <Link to="/contacto" onClick={() => setOpen(false)}>
                Solicitar cotización
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
