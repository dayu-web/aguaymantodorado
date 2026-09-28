import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Music2, Phone } from "lucide-react";
import { navLinks, siteConfig, whatsappLink } from "@/config/site";

export function Footer() {
  const social = [
    { label: "Facebook", href: siteConfig.social.facebook, Icon: Facebook },
    { label: "Instagram", href: siteConfig.social.instagram, Icon: Instagram },
    { label: "TikTok", href: siteConfig.social.tiktok, Icon: Music2 },
    { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: Linkedin },
  ];

  return (
    <footer className="gradient-green text-primary-foreground">
      <div className="container-site grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-semibold text-primary-foreground">
            {siteConfig.companyName}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/80">
            {siteConfig.tagline}
          </p>
          <div className="mt-5 flex gap-2">
            {social.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/15"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Enlaces del sitio">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
            Enlaces
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-primary-foreground/85 transition-colors hover:text-accent-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
            Información
          </p>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                WhatsApp: {siteConfig.contact.whatsapp}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>Teléfono: {siteConfig.contact.phone}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{siteConfig.contact.email}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>
                {siteConfig.contact.address}, {siteConfig.contact.city}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
            Atención comercial
          </p>
          <p className="mt-4 text-sm text-primary-foreground/85">
            Horario de atención: {siteConfig.contact.schedule}
          </p>
          <p className="mt-4 text-sm text-primary-foreground/85">
            ¿Necesitas una cotización? Escríbenos y te respondemos a la brevedad.
          </p>
          <Link
            to="/contacto"
            className="mt-4 inline-flex rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-strong"
          >
            Solicitar cotización
          </Link>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-site flex flex-col gap-3 py-5 text-xs text-primary-foreground/75 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.companyName}. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <Link to="/politica-de-privacidad" className="hover:text-accent-soft">
              Política de privacidad
            </Link>
            <Link to="/terminos-y-condiciones" className="hover:text-accent-soft">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
