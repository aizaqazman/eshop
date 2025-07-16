import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Product } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="hover:shadow-amber-600">
        {product.image && (
          <div className="relative h-80 w-full">
            <Image
              src={product.image}
              alt={product.title as string}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500 ease-in-out"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle>{product.title}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">RM {product.price}</p>
          <Button className="mt-4 cursor-pointer">View Details</Button>
        </CardContent>
      </Card>
    </Link>
  );
};
