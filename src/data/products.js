export const PRODUCTS = [
  // Apparel — Pants
  {
    id: "classic-chinos",
    name: "Classic Chinos",
    price: 49.0,
    oldPrice: 69.0,
    rating: 4.5,
    reviews: 98,
    colors: ["Khaki", "Navy", "Black"],
    sizes: ["S", "M", "L", "XL"],
    tag: "Sale",
    category: "Pants",
    brand: "Levi's",
    image: "https://images.unsplash.com/photo-1548883354-8858f2c2b4b3?auto=format&fit=crop&w=800&q=60",
    thumb: "https://images.unsplash.com/photo-1548883354-8858f2c2b4b3?auto=format&fit=crop&w=400&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1548883354-8858f2c2b4b3?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=800&q=60"
    ],
    description: "Tailored-fit chinos with stretch for everyday comfort and style.",
    features: ["Stretch cotton", "Tailored fit", "Durable stitching", "Machine washable"],
    inStock: true,
    stockCount: 60
  },
  // Apparel — Shirts
  {
    id: "oxford-shirt",
    name: "Oxford Cotton Shirt",
    price: 39.0,
    oldPrice: 0,
    rating: 4.4,
    reviews: 76,
    colors: ["White", "Blue", "Black"],
    sizes: ["S", "M", "L", "XL"],
    tag: "Bestseller",
    category: "Shirts",
    brand: "H&M",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=60",
    thumb: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=400&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=60"
    ],
    description: "Crisp oxford shirt with button-down collar for smart-casual looks.",
    features: ["100% cotton", "Button-down collar", "Chest pocket", "Regular fit"],
    inStock: true,
    stockCount: 80
  },
  // Apparel — Shorts
  {
    id: "summer-shorts",
    name: "Summer Stretch Shorts",
    price: 29.0,
    oldPrice: 39.0,
    rating: 4.3,
    reviews: 54,
    colors: ["Beige", "Navy", "Olive"],
    sizes: ["S", "M", "L", "XL"],
    tag: "Trending",
    category: "Shorts",
    brand: "Zara",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=60",
    thumb: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&w=800&q=60"
    ],
    description: "Lightweight shorts with stretch for breathable summer comfort.",
    features: ["Breathable fabric", "Stretch waist", "Above-knee length", "Casual fit"],
    inStock: true,
    stockCount: 90
  },
  // Apparel — T-Shirts
  {
    id: "premium-tee",
    name: "Premium Cotton T-Shirt",
    price: 19.0,
    oldPrice: 0,
    rating: 4.6,
    reviews: 142,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
    tag: "Popular",
    category: "T-Shirts",
    brand: "Uniqlo",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=60",
    thumb: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=800&q=60"
    ],
    description: "Soft, heavyweight cotton tee with a clean silhouette and durable collar.",
    features: ["Heavyweight cotton", "Ribbed collar", "Regular fit", "Pre-shrunk"],
    inStock: true,
    stockCount: 120
  },
  // Apparel — More additions
  {
    id: "linen-shirt",
    name: "Linen Button-Up Shirt",
    price: 45.0,
    oldPrice: 0,
    rating: 4.5,
    reviews: 65,
    colors: ["White", "Beige", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    tag: "New",
    category: "Shirts",
    brand: "Zara",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=70",
    thumb: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=70",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=800&q=70"
    ],
    description: "Breathable linen shirt ideal for warm weather and layered looks.",
    features: ["100% linen", "Relaxed fit", "Button cuffs", "Breathable"],
    inStock: true,
    stockCount: 70
  },
  {
    id: "slim-fit-pants",
    name: "Slim Fit Dress Pants",
    price: 59.0,
    oldPrice: 79.0,
    rating: 4.6,
    reviews: 88,
    colors: ["Black", "Gray", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    tag: "Sale",
    category: "Pants",
    brand: "H&M",
    image: "https://images.unsplash.com/photo-1548883354-8858f2c2b4b3?auto=format&fit=crop&w=800&q=70",
    thumb: "https://images.unsplash.com/photo-1548883354-8858f2c2b4b3?auto=format&fit=crop&w=400&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1548883354-8858f2c2b4b3?auto=format&fit=crop&w=800&q=70",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=70"
    ],
    description: "Sharp slim-fit pants with stretch for all-day comfort at work or events.",
    features: ["Stretch blend", "Slim fit", "Crease resistant", "Machine washable"],
    inStock: true,
    stockCount: 65
  }
];

export const CATEGORIES = [
  { id: "all", name: "All Products", count: PRODUCTS.length },
  { id: "pants", name: "Pants", count: PRODUCTS.filter(p => p.category === "Pants").length },
  { id: "shirts", name: "Shirts", count: PRODUCTS.filter(p => p.category === "Shirts").length },
  { id: "shorts", name: "Shorts", count: PRODUCTS.filter(p => p.category === "Shorts").length },
  { id: "tshirts", name: "T-Shirts", count: PRODUCTS.filter(p => p.category === "T-Shirts").length }
];

export const BRANDS = [
  "Levi's", "H&M", "Zara", "Uniqlo"
];

export const REVIEWS = [
  // Reviews can be added here for apparel items as needed
];
