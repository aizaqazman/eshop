"use client";

import Image from "next/image";
import { Product } from "@/data/products";
import { Button } from "./ui/button";
import { useCartStore } from "../../store/cart-store";

interface Props {
  product: Product;
}

export const ProductDetail = ({ product }: Props) => {
  const { items, addItem, removeItem } = useCartStore();
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      imageUrl: product.image ?? null,
      quantity: 1,
    })
  }
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center">
      {product.image && (
        <div className="relative h-96 w-full md:w-1/2 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.title as string}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-500 ease-in-out"
          />
        </div>
      )}

      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        {product.description && (
          <p className="text-sm text-gray-600">{product.description}</p>
        )}
        <p className="text-sm text-gray-600">RM {product.price}</p>
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => removeItem(product.id)}>-</Button>
          <span className="text-lg font-semibold">{quantity}</span>
          <Button onClick={onAddItem}>+</Button>
        </div>
      </div>
    </div>
  );
};
