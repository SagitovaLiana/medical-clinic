import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Главная", href: "/" },
  { label: "О нас", href: "/aboutus" },
  {
    label: "Услуги",
    href: "/services",
    submenu: [
      { label: "Радиоволновое удаление родинок", href: "/services/radiowave" },
      { label: "Услуги косметолога", href: "/services/cosmetology" },
      { label: "Прием гинеколога", href: "/services/gynecology" },
      { label: "Прием травматолога", href: "/services/traumatology" },
             { label: "Прием оториноларинголога", href: "/services/lor" },
             { label: "Сдача анализов", href: "/services/lab" },
      { label: "Капельницы", href: "/services/drips" },
    ],
  },
  { label: "Контакты", href: "/contact" },
];
