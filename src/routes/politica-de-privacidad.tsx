import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Cómo tratamos los datos personales que nos envías a través del formulario de contacto y los canales de atención.",
      },
      { property: "og:title", content: "Política de privacidad | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Información sobre el tratamiento de datos personales en nuestro sitio web.",
      },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <div className="container-site max-w-3xl py-20">
      <h1 className="text-4xl">Política de privacidad</h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          Este texto es un contenido inicial editable y debe ser revisado por {siteConfig.companyName}{" "}
          antes de su publicación definitiva.
        </p>
        <h2 className="pt-4 text-xl">Datos que recopilamos</h2>
        <p>
          Recopilamos únicamente los datos que nos proporcionas voluntariamente a través del
          formulario de contacto o de nuestros canales de atención: nombre, empresa, correo
          electrónico, teléfono, ciudad y el contenido de tu consulta.
        </p>
        <h2 className="pt-4 text-xl">Uso de la información</h2>
        <p>
          Utilizamos esta información para responder consultas, elaborar cotizaciones y mantener la
          comunicación comercial solicitada. No vendemos ni cedemos tus datos a terceros.
        </p>
        <h2 className="pt-4 text-xl">Derechos del usuario</h2>
        <p>
          Puedes solicitar el acceso, la rectificación o la eliminación de tus datos escribiendo a{" "}
          {siteConfig.contact.email}.
        </p>
      </div>
    </div>
  );
}
