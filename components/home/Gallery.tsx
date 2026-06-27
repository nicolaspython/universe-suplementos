import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const galleryImages = [
  { src: "/gallery/store-1.svg", alt: "Interior da loja Universe Suplementos" },
  { src: "/gallery/store-2.svg", alt: "Prateleiras com suplementos premium" },
  { src: "/gallery/store-3.svg", alt: "Área de atendimento personalizado" },
  { src: "/gallery/store-4.svg", alt: "Vitrine de produtos em destaque" },
  { src: "/gallery/store-5.svg", alt: "Equipe Universe Suplementos" },
  { src: "/gallery/store-6.svg", alt: "Detalhe da loja física" },
];

export function Gallery() {
  return (
    <section className="section-padding bg-dark-secondary" aria-labelledby="gallery-heading">
      <Container>
        <SectionHeader
          label="Galeria"
          title="Conheça nossa loja"
          description="Ambiente premium pensado para a melhor experiência de compra."
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl bg-dark-tertiary ${
                index === 0 ? "col-span-2 row-span-2 aspect-square lg:aspect-auto lg:min-h-[400px]" : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
