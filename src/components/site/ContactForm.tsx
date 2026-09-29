import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { products } from "@/data/content";

type Values = {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  ciudad: string;
  tipoCliente: string;
  producto: string;
  cantidad: string;
  asunto: string;
  mensaje: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const clientTypes = [
  "Cliente particular",
  "Restaurante / hotel / cafetería",
  "Tienda / minorista",
  "Distribuidor / mayorista",
  "Empresa / otro",
];

export function ContactForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [values, setValues] = useState<Values>({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    ciudad: "",
    tipoCliente: "",
    producto: defaultProduct,
    cantidad: "",
    asunto: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Values) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  function validate() {
    const next: Errors = {};
    if (values.nombre.trim().length < 3) next.nombre = "Ingresa tu nombre completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Ingresa un correo electrónico válido.";
    if (values.telefono.replace(/\D/g, "").length < 6)
      next.telefono = "Ingresa un teléfono de contacto válido.";
    if (values.asunto.trim().length < 3) next.asunto = "Indica el asunto de tu consulta.";
    if (values.mensaje.trim().length < 10)
      next.mensaje = "Cuéntanos un poco más (mín. 10 caracteres).";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    // Listo para conectarse luego con un servicio de email, CRM o backend.
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-xl border border-secondary/30 bg-card p-8 text-center shadow-[var(--shadow-soft)]"
      >
        <CheckCircle2 className="mx-auto size-10 text-secondary" aria-hidden="true" />
        <h3 className="mt-4 text-xl">¡Gracias por contactarnos!</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Hemos recibido tu consulta y nos comunicaremos contigo pronto.
        </p>
        <Button variant="soft" className="mt-6" onClick={() => setSent(false)}>
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="nombre" label="Nombre completo" required error={errors.nombre ?? ""}>
          <Input
            id="nombre"
            value={values.nombre}
            onChange={(e) => set("nombre")(e.target.value)}
            autoComplete="name"
            aria-invalid={Boolean(errors.nombre)}
          />
        </Field>
        <Field id="empresa" label="Empresa">
          <Input
            id="empresa"
            value={values.empresa}
            onChange={(e) => set("empresa")(e.target.value)}
            autoComplete="organization"
          />
        </Field>
        <Field id="email" label="Correo electrónico" required error={errors.email ?? ""}>
          <Input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => set("email")(e.target.value)}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
        <Field id="telefono" label="Teléfono" required error={errors.telefono ?? ""}>
          <Input
            id="telefono"
            type="tel"
            value={values.telefono}
            onChange={(e) => set("telefono")(e.target.value)}
            autoComplete="tel"
            aria-invalid={Boolean(errors.telefono)}
          />
        </Field>
        <Field id="ciudad" label="Ciudad">
          <Input
            id="ciudad"
            value={values.ciudad}
            onChange={(e) => set("ciudad")(e.target.value)}
            autoComplete="address-level2"
          />
        </Field>
        <Field id="tipoCliente" label="Tipo de cliente">
          <select
            id="tipoCliente"
            value={values.tipoCliente}
            onChange={(e) => set("tipoCliente")(e.target.value)}
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm"
          >
            <option value="">Selecciona una opción</option>
            {clientTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field id="producto" label="Producto de interés">
          <select
            id="producto"
            value={values.producto}
            onChange={(e) => set("producto")(e.target.value)}
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm"
          >
            <option value="">Selecciona un producto</option>
            {products.map((product) => (
              <option key={product.slug} value={product.slug}>
                {product.name}
              </option>
            ))}
          </select>
        </Field>
        <Field id="cantidad" label="Cantidad aproximada">
          <Input
            id="cantidad"
            value={values.cantidad}
            onChange={(e) => set("cantidad")(e.target.value)}
            placeholder="Ej. 50 kg por semana"
          />
        </Field>
        <Field
          id="asunto"
          label="Asunto"
          required
          error={errors.asunto ?? ""}
          className="sm:col-span-2"
        >
          <Input
            id="asunto"
            value={values.asunto}
            onChange={(e) => set("asunto")(e.target.value)}
            aria-invalid={Boolean(errors.asunto)}
          />
        </Field>
        <Field
          id="mensaje"
          label="Mensaje"
          required
          error={errors.mensaje ?? ""}
          className="sm:col-span-2"
        >
          <Textarea
            id="mensaje"
            rows={5}
            value={values.mensaje}
            onChange={(e) => set("mensaje")(e.target.value)}
            aria-invalid={Boolean(errors.mensaje)}
          />
        </Field>
      </div>

      <Button type="submit" variant="cta" size="xl" className="mt-7 w-full sm:w-auto">
        Enviar consulta
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  required = false,
  error = "",
  className = "",
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
        {required ? <span className="text-accent-strong"> *</span> : null}
      </Label>
      {children}
      {error ? (
        <p role="alert" className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
