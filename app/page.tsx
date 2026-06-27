import { Hero } from "@/components/hero/Hero";
import { Categories } from "@/components/home/Categories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Brands } from "@/components/home/Brands";
import { AboutSection } from "@/components/home/AboutSection";
import { Testimonials } from "@/components/home/Testimonials";
import { Gallery } from "@/components/home/Gallery";
import { FAQ } from "@/components/home/FAQ";
import { Location } from "@/components/home/Location";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Brands />
      <AboutSection />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Location />
      <CTA />
    </>
  );
}
