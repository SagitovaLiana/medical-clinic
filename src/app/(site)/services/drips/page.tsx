import React from "react";
import { 
  DropletIcon,
  ShieldCheckIcon,
  SyringeIcon,
  HeartIcon,
  BrainIcon,
  LeafIcon,
  CoffeeIcon,
  TvIcon,
  SparklesIcon,
  CalendarIcon,
  WindIcon
} from "lucide-react";
import HeroSub from "@/components/Ui/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Капельницы | Гиппократ",
  description: "Капельницы с магнезией, витаминами, ноотропами, антиоксидантами, детокс. Восстановление после ОРВИ, гриппа, обезвоживания.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Главная" },
    { href: "/services", text: "Услуги" },
    { href: "/services/drips", text: "Капельницы" },
  ];

  const advantages = [
    {
      icon: CalendarIcon,
      title: "Никаких очередей",
      description: "Запись в удобное время",
    },
    {
      icon: ShieldCheckIcon,
      title: "Стерильные системы",
      description: "Одноразовые системы, полная безопасность",
    },
    {
      icon: SyringeIcon,
      title: "Опытные медсестры",
      description: "Без синяков и боли",
    },
  ];

  const dripTypes = [
    { icon: HeartIcon, title: "С магнезией", description: "Для сердца и сосудов" },
    { icon: SparklesIcon, title: "С витаминами", description: "Восполнение дефицита" },
    { icon: BrainIcon, title: "С ноотропами", description: "Для памяти и концентрации" },
    { icon: LeafIcon, title: "Антиоксиданты", description: "Защита клеток" },
    { icon: DropletIcon, title: "Детокс", description: "Очищение организма" },
    { icon: WindIcon, title: "Восстановление после ОРВИ", description: "Быстрое возвращение к жизни" },
  ];

  return (
    <>
      <HeroSub
        title="Капельницы"
        description="Бодрое утро без усталости и стресса"
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
              <DropletIcon className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium text-sm">Инфузионная терапия</span>
            </div>
            
            <p className="text-xl text-primary font-semibold mb-4">
              Капельница — не для больниц, а для вашего бодрого утра
            </p>
            
            <div className="space-y-3 text-baseText dark:text-darktext">
              <p>Усталость, ОРВИ, авитаминоз, стресс — всё это не болезни, но жить мешают.</p>
              <p className="text-lg font-semibold text-accentTextBrown dark:text-white">
                Приходите в процедурный кабинет клиники «Гиппократ». Поставим капельницу, которая реально поможет.
              </p>
            </div>
          </div>

          {/* Комфорт */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="bg-primary/5 rounded-3xl p-8 mb-16 text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <CoffeeIcon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-baseText dark:text-darktext">Комфортное кресло</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 rounded-sm bg-primary/40">
                 < HeartIcon className="w-6 h-6 text-primary" />
</div>
                </div>
                <span className="text-baseText dark:text-darktext">Плед</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <TvIcon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-baseText dark:text-darktext">Сериал — час для себя</span>
              </div>
            </div>
          </div>

          {/* Виды капельниц */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mb-16"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-accentTextBrown dark:text-white mb-4">
                Капельницы на любой случай
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {dripTypes.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 50}
                  className="flex items-center gap-3 bg-white dark:bg-darkmode rounded-xl p-4 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark dark:text-white">{item.title}</h3>
                    <p className="text-xs text-baseText dark:text-darktext">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 text-center">
              <p className="text-baseText dark:text-darktext">
                <span className="font-semibold text-primary">Врачебный контроль</span> — подберёт состав капельниц 
                именно под ваши жалобы
              </p>
            </div>
          </div>

          {/* Почему у нас */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mb-16"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-accentTextBrown dark:text-white mb-4">
                Почему выбирают нас?
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
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

          {/* CTA блок */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-accentTextBrown dark:text-white mb-4">
              Запишитесь на процедуру
            </h3>
            <p className="text-baseText dark:text-darktext mb-6">
              Час для себя в комфортном кресле с пледом и любимым сериалом
            </p>
            <a
              href="tel:+73478436117"
              title="Позвонить +7 (34784) 3-61-17"
              className="btn btn-1 rounded-lg overflow-hidden inline-flex items-center gap-2 hover-filled-slide-down"
            >
              <span className="!flex !items-center gap-2">
                Записаться на капельницу
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;