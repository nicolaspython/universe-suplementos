import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a história, missão e valores da Universe Suplementos. Suplementos premium com atendimento especializado.",
  openGraph: {
    title: "Sobre | Universe Suplementos",
    description: "Nossa história, missão e valores.",
  },
};

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Democratizar o acesso a suplementos premium com orientação especializada, ajudando cada cliente a alcançar seus objetivos com segurança.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser referência em suplementação esportiva em São Paulo, reconhecida pela curadoria de produtos e excelência no atendimento.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Autenticidade, transparência, conhecimento e compromisso com resultados reais. Cada cliente é único e merece atenção personalizada.",
  },
];

const storePhotos = [
  { src: "/gallery/store-1.svg", alt: "Fachada da Universe Suplementos" },
  { src: "/gallery/store-2.svg", alt: "Interior premium da loja" },
  { src: "/gallery/store-3.svg", alt: "Área de atendimento" },
  { src: "/gallery/store-4.svg", alt: "Prateleiras organizadas" },
];

export default function SobrePage() {
  return (
    <div className="section-padding pt-32">
      <Container>
        <SectionHeader
          label="Sobre nós"
          title="Nossa história"
          description="Nascemos da paixão por fitness e da frustração com lojas que vendem produtos sem orientação."
          align="left"
        />

        <div className="prose prose-invert max-w-none">
          <div className="space-y-6 text-base leading-relaxed text-gray-muted">
            <p>
              A <strong className="text-white">Universe Suplementos</strong> surgiu em 2019
              com um propósito claro: oferecer suplementos 100% originais com o atendimento
              que atletas e entusiastas do fitness merecem.
            </p>
            <p>
              Fundada por praticantes de musculação e crossfit, entendemos que cada pessoa
              tem objetivos diferentes. Por isso, nossa equipe não apenas vende — orienta,
              explica e acompanha a jornada de cada cliente.
            </p>
            <p>
              Hoje, atendemos mais de 500 clientes ativos, com um catálogo curado das melhores
              marcas nacionais e internacionais, em um ambiente pensado para inspirar performance.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-border bg-dark-secondary p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeader
            label="Loja física"
            title="Conheça nosso espaço"
            description="Ambiente premium na Av. Paulista."
            align="left"
            className="mb-8"
          />

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {storePhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-square overflow-hidden rounded-2xl bg-dark-tertiary"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
