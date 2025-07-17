"use server";

import { redirect } from "next/navigation";

export const checkoutAction = async (formData: FormData): Promise<void> => {
  const itemsJson = formData.get("items") as string;
  if (!itemsJson) {
    throw new Error("No cart items found.");
  }

  const items = JSON.parse(itemsJson);

  console.log("Order placed:", items);

  redirect("/checkout/success");
};
