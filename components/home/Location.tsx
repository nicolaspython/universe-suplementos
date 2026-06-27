import { Clock, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Location() {
  const mapUrl = `https://maps.google.com/maps?q=${SITE_CONFIG.coordinates.lat},${SITE_CONFIG.coordinates.lng}&z=15&output=embed`;

  return (
    <section className="section-padding bg-dark-secondary" aria-labelledby="location-heading">
      <Container>
        <SectionHeader
          label="Localização"
          title="Visite nossa loja"
          description="Estamos na Av. Paulista, no coração de São Paulo."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-2xl border border-gray-border bg-dark p-6">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-white">Endereço</h3>
                <p className="mt-1 text-sm text-gray-muted">{SITE_CONFIG.address.full}</p>
                <p className="mt-1 text-sm text-gray-muted">CEP: {SITE_CONFIG.address.zip}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-gray-border bg-dark p-6">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-white">Horário</h3>
                <p className="mt-1 text-sm text-gray-muted">{SITE_CONFIG.hours.weekdays}</p>
                <p className="text-sm text-gray-muted">{SITE_CONFIG.hours.saturday}</p>
                <p className="text-sm text-gray-muted">{SITE_CONFIG.hours.sunday}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-gray-border bg-dark p-6">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-white">Telefone</h3>
                <p className="mt-1 text-sm text-gray-muted">{SITE_CONFIG.phoneDisplay}</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-border">
            <iframe
              src={mapUrl}
              title="Mapa Universe Suplementos"
              className="h-[400px] w-full grayscale invert"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
