import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Carousel from "@/components/carousel";
import { products } from "@/data/products";

export default async function Home() {
  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-8 sm:px-16 max-w-6xl">
          {/* Left: Text Content */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Welcome to My Ecommerce
            </h2>
            <p className="text-neutral-600">
              Discover the latest products at the best prices.
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
            >
              <Link href="/products" className="inline-flex items-center justify-center rounded-full px-6 py-3">
                Browse All Products
              </Link>
            </Button>
          </div>
          <Image
            alt="Hero Image"
            width={450}
            height={450}
            className="rounded mx-auto"
            src={products[0].image}
          ></Image>
        </div>
      </section>
      <section className="py-8">
        <Carousel></Carousel>
      </section>
    </div>
  );
}
