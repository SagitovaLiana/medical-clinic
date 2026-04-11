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
    buttonLink: "/services/lor",
  },
  {
    title: "Прием гинеколога",
    icon: HeartIcon,
    subtitle: "Прием ведет",
    speakers: "Валиева Гузель Кавиевна",
    buttonText: "Подробнее",
    buttonLink: "/services/gynecology",
  },
  {
    title: "Сдача анализов",
    icon: HeartIcon,
    subtitle: "Лаборатория",
    speakers: "KDL",
    buttonText: "Подробнее",
    buttonLink: "/services/lab",
  },
    {
    title: "Радиоволновое удаление родинок",
    icon: HeartIcon,
    subtitle: "Прием ведет",
    speakers: "Захарова Лилия Насиховна",
    buttonText: "Подробнее",
    buttonLink: "/services/radiowave",
  },
      {
    title: "Услуги косметолога",
    icon: HeartIcon,
    subtitle: "Прием ведет",
    speakers: "Захарова Лилия Насиховна",
    buttonText: "Подробнее",
    buttonLink: "/services/cosmetology",
  },
   {
    title: "Прием травматолога",
    icon: HeartIcon,
    subtitle: "Прием ведет",
    speakers: "Саяпов Азат Глимзянович",
    buttonText: "Подробнее",
    buttonLink: "/services/traumatology",
  },
     {
    title: "Капельницы",
    icon: HeartIcon,
    subtitle: "Прием ведет",
    speakers: "Саяпов Азат Глимзянович",
    buttonText: "Подробнее",
    buttonLink: "/services/drips",
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

export const testimonials = [
  {
    id: 1,
    name: "Иванова А.К.",
    title:"Я нашла своего врача",
    text: "Я очень долго искала врача на ведение беременности и была так рада найти Гузель Кавиевну. Сама клиника комфортная, удобно расположена и недалеко от центра! Спасибо большое за такой опыт",
    rating: 5,
    image: "/images/doctors/doc-valieva.jpg",
  },
  {
    id: 2,
    name: "Петрова Е.В.",
     title:"Я нашла своего врача",
    text: "Отличная клиника! Врачи профессионалы своего дела. Очень внимательное отношение к пациентам. Рекомендую!",
    rating: 5,
    image: "/images/doctors/doc-sayapov.jpg",
  },
  {
    id: 3,
    name: "Сидоров М.И.",
     title:"Я нашла своего врача",
    text: "Быстрое и качественное обслуживание. Современное оборудование. Спасибо доктору Голкову за профессиональную помощь!",
    rating: 4,
    image: "/images/doctors/doc-golkov.jpg",
  },
];