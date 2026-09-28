import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "dark",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        tone === "light" && "text-primary-foreground",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.22em]",
            tone === "light" ? "text-accent-soft" : "text-secondary",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "text-balance-title text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]",
          tone === "light" && "text-primary-foreground",
        )}
      >
        {title}
      </Heading>
      {text ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-primary-foreground/85" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      ) : null}
    </Reveal>
  );
}
