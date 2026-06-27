"use client";

import { Search } from "lucide-react";
import { categories } from "@/data/categories";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

interface ProductFiltersProps {
  search: string;
  category: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  resultCount: number;
}

export function ProductFilters({
  search,
  category,
  onSearchChange,
  onCategoryChange,
  resultCount,
}: ProductFiltersProps) {
  return (
    <div className="space-y-6">
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-muted"
          aria-hidden="true"
        />
        <Input
          type="search"
          placeholder="Buscar produtos..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-11"
          aria-label="Buscar produtos por nome"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onCategoryChange("all")}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-all",
            category === "all"
              ? "bg-gold text-dark"
              : "border border-gray-border text-gray-muted hover:border-gold/40 hover:text-white",
          )}
        >
          Todos
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => onCategoryChange(cat.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              category === cat.id
                ? "bg-gold text-dark"
                : "border border-gray-border text-gray-muted hover:border-gold/40 hover:text-white",
            )}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-muted">
        {resultCount} {resultCount === 1 ? "produto encontrado" : "produtos encontrados"}
      </p>
    </div>
  );
}
