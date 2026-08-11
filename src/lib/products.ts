export const CHECKOUT_URL =
  "https://www.flipkart.com/product/p/itme?pid=BDGHPM38CKXMSRQH&lid=LSTBDGHPM38CKXMSRQHY9WOK3&_refId=&_appId=WA";

export type Product = {
  id: string;
  name: string;
  age: string;
  price: string;
  mrp: string;
  tag: string;
  badge: string | null;
  reviews: number;
  image: string;
};

export const products: Product[] = [
  {
    id: "memory-match",
    name: "Memory Match",
    age: "Ages 3+",
    price: "₹499",
    mrp: "₹699",
    tag: "Intuitive",
    badge: "Bestseller",
    reviews: 24,
    image: "/products/memory-match.png",
  },
  {
    id: "cosmic-puzzle-set",
    name: "Cosmic Puzzle Set",
    age: "Ages 4–8",
    price: "₹449",
    mrp: "₹599",
    tag: "Puzzles",
    badge: "New",
    reviews: 8,
    image: "/products/cosmic-puzzle-set.png",
  },
  {
    id: "magnetic-chess-pro",
    name: "Magnetic Chess Pro",
    age: "Ages 6+",
    price: "₹479",
    mrp: "₹649",
    tag: "Smart Chess",
    badge: null,
    reviews: 12,
    image: "/products/magnetic-chess-pro.png",
  },
  {
    id: "logic-blocks",
    name: "Logic Blocks",
    age: "Ages 3–6",
    price: "₹399",
    mrp: "₹549",
    tag: "Intuitive",
    badge: null,
    reviews: 5,
    image: "/products/logic-blocks.png",
  },
  {
    id: "pattern-master",
    name: "Pattern Master",
    age: "Ages 5–10",
    price: "₹429",
    mrp: "₹579",
    tag: "Puzzles",
    badge: "New",
    reviews: 3,
    image: "/products/pattern-master.png",
  },
  {
    id: "junior-strategist",
    name: "Junior Strategist",
    age: "Ages 7+",
    price: "₹469",
    mrp: "₹629",
    tag: "Smart Chess",
    badge: null,
    reviews: 7,
    image: "/products/junior-strategist.png",
  },
  {
    id: "tactile-explorer",
    name: "Tactile Explorer",
    age: "Ages 3–5",
    price: "₹419",
    mrp: "₹549",
    tag: "Intuitive",
    badge: null,
    reviews: 4,
    image: "/products/tactile-explorer.png",
  },
];

export const categories = [
  {
    id: "puzzles",
    title: "Puzzles",
    subtitle: "Pieces that teach patience",
    image: "/products/cosmic-puzzle-set.png",
  },
  {
    id: "chess",
    title: "Smart Chess",
    subtitle: "Strategy meets intuition",
    image: "/products/magnetic-chess-pro.png",
  },
  {
    id: "intuitive",
    title: "Intuitive Games",
    subtitle: "Learn by playing",
    image: "/products/memory-match.png",
  },
] as const;

export const PRODUCT_TAGS = [...new Set(products.map((p) => p.tag))];

export function filterProducts(query: string, tag: string | "all"): Product[] {
  const q = query.trim().toLowerCase();
  return products.filter((p) => {
    const matchesTag = tag === "all" || p.tag === tag;
    if (!matchesTag) return false;
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.tag.toLowerCase().includes(q) ||
      p.age.toLowerCase().includes(q) ||
      (p.badge && p.badge.toLowerCase().includes(q))
    );
  });
}
