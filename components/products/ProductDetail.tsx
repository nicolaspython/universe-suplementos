import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import type { Product } from "@/types/product";
import { formatPrice, buildWhatsAppUrl, SITE_CONFIG } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const hasDiscount =
    product.originalPrice && product.originalPrice > product.price;
  const whatsappMessage = `Olá! Tenho interesse no ${product.name} (${formatPrice(product.price)}). Gostaria de mais informações.`;

  return (
    <Container>
      <Link
        href="/produtos"
        className="mb-8 inline-flex items-center gap-2 text-sm text-gray-muted transition-colors hover:text-gold"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Voltar para produtos
      </Link>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-3xl border border-gray-border bg-dark-secondary">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-10"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{product.brand}</Badge>
            {product.featured && <Badge variant="default">Destaque</Badge>}
            {product.inStock ? (
              <Badge variant="secondary">Em estoque</Badge>
            ) : (
              <Badge variant="sale">Indisponível</Badge>
            )}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {product.name}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-gray-muted">
            {product.longDescription}
          </p>

          <div className="mt-6 flex items-end gap-3">
            {hasDiscount && (
              <span className="text-lg text-gray-muted line-through">
                {formatPrice(product.originalPrice!)}
              </span>
            )}
            <span className="text-3xl font-bold text-gold">
              {formatPrice(product.price)}
            </span>
          </div>

          {(product.weight || product.flavor) && (
            <div className="mt-6 flex gap-4 text-sm text-gray-muted">
              {product.weight && <span>Peso: {product.weight}</span>}
              {product.flavor && <span>Sabor: {product.flavor}</span>}
            </div>
          )}

          <ul className="mt-8 space-y-3">
            {product.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm text-white/90">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="whatsapp" className="flex-1">
              <a
                href={buildWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Comprar via WhatsApp
              </a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-gray-muted">
            Atendimento: {SITE_CONFIG.phoneDisplay} · {SITE_CONFIG.hours.weekdays}
          </p>
        </div>
      </div>
    </Container>
  );
}
