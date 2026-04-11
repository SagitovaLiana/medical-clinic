import React from "react";
import Image from "next/image";
import { 
  ZapIcon, 
  SparklesIcon,
  ClockIcon,
  HeartIcon,
  CircleCheckIcon,
  DropletIcon,
  ShieldCheckIcon,
  EyeIcon,
  SyringeIcon
} from "lucide-react";
import HeroSub from "@/components/Ui/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Косметология | Гиппократ",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Главная" },
    { href: "/services", text: "Услуги" },
    { href: "/services/cosmetology", text: "Косметология" },
  ];

  const services = [
    "Пилинги",
    "Контурная пластика лица",
    "Ботулинотерапия",
    "Плазмолифтинг",
    "Нитевой лифтинг (мезонити, коги)",
    "Биоревитализация",
    "Мезотерапия",
    "Инъекционная липолитическая терапия",
    "Коллагенотерапия",
  ];

  const treatments = [
    "Гипергидроз",
    "Акне",
    "Розацеа",
    "Гипертрофические рубцы",
    "Келоидные рубцы",
  ];

  return (
    <>
      <HeroSub
        title="Косметология"
        description="Естественное омоложение без «эффекта маски»"
        breadcrumbLinks={breadcrumbLinks}
      />
      
      <section className="dark:bg-darkmode py-10">
        <div className="container">
          {/* Основная информация - 2 колонки */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
            {/* Левая колонка - текст */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 py-2 rounded-full mb-6">
                <SparklesIcon className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium text-sm">Эстетическая косметология</span>
              </div>

              <p className="text-xl text-primary font-semibold mb-4">
                Естественное омоложение без «эффекта маски»
              </p>
              
              <p className="text-baseText dark:text-darktext dark:text-opacity-80 mb-6">
                В нашей клинике вы можете получить полный спектр косметологических услуг от опытных специалистов. 
  Используем только современные препараты и методики, прошедшие клинические испытания и имеющие 
  все необходимые сертификаты. Мы подбираем индивидуальную программу омоложения для каждой пациентки 
  с учётом особенностей кожи, возраста и желаемого результата. Все процедуры проводятся с соблюдением 
  высочайших стандартов безопасности и стерильности. Доверьте свою красоту профессионалам — 
  и результат превзойдёт ожидания!
              </p>
              
              <p className="text-lg font-semibold text-accentTextBrown dark:text-white mb-8">
                Индивидуальный подход к каждой пациентке
              </p>
              
              <a
                href="tel:+73478436117"
                title="Позвонить +7 (34784) 3-61-17"
                className="btn btn-1 rounded-lg overflow-hidden inline-flex items-center gap-2 hover-filled-slide-down"
              >
                <span className="!flex !items-center gap-2">
                  Записаться на консультацию
                </span>
              </a>
            </div>

            {/* Правая колонка - фото */}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="relative lg:flex hidden"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/doctors/doc-zaharova.jpg"
                  alt="Косметологические процедуры"
                  width={600}
                  height={500}
                  quality={100}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Косметологические услуги */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mb-16"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-accentTextBrown dark:text-white mb-4">
                Косметологические услуги
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {services.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 50}
                  className="flex items-center gap-2 bg-white dark:bg-darkmode rounded-xl p-3 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <CircleCheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-baseText dark:text-darktext">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Преимущества косметологии */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 text-center shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                Естественный результат
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Без "эффекта маски", сохраняем природную красоту и индивидуальность
              </p>
            </div>
            
            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 text-center shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                Безопасные препараты
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Используем только сертифицированные препараты ведущих производителей
              </p>
            </div>
            
            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 text-center shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                Быстрый результат
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Видимый эффект уже после первой процедуры
              </p>
            </div>
          </div>

          {/* Лечение заболеваний */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mb-16"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-accentTextBrown dark:text-white mb-4">
                Лечение заболеваний кожи
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {treatments.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 50}
                  className="flex items-center gap-2 bg-white dark:bg-darkmode rounded-xl p-3 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <HeartIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-baseText dark:text-darktext text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Врач-косметолог */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="bg-gradient-to-r from-primary/5 to-transparent rounded-3xl p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center">
                    <HeartIcon className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm text-primary font-medium mb-2">ВРАЧ-КОСМЕТОЛОГ</p>
                <h3 className="text-2xl md:text-3xl font-bold text-accentTextBrown dark:text-white mb-3">
                  Захарова Лилия Насиховна
                </h3>
                <p className="text-baseText dark:text-darktext">
                  Врач хирург, дерматовенеролог, косметолог. Более 3 лет опыта в косметологии.
                  Специализируется на естественном омоложении и комплексном подходе к красоте и здоровью кожи.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;