// src/app/products/[id]/page.tsx
import { ProductDetail } from "@/components/product-detail";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default async function ProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  const plaintProduct = JSON.parse(JSON.stringify(product));
  return <ProductDetail product={plaintProduct} />;
}
