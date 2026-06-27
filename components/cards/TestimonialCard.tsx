import Image from "next/image";
import { Star } from "lucide-react";
import type { Testimonial } from "@/types/testimonial";
import { Card, CardContent } from "@/components/ui/Card";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full hover:border-gold/20">
      <CardContent className="flex h-full flex-col p-6">
        <div className="mb-4 flex gap-1" aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
          ))}
        </div>
        <blockquote className="flex-1 text-sm leading-relaxed text-white/90">
          &ldquo;{testimonial.content}&rdquo;
        </blockquote>
        <div className="mt-6 flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-dark-tertiary">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{testimonial.name}</p>
            <p className="text-xs text-gray-muted">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
