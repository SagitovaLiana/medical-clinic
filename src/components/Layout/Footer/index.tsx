import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../Ui/Logo";
import { MapPin, Phone, FileText, Clock } from "lucide-react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral dark:bg-darkmode">
      <div className="container">
        {/* Логотип*/}
        <div className="flex items-start lg:pt-40 pt-10 md:pb-10 pb-6 border-b border-solid border-baseText">
          <Logo />
        </div>
        {/* Основная информация */}
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-8 gap-4
         py-10 text-baseText dark:text-white dark:opacity-0.7 ">
          {/* Контакты и адрес */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex gap-5 items-center">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <p className="leading-relaxed ">
                452450, Республика Башкортостан, <br />
                г. Бирск, ул. Коммунистическая, д. 101.
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <div>
                <a
                  href="tel:+79174001025"
                  className="block hover:text-primary transition-colors duration-300"
                >
                  +7 (917) 400-10-25 (мобильный)
                </a>
                <a
                  href="tel:+73478436117"
                  className="block hover:text-primary transition-colors duration-300"
                >
                  +7 (34784) 3-61-17 (стационарный)
                </a>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <Clock className="w-5 h-5 flex-shrink-0" />
              <div>
                <p className="text-PaleCerulean">Пн-Пт: 8:00 - 20:00</p>
                <p className="text-PaleCerulean">Сб: 9:00 - 15:00</p>
                <p className="text-PaleCerulean">Вс: выходной  уаакуевепавкп</p>
              </div>
            </div>
          </div>
          {/* Навигация по сайту */}
          <div className="flex items-center md:justify-center justify-start">
          <ul className="flex flex-col items-start md:space-y-4  space-y-2 md:text-lg text-base font-normal">
            <li className="transition-all duration-300 hover:text-primary">
              <Link href="/">Главная</Link>
            </li>
            <li className="transition-all duration-300 hover:text-primary">
              <Link href="/">О нас</Link>
            </li>
            <li className="transition-all duration-300 hover:text-primary">
              <Link href="/">Главная</Link>
            </li>
            <li className="transition-all duration-300 hover:text-primary">
              <Link href="/">Главная</Link>
            </li>
          </ul>
          </div>
          {/* Юр часть */}
          <div className="flex items-center md:justify-center justify-start">
          <ul className="flex flex-col items-start md:space-y-4  space-y-2 md:text-lg text-base font-normal">
            <li className="transition-all duration-300 hover:text-primary">
              <Link href="/">Лицензия</Link>
            </li>
            <li className="transition-all duration-300 hover:text-primary">
              <Link href="/">Политика обработки ПДн</Link>
            </li>
            <li className="transition-all duration-300 hover:text-primary">
              <Link href="/">Политика cookie</Link>
            </li>
            <li className="transition-all duration-300 hover:text-primary">
              <Link href="/">Главная</Link>
            </li>
          </ul>
          </div>
        </div>
        {/* Нижняя часть */}
        <div className="border-t border-baseText py-6 text-baseText">
          <p className="text-xs text-PaleCerulean/70 text-center">
            Имеются противопоказания. Необходима консультация специалиста.
            Информация на сайте носит ознакомительный характер и не является
            публичной офертой. © {currentYear} Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
