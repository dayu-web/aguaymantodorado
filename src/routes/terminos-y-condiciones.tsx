import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Condiciones de uso del sitio web y alcance de la información publicada sobre productos, precios y disponibilidad.",
      },
      { property: "og:title", content: "Términos y condiciones | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Condiciones de uso del sitio web y de la información comercial publicada.",
      },
    ],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <div className="container-site max-w-3xl py-20">
      <h1 className="text-4xl">Términos y condiciones</h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          Este texto es un contenido inicial editable y debe ser revisado por{" "}
          {siteConfig.companyName} antes de su publicación definitiva.
        </p>
        <h2 className="pt-4 text-xl">Uso del sitio</h2>
        <p>
          La información publicada tiene fines informativos y comerciales. El uso del sitio implica
          la aceptación de estas condiciones.
        </p>
        <h2 className="pt-4 text-xl">Productos, precios y disponibilidad</h2>
        <p>
          Las presentaciones, precios y disponibilidad pueden variar y se confirman en la cotización
          correspondiente.
        </p>
        <h2 className="pt-4 text-xl">Contacto</h2>
        <p>
          Para cualquier consulta sobre estas condiciones, escríbenos a {siteConfig.contact.email}.
        </p>
      </div>
    </div>
  );
}
