import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="section-padding" aria-labelledby="cta-heading">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-dark-secondary via-dark-tertiary to-dark p-10 sm:p-16 lg:p-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,175,55,0.1)_0%,_transparent_60%)]" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2
              id="cta-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Pronto para elevar sua performance?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-muted sm:text-lg">
              Fale com nossa equipe e monte seu stack ideal com orientação
              especializada.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="whatsapp">
                <a
                  href={buildWhatsAppUrl("Olá! Quero montar meu stack de suplementos.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/produtos">
                  Ver Produtos
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
