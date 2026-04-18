import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Главная", href: "/" },
  { label: "О нас", href: "/aboutus" },
  {
    label: "Услуги",
    href: "/services",
    submenu: [
{ label: "Капельницы", href: "/services/drips" },
{ label: "Лазерное удаление новообразований", href: "/services/laser-removal" },
{ label: "Сдача анализов", href: "/services/lab" },
{ label: "Прием гинеколога", href: "/services/gynecology" },
{ label: "Прием кардиолога", href: "/services/cardiology" },
{ label: "Прием онколога", href: "/services/oncology" },
{ label: "Прием оториноларинголога", href: "/services/lor" },
{ label: "Прием травматолога", href: "/services/traumatology" },
{ label: "Радиоволновое удаление родинок", href: "/services/radiowave" },
{ label: "Услуги косметолога", href: "/services/cosmetology" },
    ],
  },
  { label: "Контакты", href: "/contact" },
];
