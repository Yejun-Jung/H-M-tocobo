const img = (path) => `/img/${path}`;
export const categories = [
  {
    id: 61,
    slug: "make-up",
    name: "의류",
    href: "/category/cloth/61/",
    img: {
      src: img("cate-1.png"),
      alt: "의류",
    },
  },
  {
    id: 42,
    slug: "sun",
    name: "슈즈",
    href: "/category/shoes/42/",
    img: {
      src: img("cate-2.png"),

      alt: "슈즈",
    },
  },
  {
    id: 52,
    slug: "lip",
    name: "스포츠",
    href: "/category/sports/52/",
    img: {
      src: img("cate-3.png"),

      alt: "스포츠",
    },
  },
  {
    id: 50,
    slug: "skincare",
    name: "아동",
    href: "/category/kids/50/",
    img: {
      src: img("cate-4.png"),

      alt: "아동",
    },
  },
  {
    id: 47,
    slug: "cleansing",
    name: "잠옷",
    href: "/category/pajama/47/",
    img: {
      src: img("cate-5.png"),

      alt: "잠옷",
    },
  },
  {
    id: 28,
    slug: "setetc",
    name: "액세서리",
    href: "/category/accessory/28/",
    img: {
      src: img("cate-6.png"),

      alt: "액세서리",
    },
  },
];

export default categories;