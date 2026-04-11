import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Header/Logo";
import { MapPin, Phone, FileText, Clock } from "lucide-react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral dark:bg-secondary">
      <div className="container">
        {/* Логотип*/}
        <div className="flex items-start md:pt-40 pt-16 md:pb-10 pb-6 border-b border-solid border-baseText">
          <Logo />
        </div>
        {/* Основная информация */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 py-10">
          {/* Контакты и адрес */}
          <div className="space-y-4 text-baseText">
            <div className="flex gap-5 items-center">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <p className="leading-relaxed">
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
                <p className="text-PaleCerulean">Вс: выходной</p>
              </div>
            </div>
          </div>
          {/* Навигация по сайту */}
          <ul className="flex flex-col md:items-center items-start space-y-4 text-baseText py-5 sm:text-xl text-lg font-normal">
            <li className="transition-all duration-300 hover:text-primary">
              <Link href="/">Главная</Link>
            </li>
            <li className="transition-all duration-300 hover:text-primary">
              <Link href="/aboutus">О нас</Link>
            </li>
            <li className="transition-all duration-300 hover:text-primary">
              <Link href="/">Главная</Link>
            </li>
            <li className="transition-all duration-300 hover:text-primary">
              <Link href="/">Главная</Link>
            </li>
          </ul>
          {/* Юр часть */}
          <ul className="flex flex-col md:items-center items-start space-y-4 text-baseText py-5 sm:text-xl text-lg font-normal">
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
