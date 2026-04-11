import { EarIcon, HeartIcon } from "lucide-react";

export const doctors = [
  {
    id: 1,
    src: "/images/doctors/doc-sayapov.jpg",
    alt: "Саяпов Азат Глимзянович",
    name: "Саяпов Азат Глимзянович",
    designation: "Травматолог",
  },
  {
    id: 2,
    src: "/images/doctors/doc-valieva.jpg",
    alt: "Валиева Гузель Кавиевна",
    name: "Валиева Гузель Кавиевна",
    designation: "Акушер-гинеколог",
  },
  {
    id: 3,
    src: "/images/doctors/doc-golkov.jpg",
    alt: "Голков Семен Владимирович",
    name: "Голков Семен Владимирович",
    designation: "Хирург",
  },
  {
    id: 4,
    src: "/images/doctors/doc-zaharova.jpg",
    alt: "Захарова Лилия Насиховна",
    name: "Захарова Лилия Насиховна",
    designation: "Хирург-косметолог",
  },
  {
    id: 5,
    src: "/images/doctors/doc-saytaeva.jpg",
    alt: "Сайтаева Юлия Юрьевна",
    name: "Сайтаева Юлия Юрьевна",
    designation: "Педиатор",
  },
  {
    id: 6,
    src: "/images/doctors/doc-saytaeva.jpg",
    alt: "Сайтаева Юлия Юрьевна",
    name: "Сайтаева Юлия Юрьевна",
    designation: "Педиатор",
  },
];

export const conferences = [
  {
    title: "Прием оториноларинголога",
    icon: EarIcon,
    subtitle: "Прием ведет",
    speakers: "Чекмарев Алим Равилевич",
    buttonText: "Подробнее",
    buttonLink: "/",
  },
  {
    title: "Прием гинеколога",
    icon: HeartIcon,
    subtitle: "Прием ведет",
    speakers: "Валиева Гузель Кавиевна",
    buttonText: "Подробнее",
    buttonLink: "/",
  },
  {
    title: "Сдача анализов",
    icon: HeartIcon,
    subtitle: "Лаборатория",
    speakers: "KDL",
    buttonText: "Подробнее",
    buttonLink: "/",
  },
];

export const intermissions = [
  {
    title: "Coffee Break",
    image: "/images/upcoming/alarm.svg", // Path to the coffee break image
    time: "10:00 - 10:30", // Time for the coffee break
  },
  {
    title: "Lunch Time",
    image: "/images/upcoming/alarm.svg", // Path to the lunch break image
    time: "12:30 - 13:30", // Time for the lunch break
  },
];
