import { Award, Headphones, ShieldCheck, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const differentials = [
  {
    icon: ShieldCheck,
    title: "100% Originais",
    description: "Produtos certificados de distribuidores autorizados.",
  },
  {
    icon: Headphones,
    title: "Atendimento Especializado",
    description: "Equipe preparada para orientar sua suplementação.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Retirada na loja ou entrega na região metropolitana.",
  },
  {
    icon: Award,
    title: "Melhor Custo-Benefício",
    description: "Preços justos e promoções exclusivas.",
  },
];

export function AboutSection() {
  return (
    <section className="section-padding bg-dark-secondary" aria-labelledby="differentials-heading">
      <Container>
        <SectionHeader
          label="Diferenciais"
          title="Por que escolher a Universe?"
          description="Muito mais que uma loja de suplementos. Uma experiência completa."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-gray-border bg-dark p-8 transition-all duration-300 hover:border-gold/30"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
