import { useState } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface ProjectDeckProps {
  projectName: string;
  description: string;
  images: string[];
}

export function ProjectDeck({ projectName, description, images }: ProjectDeckProps) {
  const [hover, setHover] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <article className="flex flex-col">
      <div
        className="relative h-[340px] mb-6 cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setLightbox(0)}
      >
        {images.map((img, idx) => {
          const rot = -3 * idx;
          const offset = 6 * idx;
          const scale = idx === 0 && hover ? 1.03 : 1;
          const extraSpread = hover ? offset * 1.6 : offset;
          return (
            <div
              key={img + idx}
              className="absolute inset-0 border border-[#D8D8D8] bg-[#FAFAFA] overflow-hidden transition-all duration-300 ease-out"
              style={{
                transform: `translate(${extraSpread}px, ${extraSpread}px) rotate(${rot}deg) scale(${scale})`,
                zIndex: images.length - idx,
                borderRadius: 2,
                boxShadow: idx === 0 && hover ? "0 12px 32px -16px rgba(10,10,10,0.25)" : "0 1px 2px rgba(10,10,10,0.04)",
              }}
            >
              <ImagePlaceholder src={img} />
            </div>
          );
        })}
      </div>

      <h3 className="font-display font-light text-[18px] text-[#0A0A0A] mb-2">
        {projectName}
      </h3>
      <p className="font-body font-light text-[11px] text-[#9A9A9A]">{description}</p>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#0A0A0A] flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Fechar"
            className="absolute top-6 right-6 text-[#FAFAFA] text-2xl"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <button
            aria-label="Anterior"
            className="absolute left-6 text-[#FAFAFA] text-3xl font-light"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + images.length) % images.length);
            }}
          >
            ←
          </button>
          <div className="w-[80vw] h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <ImagePlaceholder src={images[lightbox]} />
          </div>
          <button
            aria-label="Próxima"
            className="absolute right-6 text-[#FAFAFA] text-3xl font-light"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % images.length);
            }}
          >
            →
          </button>
        </div>
      )}
    </article>
  );
}