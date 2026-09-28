import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";
import { Reveal } from "./Reveal";

const bullets = [
  "Pedidos por volumen",
  "Atención personalizada",
  "Presentaciones comerciales",
  "Coordinación de entregas",
  "Cotizaciones",
];

export function WholesaleCTA() {
  return (
    <section className="gradient-green">
      <div className="container-site grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
            Clientes mayoristas
          </p>
          <h2 className="text-balance-title text-3xl leading-tight text-primary-foreground sm:text-4xl">
            ¿Buscas un proveedor de aguaymanto?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85">
            Atendemos consultas comerciales de restaurantes, tiendas, distribuidores, empresas y
            otros negocios que requieren aguaymanto.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="cta" size="xl">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid gap-3 rounded-xl border border-primary-foreground/20 bg-primary-foreground/8 p-6 backdrop-blur-sm">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-center gap-3 text-sm text-primary-foreground sm:text-base"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                {bullet}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
