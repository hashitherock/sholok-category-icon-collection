import { BRAND_COLOR, type Category } from "@/data/categories";

export function CategoryIcon({ category, className }: { category: Category; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke={BRAND_COLOR}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="img"
      aria-label={category.name}
      dangerouslySetInnerHTML={{ __html: category.body }}
    />
  );
}
