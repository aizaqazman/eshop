"use client";

import { Product } from "@/data/products";
import { ProductCard } from "./product-card";
import { useState } from "react";

interface Props {
  products: Product[];
}

export const ProductList = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("")

  const fillteredProduct = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.title.toLowerCase().includes(term);
    const descriptionMatch = product.description ? product.description.toLowerCase().includes(term) : false;

    return nameMatch || descriptionMatch;
  });

  return (
    <div className="px-4 sm:px-8">
      <div className="flex justify-center items-center my-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full max-w-md p-2 border border-gray-300 rounded-2xl"
        />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {fillteredProduct.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
