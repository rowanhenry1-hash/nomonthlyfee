import type { FreeType } from "../data/services";

const config: Record<FreeType, { label: string; className: string }> = {
  "always-free":   { label: "Always Free",    className: "bg-green-100 text-green-700" },
  "free-with-ads": { label: "Free with Ads",  className: "bg-amber-100 text-amber-700" },
  "free-tier":     { label: "Free Tier",      className: "bg-blue-100 text-blue-700" },
  "library-card":  { label: "Library Card",   className: "bg-purple-100 text-purple-700" },
};

export default function FreeTypeBadge({ type }: { type: FreeType }) {
  const { label, className } = config[type];
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}>
      {label}
    </span>
  );
}
