export function PageHero({
  eyebrow,
  title,
  text,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt={alt}
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-hero)" }}
        aria-hidden="true"
      />
      <div className="container-site relative py-24 sm:py-28">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-balance-title text-4xl leading-tight text-primary-foreground sm:text-5xl">
          {title}
        </h1>
        {text ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            {text}
          </p>
        ) : null}
      </div>
    </section>
  );
}
