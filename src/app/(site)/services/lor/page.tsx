import React from "react";
import Image from "next/image";
import { 
  EarIcon,
  CircleCheckIcon,
  ClockIcon,
  HeartIcon,
  ShieldCheckIcon,
  ActivityIcon,
  SmileIcon,
  AwardIcon,
  ListChecksIcon
} from "lucide-react";
import HeroSub from "@/components/Ui/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ЛОР | Гиппократ",
  description: "Лечим хронический тонзиллит без удаления миндалин, останавливаем гайморит без прокола. Свободное дыхание и хороший слух — это норма.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Главная" },
    { href: "/services", text: "Услуги" },
    { href: "/services/lor", text: "ЛОР" },
  ];

  const treatmentSteps = [
    "Опрос и жалобы — 10 минут",
    "Осмотр ушей, носа, горла с помощью стандартных зеркал и надлобного рефлектора",
    "Назначение лечения и процедуры в день обращения",
    "Чек-лист для дома (полоскания, спреи, упражнения)",
  ];

  const results = [
    "Свободное дыхание",
    "Нормальный сон",
    "Отсутствие гнойных пробок",
    "Отсутствие запаха изо рта",
  ];

  return (
    <>
      <HeroSub
        title="ЛОР"
        description="Дышать свободно и слышать хорошо — это не роскошь, а норма"
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
                <EarIcon className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium text-sm">ЛОР</span>
              </div>

              <p className="text-xl text-primary font-semibold mb-4">
                Дышать свободно и слышать хорошо — это не роскошь, а норма.
              </p>
              
              <p className="text-baseText dark:text-darktext dark:text-opacity-80 mb-4">
                Сколько можно терпеть?
              </p>
              
              <div className="space-y-2 mb-6">
                <p className="flex items-center gap-2 text-baseText dark:text-darktext">
                  <span className="text-primary">•</span> Заложенность носа уже месяц
                </p>
                <p className="flex items-center gap-2 text-baseText dark:text-darktext">
                  <span className="text-primary">•</span> Уши закладывает при каждом насморке
                </p>
              </div>

              <a
                href="tel:+73478436117"
                title="Позвонить +7 (34784) 3-61-17"
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
                  src="/images/doctors/doc-chekmarev.jpg"
                  alt="Врач ЛОР Чекмарев Алим Равильевич"
                  width={300}
                  height={300}
                  quality={100}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Что умеем */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mb-16"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-accentTextBrown dark:text-white mb-4">
                Что умеем
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-darkmode rounded-2xl p-6 shadow-lg border border-border">
                <h3 className="text-xl font-semibold text-dark dark:text-white mb-3 flex items-center gap-2">
                  <HeartIcon className="w-5 h-5 text-primary" />
                  Лечим хронический тонзиллит
                </h3>
                <p className="text-baseText dark:text-darktext">
                  Без удаления миндалин. Лакунарное промывание на специальном шприце 
                  без рвотного рефлекса. 5-7 сеансов — и ангины уходят на годы.
                </p>
              </div>

              <div className="bg-white dark:bg-darkmode rounded-2xl p-6 shadow-lg border border-border">
                <h3 className="text-xl font-semibold text-dark dark:text-white mb-3 flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5 text-primary" />
                  Останавливаем гайморит без прокола
                </h3>
                <p className="text-baseText dark:text-darktext">
                  «Кукушка» (метод перемещения жидкостей) в умелых руках врача 
                  удалит гной из пазух за 3-5 сеансов.
                </p>
              </div>

              <div className="bg-white dark:bg-darkmode rounded-2xl p-6 shadow-lg border border-border">
                <h3 className="text-xl font-semibold text-dark dark:text-white mb-3 flex items-center gap-2">
                  <EarIcon className="w-5 h-5 text-primary" />
                  Удаляем серные пробки
                </h3>
                <p className="text-baseText dark:text-darktext">
                  Аккуратно, тёплым раствором под давлением. Без боли и травмы 
                  барабанной перепонки.
                </p>
              </div>

              <div className="bg-white dark:bg-darkmode rounded-2xl p-6 shadow-lg border border-border">
                <h3 className="text-xl font-semibold text-dark dark:text-white mb-3 flex items-center gap-2">
                  <ActivityIcon className="w-5 h-5 text-primary" />
                  Справляемся с храпом
                </h3>
                <p className="text-baseText dark:text-darktext">
                  Обследуем носоглотку, выявляем причину (искривление перегородки, 
                  небный язычок, тонзиллит). Предложим лечение на ранних стадиях.
                </p>
              </div>
            </div>
          </div>

          {/* Как проходит приём */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mb-16"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-accentTextBrown dark:text-white mb-4">
                Как проходит приём
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {treatmentSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white dark:bg-darkmode rounded-xl p-4 shadow-sm border border-border"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <span className="text-baseText dark:text-darktext">{step}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-dark dark:text-white mb-4 flex items-center gap-2">
                  <ListChecksIcon className="w-5 h-5 text-primary" />
                  Результат
                </h3>
                <div className="space-y-3">
                  {results.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CircleCheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-baseText dark:text-darktext">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
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
                Лечение в день обращения
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Диагноз и план лечения сразу на приёме
              </p>
            </div>
            
            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 text-center shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                Без боли
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Аккуратные методики, комфортные процедуры
              </p>
            </div>
            
            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 text-center shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <SmileIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                Долгосрочный результат
              </h3>
              <p className="text-baseText dark:text-darktext text-sm">
                Ангины уходят на годы, дыхание становится свободным
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
                <p className="text-sm text-primary font-medium mb-2">ЛОР ВРАЧ ВЫСШЕЙ КАТЕГОРИИ</p>
                <h3 className="text-2xl md:text-3xl font-bold text-accentTextBrown dark:text-white mb-3">
                  Чекмарев Алим Равильевич
                </h3>
                <p className="text-baseText dark:text-darktext">
                  Опытный ЛОР-врач с <span className="font-bold text-primary">40-летним стажем</span>. 
                  За плечами врача — тысячи вылеченных пациентов с самыми разными заболеваниями 
                  уха, горла и носа. Использует только современные и максимально щадящие методики 
                  лечения. Благодаря богатому опыту и высочайшему профессионализму помогает 
                  пациентам забыть о хронических болезнях и вернуть радость свободного дыхания 
                  и хорошего слуха.
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