"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, SITE_CONFIG } from "@/lib/constants";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
}

export function WhatsAppButton({
  message = "Olá! Gostaria de saber mais sobre os produtos da Universe Suplementos.",
  label = "Fale conosco pelo WhatsApp",
}: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40"
      aria-label={label}
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
      <span className="sr-only">{SITE_CONFIG.phoneDisplay}</span>
    </a>
  );
}
