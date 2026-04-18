import React from "react";
import HeroSub from "@/components/Ui/HeroSub";
import { Metadata } from "next";
import { PhoneIcon, ClockIcon, MapPinIcon} from "lucide-react";

export const metadata: Metadata = {
    title: "Контакты | Гиппократ",
    description: "Запишитесь на приём в медицинский центр Гиппократ. Адрес, телефон, режим работы.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Главная" },
    { href: "/contact", text: "Контакты" },
  ];

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: "Адрес",
      details: [
        "452450, Республика Башкортостан",
        "г. Бирск, ул. Коммунистическая, д. 101"
      ],
    },
    {
      icon: PhoneIcon,
      title: "Телефоны",
      details: [
        "<a href='tel:+79174001025' class='hover:text-primary transition-colors'>+7 (917) 400-10-25 (мобильный)</a>",
        "<a href='tel:+73478436117' class='hover:text-primary transition-colors'>+7 (34784) 3-61-17 (стационарный)</a>"
      ],
    },
    {
      icon: ClockIcon,
      title: "Режим работы",
      details: [
        "Пн-Пт: 8:00 - 20:00",
        "Сб: по записи",
        "Вс: 8:00 - 20:00"
      ],
    },
  ];

  return (
    <>
      <HeroSub
        title="Контакты"
        description="Свяжитесь с нами удобным для вас способом"
        breadcrumbLinks={breadcrumbLinks}
      />
      
      <section className="dark:bg-darkmode py-10">
        <div className="container">
          {/* Контактная информация */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                className="bg-white dark:bg-darkmode rounded-2xl p-6 shadow-lg border border-border text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark dark:text-white mb-3">
                  {item.title}
                </h3>
                <div className="space-y-1">
                  {item.details.map((detail, i) => (
                    <p 
                      key={i} 
                      className="text-baseText dark:text-darktext"
                      dangerouslySetInnerHTML={{ __html: detail }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Карта во всю ширину */}
          <div className="w-full rounded-2xl overflow-hidden shadow-lg mb-8">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=55.562049%2C55.410504&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=55.561779%2C55.410688&whatshere%5Bzoom%5D=17&z=19"
              width="100%"
              height="450"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              title="Карта клиники Гиппократ"
              className="w-full h-[450px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;