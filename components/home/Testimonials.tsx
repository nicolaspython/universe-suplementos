import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Testimonials() {
  return (
    <section className="section-padding" aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeader
          label="Depoimentos"
          title="O que nossos clientes dizem"
          description="Resultados reais de quem confia na Universe Suplementos."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
