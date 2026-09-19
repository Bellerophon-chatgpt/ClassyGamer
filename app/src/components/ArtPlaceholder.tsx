interface ArtPlaceholderProps {
  label?: string;
  className?: string;
}

/** Stand-in for the prototype's `<image-slot>` drop zones — replace with real cover/key-art `<img>`s from the CMS. */
export function ArtPlaceholder({ label = 'art', className }: ArtPlaceholderProps) {
  return (
    <div className={`cg-art-slot${className ? ` ${className}` : ''}`}>
      <span className="cg-art-slot-label">{label}</span>
    </div>
  );
}
