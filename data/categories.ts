import type { Category } from "@/types/category";

export const categories: Category[] = [
  {
    id: "whey",
    name: "Whey Protein",
    slug: "whey-protein",
    description: "Proteínas de alta absorção para ganho de massa e recuperação.",
    image: "/products/whey-isolado.svg",
    productCount: 3,
  },
  {
    id: "creatina",
    name: "Creatina",
    slug: "creatina",
    description: "Força, potência e performance em cada treino.",
    image: "/products/creatina.svg",
    productCount: 2,
  },
  {
    id: "pre-treino",
    name: "Pré-Treino",
    slug: "pre-treino",
    description: "Energia, foco e pump para treinos intensos.",
    image: "/products/pre-treino.svg",
    productCount: 2,
  },
  {
    id: "vitaminas",
    name: "Vitaminas",
    slug: "vitaminas",
    description: "Suporte nutricional completo para saúde e imunidade.",
    image: "/products/multivitaminico.svg",
    productCount: 2,
  },
  {
    id: "aminoacidos",
    name: "Aminoácidos",
    slug: "aminoacidos",
    description: "Recuperação muscular e redução da fadiga.",
    image: "/products/bcaa.svg",
    productCount: 1,
  },
];
