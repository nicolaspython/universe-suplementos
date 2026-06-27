import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductsPageContent } from "@/components/products/ProductsPageContent";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Explore nossa linha completa de suplementos: whey, creatina, pré-treino, vitaminas e aminoácidos.",
  openGraph: {
    title: "Produtos | Universe Suplementos",
    description:
      "Explore nossa linha completa de suplementos premium com as melhores marcas.",
  },
};

export default function ProdutosPage() {
  return (
    <div className="section-padding pt-32">
      <div className="container-custom mb-12 px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Catálogo"
          title="Nossos Produtos"
          description="Filtre por categoria ou busque pelo nome. Compre direto pelo WhatsApp."
          align="left"
        />
      </div>
      <Suspense fallback={<div className="container-custom px-4 py-20 text-gray-muted">Carregando...</div>}>
        <ProductsPageContent />
      </Suspense>
    </div>
  );
}
