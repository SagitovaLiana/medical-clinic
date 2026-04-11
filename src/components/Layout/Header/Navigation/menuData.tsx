import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Главная", href: "/" },
  { label: "О нас", href: "/" },
  {
    label: "Услуги",
    href: "/blog",
    submenu: [
      { label: "Родинки удалить", href: "/blog" },
      { label: "Консультация специалиста", href: "/blog/blog_1" },
    ],
  },
  { label: "Контакты", href: "/contact" },
];
