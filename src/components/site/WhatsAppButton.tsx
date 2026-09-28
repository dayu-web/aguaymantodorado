import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-secondary px-4 py-3 text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">¿Necesitas información?</span>
    </a>
  );
}
