"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getAllProducts } from "@/lib/products";
import { ProductFilters } from "@/components/products/ProductFilters";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Container } from "@/components/ui/Container";

export function ProductsPageContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categoria") ?? "all";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);

  const filteredProducts = useMemo(() => {
    const all = getAllProducts();
    const normalizedSearch = search.toLowerCase().trim();

    return all.filter((product) => {
      const matchesCategory = category === "all" || product.categoryId === category;
      const matchesSearch =
        !normalizedSearch ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.brand.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <Container>
      <ProductFilters
        search={search}
        category={category}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        resultCount={filteredProducts.length}
      />
      <div className="mt-8">
        <ProductGrid products={filteredProducts} />
      </div>
    </Container>
  );
}
