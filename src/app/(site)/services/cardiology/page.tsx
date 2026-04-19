import React from "react";
import Image from "next/image";
import {
  HeartIcon,
  ClockIcon,
  ShieldCheckIcon,
  CircleCheckIcon,
  AwardIcon,
  SparklesIcon,
  AlertTriangleIcon,
} from "lucide-react";
import HeroSub from "@/components/Ui/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Кардиология | Гиппократ",
  description:
    "Лечение болей в сердце, скачков давления, одышки. Кардиолог Ядренникова Ирина Владимировна. Диагностика и лечение сердечно-сосудистых заболеваний.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Главная" },
    { href: "/services", text: "Услуги" },
    { href: "/services/cardiology", text: "Кардиология" },
  ];

  const symptoms = [
    "Боли в сердце",
    "Скачки давления",
    "Одышка",
    "Перебои в работе сердца",
    "Головокружение",
    "Отеки ног",
  ];

  return (
    <>
      <HeroSub
        title="Кардиология"
        description="Бережём ваше сердце"
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
                <HeartIcon className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium text-sm">
                  Кардиология
                </span>
              </div>

              <p className="text-xl text-primary font-semibold mb-4">
                Беспокоят боли в сердце, скачки давления или одышка?
              </p>

              <p className="text-baseText dark:text-darktext dark:text-opacity-80 mb-6">
                Доверьте здоровье опытному кардиологу частной клиники
                «Гиппократ». Мы подберём для Вас удобное время для визита,
                включая вечерние часы и выходные.
              </p>

              <p className="text-baseText dark:text-darktext dark:text-opacity-80 mb-6">
                Сердце — это мотор всего организма. Когда оно даёт сбои,
                страдает всё тело: появляется слабость, головокружение,
                снижается работоспособность. Не ждите, пока станет невыносимо —
                вовремя пройдите диагностику.
              </p>

              <div className="flex items-center gap-3 mb-8">
                <p className="text-lg font-semibold text-accentTextBrown dark:text-white">
                  Своевременная диагностика поможет вовремя выявить риски и
                  сохранить вашу жизнь
                </p>
              </div>

              <a
                href="tel:+79174001025"
                title="Позвонить +7 (917) 400-10-25"
                className="btn btn-1 rounded-lg overflow-hidden inline-flex items-center gap-2 hover-filled-slide-down"
              >
                <span className="!flex !items-center gap-2">
                  Записаться на приём
                </span>
              </a>
            </div>

            {/* Правая колонка - фото */}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/doctors/doc-yadrennicova.jpg"
                  alt="Врач кардиолог Ядренникова Ирина Владимировна"
                  width={600}
                  height={500}
                  quality={100}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* С какими симптомами приходят */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mb-16"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-accentTextBrown dark:text-white mb-4">
                С какими жалобами приходят к кардиологу?
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {symptoms.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 50}
                  className="flex items-center gap-3 bg-white dark:bg-darkmode rounded-xl p-4 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangleIcon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-baseText dark:text-darktext font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Что мы делаем */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mb-16"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-accentTextBrown dark:text-white mb-4">
                Что мы предлагаем
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Преимущества */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 text-center shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                Удобное время
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Приём в удобное для вас время, включая вечерние часы и выходные
              </p>
            </div>

            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 text-center shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                Понятная расшифровка
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Доступно объясним результаты анализов и назначим эффективное
                лечение
              </p>
            </div>
            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 text-center shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                Индивидуальный план лечения
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Подберём лечение именно под вашу ситуацию, а не шаблонные схемы
              </p>
            </div>
          </div>

          {/* О враче */}
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
                <p className="text-sm text-primary font-medium mb-2">
                  ВРАЧ-КАРДИОЛОГ
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-accentTextBrown dark:text-white mb-3">
                  Ядренникова Ирина Владимировна
                </h3>
                <p className="text-baseText dark:text-darktext">
                  Опытный кардиолог, специализирующийся на диагностике и лечении
                  заболеваний сердечно-сосудистой системы. Проведёт полное
                  обследование, расшифрует все анализы и назначит эффективное
                  лечение. Индивидуальный подход к каждому пациенту, понятное
                  объяснение всех назначений и рекомендаций. Поможет вовремя
                  выявить риски и сохранить здоровье сердца на долгие годы.
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
