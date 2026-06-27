import type { Metadata } from "next";
import { ContatoPageContent } from "@/components/contato/ContatoPageContent";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Universe Suplementos. WhatsApp, Instagram, endereço e horário de funcionamento.",
  openGraph: {
    title: "Contato | Universe Suplementos",
    description: "Fale conosco pelo WhatsApp ou visite nossa loja na Av. Paulista.",
  },
};

export default function ContatoPage() {
  return <ContatoPageContent />;
}
