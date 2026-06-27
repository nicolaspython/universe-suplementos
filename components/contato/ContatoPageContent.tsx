"use client";

import { Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function ContatoPageContent() {
  return (
    <div className="section-padding pt-32">
      <Container>
        <SectionHeader
          label="Contato"
          title="Fale conosco"
          description="Estamos prontos para ajudar. Escolha o canal de sua preferência."
          align="left"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <a
              href={buildWhatsAppUrl("Olá! Gostaria de entrar em contato.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-gray-border bg-dark-secondary p-6 transition-all hover:border-[#25D366]/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                <Phone className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-white">WhatsApp</h3>
                <p className="text-sm text-gray-muted">{SITE_CONFIG.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-gray-border bg-dark-secondary p-6 transition-all hover:border-gold/30"
              aria-label="Instagram Universe Suplementos"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Instagram</h3>
                <p className="text-sm text-gray-muted">@universesuplementos</p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-gray-border bg-dark-secondary p-6">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-white">Endereço</h3>
                <p className="mt-1 text-sm text-gray-muted">{SITE_CONFIG.address.full}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-border bg-dark-secondary p-6">
              <h3 className="font-semibold text-white">Horário de funcionamento</h3>
              <ul className="mt-3 space-y-1 text-sm text-gray-muted">
                <li>{SITE_CONFIG.hours.weekdays}</li>
                <li>{SITE_CONFIG.hours.saturday}</li>
                <li>{SITE_CONFIG.hours.sunday}</li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-border">
              <iframe
                src={`https://maps.google.com/maps?q=${SITE_CONFIG.coordinates.lat},${SITE_CONFIG.coordinates.lng}&z=15&output=embed`}
                title="Mapa Universe Suplementos"
                className="h-[300px] w-full grayscale invert"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-2xl border border-gray-border bg-dark-secondary p-8">
            <h3 className="text-xl font-semibold text-white">Envie uma mensagem</h3>
            <p className="mt-2 text-sm text-gray-muted">
              Preencha o formulário e entraremos em contato em breve.
            </p>

            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Formulário de contato"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                  Nome
                </label>
                <Input id="name" name="name" placeholder="Seu nome completo" required />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                  E-mail
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
                  Telefone
                </label>
                <Input id="phone" name="phone" type="tel" placeholder="(11) 99999-9999" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  required
                  className="flex w-full rounded-lg border border-gray-border bg-dark px-4 py-3 text-sm text-white placeholder:text-gray-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
                />
              </div>
              <Button type="submit" className="w-full">
                <Send className="h-4 w-4" aria-hidden="true" />
                Enviar mensagem
              </Button>
            </form>

            <p className="mt-4 flex items-center gap-2 text-xs text-gray-muted">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {SITE_CONFIG.email}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
