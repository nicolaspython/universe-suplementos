import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

const footerLinks = {
  navegacao: [
    { href: "/", label: "Home" },
    { href: "/produtos", label: "Produtos" },
    { href: "/categorias", label: "Categorias" },
    { href: "/sobre", label: "Sobre" },
    { href: "/contato", label: "Contato" },
  ],
  categorias: [
    { href: "/produtos?categoria=whey", label: "Whey Protein" },
    { href: "/produtos?categoria=creatina", label: "Creatina" },
    { href: "/produtos?categoria=pre-treino", label: "Pré-Treino" },
    { href: "/produtos?categoria=vitaminas", label: "Vitaminas" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-gray-border bg-dark-secondary">
      <Container className="section-padding !py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-black tracking-tighter">UNIVERSE</span>
              <span className="ml-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Suplementos
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-muted">
              Suplementos premium para quem leva performance a sério. Atendimento
              especializado e produtos 100% originais.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Navegação
            </h3>
            <ul className="space-y-2">
              {footerLinks.navegacao.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Categorias
            </h3>
            <ul className="space-y-2">
              {footerLinks.categorias.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {SITE_CONFIG.address.full}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-muted">
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {SITE_CONFIG.phoneDisplay}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-muted">
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {SITE_CONFIG.email}
              </li>
              <li>
                <a
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-muted transition-colors hover:text-white"
                  aria-label="Instagram Universe Suplementos"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  @universesuplementos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-border pt-8 sm:flex-row">
          <p className="text-xs text-gray-muted">
            © {new Date().getFullYear()} Universe Suplementos. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-muted">
            Desenvolvido com performance em mente.
          </p>
        </div>
      </Container>
    </footer>
  );
}
