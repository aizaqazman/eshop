import { ProductList } from "@/components/product-list";
import { products } from "@/data/products";

export default async function ProductsPage() {
  return (
    <div className="py-8 px-4 sm:px-8">
      <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
      <ProductList products={products}/>
    </div>
  );
}
