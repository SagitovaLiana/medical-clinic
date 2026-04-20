// app/cookie/page.tsx
import React from "react";
import {
  CookieIcon,
  ShieldCheckIcon,
  EyeIcon,
  SettingsIcon,
  ClockIcon,
  FileTextIcon,
  AlertCircleIcon,
} from "lucide-react";
import HeroSub from "@/components/Ui/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика cookie | Гиппократ",
  description:
    "Политика использования cookie-файлов на сайте медицинской клиники Гиппократ. Узнайте, какие cookie мы используем и как управлять ими.",
};

const CookiePage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Главная" },
    { href: "/cookie", text: "Политика cookie" },
  ];

  const cookieTypes = [
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-primary" />,
      title: "Обязательные cookie",
      description:
        "Необходимы для корректной работы сайта. Без них некоторые функции могут быть недоступны. Эти файлы не требуют вашего согласия.",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      icon: <EyeIcon className="w-6 h-6 text-primary" />,
      title: "Аналитические cookie",
      description:
        "Помогают нам понимать, как посетители используют сайт, чтобы улучшать его работу. Мы используем Яндекс.Метрику для сбора обезличенных данных о посещениях.",
      bgColor: "bg-green-50 dark:bg-green-950/20",
    },
    {
      icon: <SettingsIcon className="w-6 h-6 text-primary" />,
      title: "Функциональные cookie",
      description:
        "Запоминают ваши предпочтения и настройки (например, выбранную тему оформления), чтобы вам было комфортнее пользоваться сайтом при повторных посещениях.",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
    },
  ];

  const browsers = [
    { name: "Google Chrome", color: "bg-blue-500" },
    { name: "Mozilla Firefox", color: "bg-orange-500" },
    { name: "Safari", color: "bg-gray-500" },
    { name: "Microsoft Edge", color: "bg-green-500" },
  ];

  return (
    <>
      <HeroSub
        title="Политика cookie"
        description="Как мы используем cookie-файлы"
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="dark:bg-darkmode py-10">
        <div className="container">
          {/* Основная информация */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
            {/* Левая колонка - текст */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 py-2 px-4 rounded-full mb-6">
                <CookieIcon className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium text-sm">
                  Cookie-файлы
                </span>
              </div>

              <p className="text-xl text-primary font-semibold mb-4">
                Что такое cookie-файлы и зачем они нужны?
              </p>

              <p className="text-baseText dark:text-darktext dark:text-opacity-80 mb-6">
                Cookie-файлы — это небольшие текстовые файлы, которые сохраняются
                на вашем устройстве (компьютере, смартфоне или планшете) при
                посещении нашего сайта. Эти файлы содержат информацию о ваших
                действиях и настройках на сайте.
              </p>

              <p className="text-baseText dark:text-darktext dark:text-opacity-80 mb-6">
                Мы используем cookie-файлы, чтобы сделать ваш опыт использования
                сайта максимально комфортным и персонализированным. Они помогают
                нам понять, какие страницы наиболее популярны, и улучшить работу
                сайта.
              </p>

              <div className="flex items-center gap-3 mb-8 p-4 bg-primary/5 rounded-xl">
                <AlertCircleIcon className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-sm text-accentTextBrown dark:text-white">
                  Вы можете управлять cookie-файлами через настройки вашего браузера.
                  Отключение cookie может повлиять на работу некоторых функций сайта.
                </p>
              </div>
            </div>

            {/* Правая колонка - иконка */}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/10 to-primary/5 p-12">
                <div className="flex justify-center items-center">
                  <div className="w-48 h-48 bg-white dark:bg-darkmode rounded-full shadow-2xl flex items-center justify-center">
                    <CookieIcon className="w-28 h-28 text-primary" />
                  </div>
                </div>
                <p className="text-center text-baseText dark:text-darktext mt-6 text-sm">
                  Мы заботимся о вашей конфиденциальности
                </p>
              </div>
            </div>
          </div>

          {/* Какие cookie мы используем */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mb-16"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-accentTextBrown dark:text-white mb-4">
                Какие cookie-файлы мы используем?
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
              <p className="text-baseText dark:text-darktext mt-4">
                Мы используем разные типы cookie-файлов для различных целей
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {cookieTypes.map((type, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                  className={`${type.bgColor} rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-accentTextBrown dark:text-white mb-2">
                    {type.title}
                  </h3>
                  <p className="text-baseText dark:text-darktext text-sm">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Как управлять cookie */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mb-16"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-accentTextBrown dark:text-white mb-4">
                Как управлять cookie-файлами?
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
              <p className="text-baseText dark:text-darktext mt-4">
                Вы можете управлять cookie-файлами через настройки вашего браузера
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {browsers.map((browser, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 50}
                  className="flex items-center gap-3 bg-white dark:bg-darkmode rounded-xl p-4 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className={`w-3 h-3 ${browser.color} rounded-full`}></div>
                  <span className="text-baseText dark:text-darktext font-medium">
                    {browser.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary/5 rounded-xl">
              <p className="text-baseText dark:text-darktext text-sm">
                <strong className="text-primary">Обратите внимание:</strong>{" "}
                Отключение cookie-файлов может привести к тому, что некоторые функции
                сайта станут недоступны, например, сохранение выбранной темы оформления
                или запоминание ваших предпочтений.
              </p>
            </div>
          </div>

          {/* Срок хранения */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <ClockIcon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-accentTextBrown dark:text-white">
                  Срок хранения cookie
                </h3>
              </div>
              <p className="text-baseText dark:text-darktext">
                <strong>Сессионные cookie</strong> удаляются сразу после закрытия браузера.{" "}
                <strong>Постоянные cookie</strong> сохраняются на вашем устройстве в течение
                определенного времени (обычно до 12 месяцев) или до тех пор, пока вы их не удалите.
              </p>
            </div>

            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileTextIcon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-accentTextBrown dark:text-white">
                  Изменения в Политике cookie
                </h3>
              </div>
              <p className="text-baseText dark:text-darktext">
                Мы можем периодически обновлять эту Политику. Все изменения будут публиковаться
                на этой странице. Рекомендуем периодически проверять страницу для ознакомления
                с актуальной версией. Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default CookiePage;