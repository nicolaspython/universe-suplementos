export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  categoryId: string;
  brand: string;
  image: string;
  images: string[];
  featured: boolean;
  inStock: boolean;
  weight?: string;
  flavor?: string;
  benefits: string[];
}
