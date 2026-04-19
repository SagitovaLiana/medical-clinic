import React from "react";
import Image from "next/image";
import {
  ClockIcon,
  HeartIcon,
  CircleCheckIcon,
  ShieldCheckIcon,
  PhoneIcon,
} from "lucide-react";
import HeroSub from "@/components/Ui/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Гинекология | Гиппократ",
  description:
    "Женское здоровье под надёжной защитой. Современная гинекология с внимательным человеческим подходом.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Главная" },
    { href: "/services", text: "Услуги" },
    { href: "/services/gynecology", text: "Гинекология" },
  ];

  const services = [
    "Ежегодный чек-ап женского здоровья",
    "Подготовка к беременности",
    "Лечение гинекологических заболеваний",
    "Гормональная коррекция",
    "Возрастная гинекология",
    "Радиоволновая хирургия шейки матки",
    "Инфузионная терапия в гинекологии",
  ];

  const diseases = [
    "Миома матки",
    "Эндометриоз",
    "Кисты",
    "Воспалительные заболевания",
  ];

  return (
    <>
      <HeroSub
        title="Гинекология"
        description="Женское здоровье под надёжной защитой"
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
                  Женское здоровье
                </span>
              </div>

              <p className="text-xl text-primary font-semibold mb-4">
                Здесь женское здоровье под надёжной защитой
              </p>

              <p className="text-baseText dark:text-darktext dark:text-opacity-80 mb-6">
                Мы создали пространство, где современная гинекология встречается
                с внимательным человеческим подходом. Мы не просто лечим — мы
                сопровождаем женщин на всех этапах её жизни.
              </p>

              <div className="bg-primary/5 rounded-2xl p-5 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <ClockIcon className="w-5 h-5 text-primary" />
                  <p className="text-base font-semibold text-dark dark:text-white">
                    Приём по записи — не менее 40 минут
                  </p>
                </div>
                <p className="text-baseText dark:text-darktext text-sm">
                  Вас выслушают, ответят на все вопросы и предложат план
                  действий
                </p>
              </div>

              <div className="bg-primary/5 rounded-2xl p-5 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <PhoneIcon className="w-5 h-5 text-primary" />
                  <p className="text-base font-semibold text-dark dark:text-white">
                    Круглосуточная поддержка
                  </p>
                </div>
                <p className="text-baseText dark:text-darktext text-sm">
                  Все пациентки могут позвонить врачу в любое время суток
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
              className="relative lg:flex hidden"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/doctors/doc-valieva.jpg"
                  alt="Врач акушер-гинеколог Валиева Гузель Кавиевна"
                  width={600}
                  height={500}
                  quality={100}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Услуги */}
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

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 50}
                  className="flex items-center gap-2 bg-white dark:bg-darkmode rounded-xl p-3 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <CircleCheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-baseText dark:text-darktext">
                    {item}
                  </span>
                </div>
              ))}
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
                Лечение гинекологических заболеваний
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {diseases.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 50}
                  className="flex items-center gap-2 bg-white dark:bg-darkmode rounded-xl p-3 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <HeartIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-baseText dark:text-darktext">
                    {item}
                  </span>
                </div>
              ))}
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
                Приём от 40 минут
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Достаточно времени, чтобы всё обсудить и ничего не упустить
              </p>
            </div>

            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 text-center shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                24/7 на связи
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Мои пациентки могут позвонить мне в любое время суток
              </p>
            </div>

            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 text-center shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                Современные методики
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Радиоволновая хирургия, инфузионная терапия и другие передовые
                методы
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
                  ВРАЧ АКУШЕР-ГИНЕКОЛОГ ВЫСШЕЙ КАТЕГОРИИ
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-accentTextBrown dark:text-white mb-3">
                  Валиева Гузель Кавиевна
                </h3>
                <p className="text-baseText dark:text-darktext">
                  Приём ведёт опытный специалист, который не просто лечит, а
                  сопровождает женщин на всех этапах жизни. Внимательный подход,
                  современные методы диагностики и лечения, индивидуальный план
                  для каждой пациентки.
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
