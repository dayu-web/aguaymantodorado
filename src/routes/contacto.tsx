import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { images } from "@/data/content";
import { siteConfig, whatsappLink } from "@/config/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Solicita tu cotización de aguaymanto" },
      {
        name: "description",
        content:
          "Contáctanos por WhatsApp, teléfono, correo o formulario para consultar precios, presentaciones y pedidos al por mayor de aguaymanto.",
      },
      { property: "og:title", content: "Contacto | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Estamos aquí para atenderte: consultas comerciales, pedidos y cotizaciones.",
      },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const data = [
    { Icon: MessageCircle, label: "WhatsApp", value: siteConfig.contact.whatsapp, href: whatsappLink },
    { Icon: Phone, label: "Teléfono", value: siteConfig.contact.phone },
    { Icon: Mail, label: "Correo electrónico", value: siteConfig.contact.email },
    {
      Icon: MapPin,
      label: "Dirección",
      value: `${siteConfig.contact.address}, ${siteConfig.contact.city}`,
    },
    { Icon: Clock, label: "Horario de atención", value: siteConfig.contact.schedule },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos aquí para atenderte"
        text="Si deseas conocer nuestros productos, solicitar una cotización o conversar sobre una oportunidad comercial, contáctanos."
        image={images.gallery4}
        alt="Aguaymanto fresco presentado en un tazón sobre madera"
      />

      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <h2 className="text-2xl">Datos de contacto</h2>
            <ul className="mt-6 space-y-4">
              {data.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary hover:text-secondary"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="text-2xl">Escríbenos</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Completa el formulario y te responderemos a la brevedad.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/60 py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle eyebrow="Preguntas frecuentes" title="Antes de escribirnos" />
          <Reveal delay={100}>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>
    </>
  );
}
