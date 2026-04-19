import React from "react";
import Image from "next/image";
import {
  ClockIcon,
  HeartIcon,
  CircleCheckIcon,
  ShieldCheckIcon,
  AwardIcon,
  StethoscopeIcon,
  MicroscopeIcon,
  AlertTriangleIcon,
  FileTextIcon,
  CalendarIcon,
} from "lucide-react";
import HeroSub from "@/components/Ui/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Онкология | Гиппократ",
  description:
    "Ранняя диагностика онкологических заболеваний. Осмотр молочных желез, пункция, консультация онколога. Онколог Шин Денис Александрович.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Главная" },
    { href: "/services", text: "Услуги" },
    { href: "/services/oncology", text: "Онкология" },
  ];

  const symptoms = [
    "Уплотнения или новообразования на коже и слизистых",
    "Увеличение лимфатических узлов (подмышки, шея, пах)",
    "Изменение формы, размера или цвета родинок",
    "Длительно незаживающие язвы и эрозии",
    "Беспричинная потеря веса и слабость",
    "Кровянистые выделения из половых путей вне цикла",
  ];

  const breastSymptoms = [
    "Уплотнение или узел в молочной железе",
    "Выделения из соска (прозрачные, кровянистые)",
    "Изменение формы или размера груди",
    "Втяжение соска или изменение кожи «лимонная корка»",
    "Боль в молочной железе, не связанная с циклом",
    "Увеличение подмышечных лимфоузлов",
  ];

  const whatWeDo = [
    "Осмотр молочных желез с пальпацией",
    "Пункция новообразований (тонкоигольная биопсия)",
    "Забор материала на цитологическое исследование",
    "Диагностика новообразований кожи и подкожной клетчатки",
    "Осмотр родинок (дерматоскопия)",
    "Консультация с расшифровкой анализов и МРТ/КТ",
    "Назначение дополнительных методов диагностики (УЗИ, маммография)",
    "Индивидуальный план наблюдения и лечения",
  ];

  return (
    <>
      <HeroSub
        title="Онкология"
        description="Ранняя диагностика — залог успешного лечения"
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
                <StethoscopeIcon className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium text-sm">
                  Онкология
                </span>
              </div>

              <p className="text-xl text-primary font-semibold mb-4">
                Ранняя диагностика спасает жизни
              </p>

              <p className="text-baseText dark:text-darktext dark:text-opacity-80 mb-6">
                Онкологические заболевания лучше поддаются лечению, когда
                выявлены на ранней стадии. Доверьте своё здоровье опытному
                онкологу частной клиники «Гиппократ». Мы подберём для Вас
                удобное время для визита, включая вечерние часы и выходные.
              </p>

              <div className="flex items-center gap-3 mb-8">
                <p className="text-lg font-semibold text-accentTextBrown dark:text-white">
                  Своевременное обращение к онкологу может спасти вашу жизнь
                </p>
              </div>

              <a
                href="tel:+79174001025"
                title="Позвонить +7 (917) 400-10-25"
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
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/doctors/doc-shin.jpg"
                  alt="Врач онколог Шин Денис Александрович"
                  width={600}
                  height={500}
                  quality={100}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* С какими жалобами приходят */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mb-16"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-accentTextBrown dark:text-white mb-4">
                С какими жалобами приходят к онкологу?
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
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

          {/* Диагностика молочных желез */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mb-16"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1 rounded-full mb-4">
                <HeartIcon className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-xs">
                  Женское здоровье
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-accentTextBrown dark:text-white mb-4">
                Диагностика молочных желез
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-8">
              <div>
                <p className="text-baseText dark:text-darktext mb-6">
                  Молочные железы требуют особого внимания. Регулярный осмотр у
                  онколога помогает вовремя выявить изменения и предотвратить
                  развитие серьёзных заболеваний.
                </p>
                <div className="space-y-3">
                  {breastSymptoms.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CircleCheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-baseText dark:text-darktext">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary/5 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-dark dark:text-white mb-3 flex items-center gap-2">
                  <MicroscopeIcon className="w-5 h-5 text-primary" />
                  Что делаем
                </h3>
                <div className="space-y-2">
                  <p className="text-baseText dark:text-darktext">
                    • Осмотр и пальпация молочных желез
                  </p>
                  <p className="text-baseText dark:text-darktext">
                    • Пункция новообразований (тонкоигольная биопсия)
                  </p>
                  <p className="text-baseText dark:text-darktext">
                    • Забор материала на цитологию
                  </p>
                  <p className="text-baseText dark:text-darktext">
                    • Направление на маммографию и УЗИ
                  </p>
                  <p className="text-baseText dark:text-darktext">
                    • Расшифровка результатов
                  </p>
                </div>
              </div>
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

            <div className="grid sm:grid-cols-2 gap-4">
              {whatWeDo.map((item, index) => (
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
                <FileTextIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                Понятная расшифровка
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Объясним результаты анализов и исследований простыми словами
              </p>
            </div>

            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 text-center shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                Динамическое наблюдение
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Индивидуальный план контроля и наблюдения за состоянием здоровья
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
                  ВРАЧ-ОНКОЛОГ
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-accentTextBrown dark:text-white mb-3">
                  Шин Денис Александрович
                </h3>
                <p className="text-baseText dark:text-darktext">
                  Опытный онколог, специализирующийся на ранней диагностике
                  онкологических заболеваний. Проводит осмотр молочных желез,
                  пункцию новообразований, забор материала на цитологию.
                  Помогает вовремя выявить риски и составить индивидуальный план
                  наблюдения. Внимательный подход к каждому пациенту, понятное
                  объяснение всех назначений и рекомендаций. Доверьте своё
                  здоровье профессионалу.
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
