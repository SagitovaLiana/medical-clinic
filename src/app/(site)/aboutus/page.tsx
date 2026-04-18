import HeroSub from "@/components/Ui/HeroSub";
import React from "react";
import Image from "next/image";
import '@/Style/style.css'
import CTA from "@/components/Ui/CTA";
import { Metadata } from "next";
import {
  CalendarIcon,
  MapPinIcon,
  FileTextIcon,       
  Building2Icon,    
  RadioIcon,
  SparklesIcon,
  ShieldCheckIcon,
  HeartIcon,
} from "lucide-react";
export const metadata: Metadata = {
  title: "О нас | Гиппократ",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Главная" },
    { href: "/aboutus", text: "О нас" },
  ];
  return (
    <>
      <HeroSub
        title="Медицинская клиника «Гиппократ»"
        description="С 2016 года — современная медицина, проверенная временем"
        breadcrumbLinks={breadcrumbLinks}
      />
     <section className="dark:bg-darkmode py-16">
      <div className="container">
          {/* Основная информация */}
        <div className="flex justify-between items-center gap-12 mb-20">
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <CalendarIcon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-accentTextBrown dark:text-white mb-2">
                  История клиники
                </h3>
                <p className="text-baseText dark:text-darktext dark:text-opacity-80">
                  Медицинский центр «Гиппократ» ведёт свою работу с 
                  <span className="font-bold text-primary"> 2016 года</span>. За это время мы заслужили доверие
                  пациентов как надёжное и современное учреждение.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPinIcon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-accentTextBrown dark:text-white mb-2">
                  Адрес и лицензия
                </h3>
                <p className="text-baseText dark:text-darktext dark:text-opacity-80">
                  <span className="font-medium"> Республика Башкортостан,
г. Бирск, ул. Коммунистическая, д. 101.</span>
                  <br />
                  Деятельность ведётся на основании действующей 
                  <span className="font-medium text-primary"> лицензии</span> на осуществление медицинской
                  деятельности.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Building2Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-accentTextBrown dark:text-white mb-2">
                  Кабинеты и оснащение
                </h3>
                <p className="text-baseText dark:text-darktext dark:text-opacity-80">
                  В распоряжении центра — <span className="font-medium">два функциональных кабинета</span>:
                  процедурный кабинет для забора анализов и манипуляций, а также кабинет для приёма пациентов
                  и амбулаторных процедур. Организована удобная регистратура и собственная картотека.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheckIcon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-accentTextBrown dark:text-white mb-2">
                  Стандарты качества
                </h3>
                <p className="text-baseText dark:text-darktext dark:text-opacity-80">
                  Мы работаем по высшим медицинским стандартам, используем только
                  сертифицированное оборудование и следуем клиническим рекомендациям.
                  Чистота, безопасность и комфорт пациентов — наш главный приоритет.
                </p>
              </div>
            </div>
          </div>
 <div
  data-aos="fade-left"
  data-aos-delay="400"
  data-aos-duration="1000"
  className="relative lg:flex hidden justify-center"
>
  <div className="relative h-full w-full ">
    <Image
      src="/images/hero/hero_1.jpg"
      alt="Медицинский центр Гиппократ"
      width={500}
      height={400}
      quality={100}
    />
    <div className="bg-primary rounded-22 shadow-hero-box py-3 px-4 absolute top-10 -right-10 xl:inline-block hidden">
      <p className="text-sm text-white whitespace-nowrap">
        10+ лет заботы о здоровье
      </p>
    </div>
  </div>
</div>
        </div>
        {/* Оборудование и специалисты */}
        <div className="mb-20">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
              Экспертное оборудование и опытные специалисты
            </h2>
            <p className="text-baseText dark:text-darktext dark:text-opacity-80">
              Современные технологии в руках профессионалов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Радиоволновая хирургия */}
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="bg-white dark:bg-darkmode rounded-2xl p-6 shadow-lg border border-border"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <RadioIcon className="w-8 h-8 text-primary" />
                </div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white">
                    Радиоволновая хирургия
                  </h3>
              </div>
              <p className="text-baseText dark:text-darktext dark:text-opacity-80">
                Современный радиоволновой аппарат для удаления новообразований.
               Отличается малотравматичностью,
                безболезненностью и быстрым восстановлением.
              </p>
            </div>

            {/* Лазерная хирургия */}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="bg-white dark:bg-darkmode rounded-2xl p-6 shadow-lg border border-border"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <SparklesIcon className="w-8 h-8 text-primary" />
                </div>
            <h3 className="text-xl font-semibold text-primary dark:text-white">
                    Лазерная хирургия
                  </h3>
              </div>
              <p className="text-baseText dark:text-darktext dark:text-opacity-80">
                Высокоточный лазерный аппарат для широкого спектра медицинских
                вмешательств. Обеспечивает ювелирную точность, минимальную
                кровопотерю и отличный косметический эффект.
              </p>
            </div>
          </div>
        </div>
        {/* Преимущества */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-white text-center mb-10">
            Почему выбирают «Гиппократ»?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <CalendarIcon className="w-6 h-6 text-white" />
              </div>
              <p className="font-semibold text-accentTextBrown dark:text-white">С 2016 года</p>
              <p className="text-sm text-baseText dark:text-darktext">Стабильность и опыт</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <FileTextIcon className="w-6 h-6 text-white" />
              </div>
              <p className="font-semibold text-accentTextBrown dark:text-white">Есть лицензия</p>
              <p className="text-sm text-baseText dark:text-darktext">Официальная деятельность</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <HeartIcon className="w-6 h-6 text-white" />
              </div>
              <p className="font-semibold text-accentTextBrown dark:text-white">Топ-врачи</p>
              <p className="text-sm text-baseText dark:text-darktext">Практикующие эксперты</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Building2Icon className="w-6 h-6 text-white" />
              </div>
              <p className="font-semibold text-accentTextBrown dark:text-white">Современное оснащение</p>
              <p className="text-sm text-baseText dark:text-darktext">Радиоволновая и лазерная техника</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      <div>
        <CTA/>
      </div>
    </>
  );
};

export default page;
