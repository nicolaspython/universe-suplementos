import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/types/category";
import { Card } from "@/components/ui/Card";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/produtos?categoria=${category.id}`} className="group block">
      <Card className="overflow-hidden hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
        <div className="relative aspect-[4/3] overflow-hidden bg-dark-tertiary">
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-gold">
            {category.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-gray-muted">
            {category.description}
          </p>
          <p className="mt-3 text-xs font-medium text-gold">
            {category.productCount} produtos
          </p>
        </div>
      </Card>
    </Link>
  );
}
