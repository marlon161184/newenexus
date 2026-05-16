interface ImagePlaceholderProps {
  src: string;
  alt?: string;
  className?: string;
  overlayOpacity?: number;
  overlay?: boolean;
}

/**
 * Renders a brand placeholder for /images/*.png paths that don't exist in the
 * project. Shows the filename in Space Mono on a neutral platinum surface.
 */
export function ImagePlaceholder({
  src,
  alt,
  className = "",
  overlay = false,
  overlayOpacity = 0.55,
}: ImagePlaceholderProps) {
  const filename = src.split("/").pop() ?? src;
  return (
    <div
      className={`relative w-full h-full bg-[#EBEBEB] flex items-center justify-center overflow-hidden ${className}`}
      role="img"
      aria-label={alt ?? filename}
    >
      <span className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
        {filename}
      </span>
      {overlay && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#0A0A0A", opacity: overlayOpacity }}
        />
      )}
    </div>
  );
}