import React from "react";
import Image from "next/image";
import {
  ClockIcon,
  FlaskConicalIcon,
  MailIcon,
  HomeIcon,
  ShieldCheckIcon,
  SyringeIcon,
  AwardIcon,
  SparklesIcon,
} from "lucide-react";
import HeroSub from "@/components/Ui/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сдача анализов | Гиппократ",
  description:
    "Безболезненно, без ожидания, более 1500 видов анализов. Медсестра на дом. Результаты на email и в мессенджеры.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Главная" },
    { href: "/services", text: "Услуги" },
    { href: "/services/lab", text: "Сдача анализов" },
  ];

  const advantages = [
    {
      icon: SyringeIcon,
      title: "Безболезненно",
      description:
        "Используем системы и тончайшие иглы — дискомфорта почти нет",
    },
    {
      icon: ClockIcon,
      title: "Без ожидания",
      description:
        "Приходите к назначенному времени. Процедура занимает 5-15 минут",
    },
    {
      icon: FlaskConicalIcon,
      title: "Всё в одном месте",
      description:
        "Более 1500 видов анализов: кровь, моча, гормоны, аллергены, онкомаркеры",
    },
    {
      icon: MailIcon,
      title: "Результаты быстро",
      description: "Готовы в срок, дублируем на email и в мессенджеры",
    },
    {
      icon: HomeIcon,
      title: "Выездная служба",
      description:
        "Не можете приехать? Медсестра приедет к вам домой или в офис",
    },
    {
      icon: ShieldCheckIcon,
      title: "Лаборатория КДЛ",
      description:
        "Стандарты превышают требования Минздрава — точный и быстрый результат",
    },
  ];

  return (
    <>
      <HeroSub
        title="Сдача анализов"
        description="Быстро, чисто и без стресса"
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="dark:bg-darkmode py-10">
        <div className="container">
          {/* Основная информация */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <SyringeIcon className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium text-sm">
                Лаборатория
              </span>
            </div>

            <p className="text-xl text-primary font-semibold mb-4">
              Сдать анализы быстро, чисто и без стресса
            </p>

            <div className="space-y-3 text-baseText dark:text-darktext">
              <p>Никаких очередей с 8 утра. Никаких нервов.</p>
              <p className="text-lg font-semibold text-accentTextBrown dark:text-white">
                Только Вы, Ваш комфорт и профессиональная медсестра «лёгкой
                руки»
              </p>
            </div>
          </div>

          {/* Преимущества */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mb-16"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-accentTextBrown dark:text-white mb-4">
                Почему наши пациенты выбирают сдачу анализов у нас?
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                  className="bg-white dark:bg-darkmode rounded-2xl p-6 shadow-lg border border-border text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-baseText dark:text-darktext text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Расшифровка у врача */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="bg-primary/5 rounded-3xl p-8 mb-16"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <SparklesIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark dark:text-white">
                    Можно получить расшифровку у врача клиники
                  </h3>
                  <p className="text-baseText dark:text-darktext">
                    Врач подробно объяснит результаты анализов и даст
                    рекомендации
                  </p>
                </div>
              </div>
              <a
                href="tel:+79174001025"
                title="Позвонить +7 (917) 400-10-25"
                className="btn btn-1 rounded-lg overflow-hidden inline-flex items-center gap-2 hover-filled-slide-down whitespace-nowrap"
              >
                <span className="!flex !items-center gap-2">
                  Записаться на сдачу анализов
                </span>
              </a>
            </div>
          </div>

          {/* О лаборатории */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="bg-gradient-to-r from-primary/5 to-transparent rounded-3xl p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center">
                  <AwardIcon className="w-12 h-12 text-white" />
                  <Image
                    src="/images/KDL.jpeg"
                    alt="hero"
                    width={0}
                    height={0}
                    quality={100}
                    sizes="100vh"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-accentTextBrown dark:text-white mb-3">
                  Лаборатория КДЛ
                </h3>
                <p className="text-baseText dark:text-darktext">
                  Работаем с лабораторией КДЛ, которая работает со стандартами,
                  превышающими требования Минздрава. Кому важен точный и быстрый
                  результат — выбирают нас.
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
