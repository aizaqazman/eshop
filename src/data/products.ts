export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: "PS5 DualSense Controller",
    description: "Next-gen wireless controller for PS5",
    image: "/ps5.png",
    price: 2500,
  },
  {
    id: 2,
    title: "Xbox Series X",
    description: "Fastest, most powerful Xbox ever",
    image: "/xbox.jpg",
    price: 1500,
  },
  {
    id: 3,
    title: "Nintendo Switch OLED",
    description: "Vivid gaming on the go",
    image: "/switch.jpg",
    price: 2000,
  },
  {
    id: 4,
    title: "Logitech G Pro X Headset",
    description: "High-performance gaming headset with Blue VO!CE mic",
    image: "/logitech-headset.jpg",
    price: 850,
  },
  {
    id: 5,
    title: "Razer DeathAdder V2",
    description: "Ergonomic wired gaming mouse with optical switches",
    image: "/razer-mouse.jpg",
    price: 320,
  },
  {
    id: 6,
    title: "Corsair K95 RGB Platinum",
    description: "Mechanical gaming keyboard with dynamic lighting",
    image: "/corsair-keyboard.jpg",
    price: 790,
  },
  {
    id: 7,
    title: "Steam Deck 512GB",
    description: "Portable PC gaming console by Valve",
    image: "/steam-deck.jpg",
    price: 2700,
  },
  {
    id: 8,
    title: "ASUS ROG Strix G15 Laptop",
    description: "Gaming laptop with RTX 3060 & Ryzen 7",
    image: "/rog-strix-g15.jpg",
    price: 5800,
  },
  {
    id: 9,
    title: "Elgato Stream Deck MK.2",
    description: "Customizable control pad for streamers",
    image: "/elgato-stream-deck.jpg",
    price: 950,
  },
];
