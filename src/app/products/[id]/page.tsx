// app/products/[id]/page.tsx
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";
import { products } from "@/data/products";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound(); // Show 404 if not found
  }

  return <ProductDetail product={product} />;
}
