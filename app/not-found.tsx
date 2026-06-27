import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center section-padding pt-32">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">404</p>
        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Página não encontrada</h1>
        <p className="mx-auto mt-4 max-w-md text-gray-muted">
          O conteúdo que você procura não existe ou foi movido.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Voltar para Home</Link>
        </Button>
      </Container>
    </div>
  );
}
