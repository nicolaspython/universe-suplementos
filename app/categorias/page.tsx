import type { Metadata } from "next";
import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Categorias",
  description:
    "Navegue por categorias de suplementos: whey protein, creatina, pré-treino, vitaminas e aminoácidos.",
  openGraph: {
    title: "Categorias | Universe Suplementos",
    description: "Encontre o suplemento ideal navegando por categorias.",
  },
};

export default function CategoriasPage() {
  return (
    <div className="section-padding pt-32">
      <Container>
        <SectionHeader
          label="Categorias"
          title="Explore por categoria"
          description="Cada categoria foi curada para atender objetivos específicos de performance e saúde."
          align="left"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </div>
  );
}
