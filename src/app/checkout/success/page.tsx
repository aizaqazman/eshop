"use client";

import { useEffect } from "react";
import { useCartStore } from "../../../../store/cart-store";
import Link from "next/link";

export default function SuccessPage() {
  const clearItem = useCartStore((state) => state.clearItem);

  useEffect(() => {
    clearItem(); 
  }, [clearItem]);

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
      <p className="mb-4">Your order is being processed.</p>
      <Link href="/products" className="text-blue-600 hover:underline">
      Continue Shopping
      </Link>
    </div>
  );
}
