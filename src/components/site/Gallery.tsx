import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { gallery } from "@/data/content";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const activeItem = active === null ? undefined : gallery[active];

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {gallery.map((item, i) => (
          <Reveal as="li" key={item.alt} delay={i * 60} className={i % 5 === 0 ? "md:row-span-2" : ""}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ampliar imagen: ${item.alt}`}
              className="group block size-full overflow-hidden rounded-lg"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                width={1200}
                height={900}
                className={`size-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  i % 5 === 0 ? "md:aspect-[3/4]" : "aspect-[4/3]"
                }`}
              />
            </button>
          </Reveal>
        ))}
      </ul>

      <Dialog open={activeItem !== undefined} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          {activeItem ? (
            <>
              <DialogTitle className="sr-only">{activeItem.alt}</DialogTitle>
              <img src={activeItem.image} alt={activeItem.alt} className="w-full rounded-lg" />
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
