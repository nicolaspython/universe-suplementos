import { brands } from "@/data/brands";
import { BrandCard } from "@/components/cards/BrandCard";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Brands() {
  return (
    <section className="section-padding" aria-labelledby="brands-heading">
      <Container>
        <SectionHeader
          label="Marcas"
          title="As melhores marcas do mercado"
          description="Trabalhamos apenas com marcas certificadas e reconhecidas mundialmente."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </Container>
    </section>
  );
}
