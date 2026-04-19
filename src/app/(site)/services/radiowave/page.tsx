import React from "react";
import Image from "next/image";
import { ZapIcon, ClockIcon, HeartIcon, CircleCheckIcon } from "lucide-react";
import HeroSub from "@/components/Ui/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Радиоволновое удаление родинок | Гиппократ",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Главная" },
    { href: "/services", text: "Услуги" },
    { href: "/services/radiowave", text: "Радиоволновое удаление родинок" },
  ];
  const formations = [
    "Папилломы",
    "Милиумы",
    "Невусы",
    "Вирусные бородавки",
    "Подошвенные бородавки",
    "Контагиозные моллюски",
    "Стержневые мозоли",
    "Кератомы",
    "Кандиломы",
    "Гемангиомы",
    "Фибромы",
    "Дерматофибромы",
    "Атеромы",
    "Липомы",
    "Гигромы",
  ];

  return (
    <>
      <HeroSub
        title="Радиоволновое удаление родинок"
        description="Современный метод удаления новообразований аппаратом «Zerts»"
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="dark:bg-darkmode py-10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
            {/* Левая колонка - текст */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 py-2 rounded-full mb-6">
                <ZapIcon className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium text-sm">
                  Современная технология
                </span>
              </div>

              <p className="text-xl text-primary font-semibold mb-4">
                Аппарат «Zerts»
              </p>
              <p className="text-lg text-baseText dark:text-darktext dark:text-opacity-80 mb-6">
                Выпуклые родинки, папилломы, милиумы и другие доброкачественные
                образования часто доставляют массу неудобств. Особенно
                эстетически неприятны такие новообразования на лице.
              </p>
              <p className="text-baseText dark:text-darktext dark:text-opacity-80 mb-6">
                Если раньше это было большой проблемой, то сейчас их можно легко
                и быстро удалить с помощью аппарата{" "}
                <span className="font-bold text-primary">«Zerts»</span>, который
                генерирует высокочастотные электрические волны.
              </p>
              <p className="text-lg font-semibold text-accentTextBrown dark:text-white mb-16">
                Процедура помогает безболезненно и быстро избавиться от
                доброкачественных образований на коже человека!
              </p>
              <a
                href="tel:+79174001025"
                title="Позвонить +7 (917) 400-10-25"
                className="btn btn-1 rounded-lg overflow-hidden inline-flex items-center gap-2 hover-filled-slide-down"
              >
                <span className="!flex !items-center gap-2">
                  Записаться на удаление
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
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/doctors/doc-zaharova.jpg"
                  alt="Врач Захарова Лилия Насиховна"
                  width={600}
                  height={500}
                  quality={100}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Какие новообразования удаляем */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mb-16"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
                Какие новообразования можем удалить?
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {formations.map((item, index) => (
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

          {/* Преимущества метода */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 text-center shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ZapIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                Безболезненно
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Высокочастотные волны воздействуют точечно, не вызывая болевых
                ощущений
              </p>
            </div>

            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 text-center shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                Быстро
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Процедура занимает всего 15-30 минут в зависимости от количества
                образований
              </p>
            </div>

            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 text-center shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                Без рубцов
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                После заживления не остаётся шрамов и следов, кожа
                восстанавливается быстро
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
                  ВРАЧ-ХИРУРГ
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-accentTextBrown dark:text-white mb-3">
                  Захарова Лилия Насиховна
                </h3>
                <p className="text-baseText dark:text-darktext">
                  Удаляет новообразования с многолетним опытом. Использует
                  только современные методики и аппараты экспертного класса.
                  Индивидуальный подход к каждому пациенту, гарантия
                  безопасности и комфорта.
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
