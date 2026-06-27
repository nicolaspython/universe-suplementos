import Image from "next/image";
import type { Brand } from "@/types/brand";

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="group flex flex-col items-center justify-center rounded-2xl border border-gray-border bg-dark-secondary p-8 transition-all duration-300 hover:border-gold/30 hover:bg-dark-tertiary">
      <div className="relative h-12 w-32 opacity-60 transition-opacity duration-300 group-hover:opacity-100">
        <Image
          src={brand.logo}
          alt={`Logo ${brand.name}`}
          fill
          sizes="128px"
          className="object-contain"
        />
      </div>
      <p className="mt-4 text-center text-xs text-gray-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {brand.description}
      </p>
    </div>
  );
}
