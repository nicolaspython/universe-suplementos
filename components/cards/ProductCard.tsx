import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types/product";
import { formatPrice, buildWhatsAppUrl } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount =
    product.originalPrice && product.originalPrice > product.price;
  const whatsappMessage = `Olá! Tenho interesse no ${product.name} (${formatPrice(product.price)}).`;

  return (
    <Card className="group overflow-hidden hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
      <Link href={`/produtos/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-dark-tertiary">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          />
          {product.featured && (
            <Badge className="absolute left-4 top-4" variant="default">
              Destaque
            </Badge>
          )}
          {hasDiscount && (
            <Badge className="absolute right-4 top-4" variant="sale">
              Promoção
            </Badge>
          )}
        </div>
      </Link>

      <CardContent className="space-y-4 p-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-gold">
            {product.brand}
          </p>
          <Link href={`/produtos/${product.slug}`}>
            <h3 className="mt-1 text-base font-semibold text-white transition-colors group-hover:text-gold">
              {product.name}
            </h3>
          </Link>
          <p className="mt-2 line-clamp-2 text-sm text-gray-muted">
            {product.description}
          </p>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div>
            {hasDiscount && (
              <span className="text-xs text-gray-muted line-through">
                {formatPrice(product.originalPrice!)}
              </span>
            )}
            <p className="text-lg font-bold text-white">{formatPrice(product.price)}</p>
          </div>
          <Link
            href={`/produtos/${product.slug}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-border text-gray-muted transition-all hover:border-gold hover:text-gold"
            aria-label={`Ver detalhes de ${product.name}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link href={`/produtos/${product.slug}`}>Detalhes</Link>
          </Button>
          <Button asChild variant="whatsapp" size="sm" className="flex-1">
            <a
              href={buildWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
