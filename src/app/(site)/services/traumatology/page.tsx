import React from "react";
import Image from "next/image";
import {
  AwardIcon,
  ClockIcon,
  HeartIcon,
  CircleCheckIcon,
  ShieldCheckIcon,
  SyringeIcon,
  ActivityIcon,
  BoneIcon,
  TrendingUpIcon,
  DropletIcon,
} from "lucide-react";
import HeroSub from "@/components/Ui/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Травматология | Гиппократ",
  description:
    "Точный диагноз в день обращения + план лечения. Плазмолифтинг — восстановление суставов вашей собственной кровью.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Главная" },
    { href: "/services", text: "Услуги" },
    { href: "/services/traumatology", text: "Травматология" },
  ];

  const indications = [
    "Гонартроз",
    "Коксартроз",
    "Бурсит",
    "Последствия спортивных травм",
    "Медленно срастающиеся переломы",
  ];

  const results = [
    "Снижение боли по шкале VAS с 8/10 до 2/10",
    "Увеличение амплитуды движений на 50-70%",
    "Отмена обезболивающих — не нужно травить печень",
  ];

  return (
    <>
      <HeroSub
        title="Травматология"
        description="Точный диагноз в день обращения + план лечения"
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
                <BoneIcon className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium text-sm">
                  Травматология
                </span>
              </div>

              <p className="text-xl text-primary font-semibold mb-4">
                Ушиблись, потянулись или «заклинило»?
              </p>
              <p className="text-lg text-baseText dark:text-darktext dark:text-opacity-80 mb-6">
                Не терпите боль и не ждите, что «само пройдёт». Приходите к
                опытному травматологу в медицинский центр «Гиппократ». Здесь вам
                помогут вернуть радость движения без боли и ограничений.
              </p>
              <div className="bg-primary/5 rounded-2xl p-5 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <ClockIcon className="w-5 h-5 text-primary" />
                  <p className="text-base font-semibold text-accentTextBrown dark:text-white">
                    Точный диагноз в день обращения + план лечения
                  </p>
                </div>
              </div>

              <a
                href="tel:+79174001025"
                title="Позвонить +7 (917) 400-10-25"
                className="btn btn-1 rounded-lg overflow-hidden inline-flex items-center gap-2 hover-filled-slide-down mb-8"
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
              className="relative lg:flex hidden"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/doctors/doc-sayapov.jpg"
                  alt="Врач травматолог Саяпов Азат Гилемзянович"
                  width={600}
                  height={500}
                  quality={100}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Плазмолифтинг */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mb-16"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-accentTextBrown dark:text-white mb-4">
                Плазмолифтинг
              </h2>
              <p className="text-lg text-baseText dark:text-darktext">
                Ваша собственная плазма крови для восстановления суставов
              </p>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <div className="bg-white dark:bg-darkmode rounded-2xl p-5 shadow-sm border border-border">
                  <h3 className="text-lg font-semibold text-dark dark:text-white mb-3 flex items-center gap-2">
                    <DropletIcon className="w-5 h-5 text-primary" />
                    Как проходит процедура
                  </h3>
                  <div className="space-y-2 text-baseText dark:text-darktext">
                    <p>• Забор крови</p>
                    <p>• Центрифуга (5 минут)</p>
                    <p>• Инъекция в очаг боли</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-darkmode rounded-2xl p-5 shadow-sm border border-border">
                  <h3 className="text-lg font-semibold text-dark dark:text-white mb-3 flex items-center gap-2">
                    <ShieldCheckIcon className="w-5 h-5 text-primary" />
                    Преимущества
                  </h3>
                  <div className="space-y-2 text-baseText dark:text-darktext">
                    <p>• Своя кровь — нулевая аллергия и отторжение</p>
                    <p>• Рост собственных клеток хряща</p>
                    <p>
                      • Факторы роста «штопают» микротрещины и восстанавливают
                      объём хряща
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-dark dark:text-white mb-3 flex items-center gap-2">
                  <TrendingUpIcon className="w-5 h-5 text-primary" />
                  Результаты пациентов через 3 недели
                </h3>
                <div className="space-y-3">
                  {results.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CircleCheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-baseText dark:text-darktext">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Показания */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mb-16"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-accentTextBrown dark:text-white mb-4">
                Показания к применению
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {indications.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 50}
                  className="flex items-center gap-2 bg-white dark:bg-darkmode rounded-xl p-3 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <HeartIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-baseText dark:text-darktext text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Преимущества метода */}
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
                Диагноз в день обращения
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Точный результат и сразу план лечения
              </p>
            </div>

            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 text-center shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <SyringeIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                Безопасно
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Своя кровь — нет аллергии и отторжения
              </p>
            </div>

            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 text-center shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ActivityIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                Восстановление хряща
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Факторы роста запускают мощную регенерацию
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
                  <AwardIcon className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm text-primary font-medium mb-2">
                  ВРАЧ ТРАВМАТОЛОГ ВЫСШЕЙ КАТЕГОРИИ
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-accentTextBrown dark:text-white mb-3">
                  Саяпов Азат Гилемзянович
                </h3>
                <p className="text-baseText dark:text-darktext">
                  Опытный травматолог-ортопед с более чем 30-летним стажем. За
                  плечами врача — тысячи успешных операций и восстановленных
                  пациентов. Использует современные методы диагностики и
                  лечения, включая плазмолифтинг.
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
