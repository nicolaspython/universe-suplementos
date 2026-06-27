export const SITE_CONFIG = {
  name: "Universe Suplementos",
  description:
    "Suplementos premium para performance, saúde e bem-estar. Whey, creatina, pré-treino e muito mais com atendimento especializado.",
  url: "https://universesuplementos.com.br",
  phone: "5511999999999",
  phoneDisplay: "(11) 99999-9999",
  email: "contato@universesuplementos.com.br",
  instagram: "https://instagram.com/universesuplementos",
  address: {
    street: "Av. Paulista, 1000",
    neighborhood: "Bela Vista",
    city: "São Paulo",
    state: "SP",
    zip: "01310-100",
    full: "Av. Paulista, 1000 — Bela Vista, São Paulo — SP",
  },
  hours: {
    weekdays: "Seg–Sex: 9h às 20h",
    saturday: "Sáb: 9h às 18h",
    sunday: "Dom: Fechado",
  },
  coordinates: {
    lat: -23.561414,
    lng: -46.655881,
  },
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE_CONFIG.phone}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
