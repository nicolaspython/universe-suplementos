import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/lib/products";
import { ProductCard } from "@/components/cards/ProductCard";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="section-padding bg-dark-secondary" aria-labelledby="featured-heading">
      <Container>
        <SectionHeader
          label="Destaques"
          title="Produtos em destaque"
          description="Os suplementos mais procurados pelos nossos clientes."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild>
            <Link href="/produtos">
              Ver todos os produtos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
