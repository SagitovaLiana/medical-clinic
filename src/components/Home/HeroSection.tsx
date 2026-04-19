import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="dark:bg-darkmode lg:py-20 sm:pt-36 pt-24">
      <div className="container">
        <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-30">
          <div className="col-span-6">
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="relative z-0  inline-block text-primary text-lg font-bold before:absolute before:content-[''] before:bg-primary/20  before:w-full before:h-2 before:-z-1 dark:before:-z-1 before:bottom-0"
            >
              Мы сотрудничаем с клиникой КДЛ
            </p>
            <h1
              className="py-4 "
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Более 2500 видов анализов
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="text-xl text-baseText  dark:text-darktext dark:text-opacity-80 font-normal md:pb-14 pb-6"
            >
              Кровь, моча, гормоны, аллергены, онкомаркеры - все в одном месте
            </p>
            <div className="flex items-center md:justify-normal lg:justify-center justify-start flex-wrap gap-4">
              <Link
                href="/services/lab"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden "
              >
                <span className="!flex !items-center gap-14">
                  Узнать больше
                </span>
              </Link>
              <Link
                href="tel:+79174001025"
                title="Позвонить +7 (917) 400-10-25"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1000"
                className="btn_outline btn-2 hover-outline-slide-down group"
              >
                <span className="!flex !items-center gap-14">
                  <PhoneIcon />
                  Записаться
                </span>
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="col-span-6  lg:flex hidden items-center gap-3"
          >
            <div className=" relative rounded-tl-166 rounded-br-166 w-full">
              <Image
                src="/images/hero/hero_2.jpg"
                alt="hero"
                width={0}
                height={0}
                quality={100}
                sizes="100vh"
                className="w-full h-full"
              />
              {/* <div className="bg-primary rounded-22 shadow-hero-box py-4 px-5 absolute top-16 -left-20">
                <p className="text-lg font-bold text-white">
                  Медсестра выезжает <br /> на дом
                </p>
              </div> */}
            </div>
            <div className="relative rounded-tr-166 rounded-bl-166 w-full mt-32">
              <Image
                src="/images/hero/hero_1.jpg"
                alt="hero"
                width={0}
                height={0}
                quality={100}
                sizes="100vh"
                className="w-full h-full"
              />
              <div className="bg-primary rounded-22 shadow-hero-box py-4 px-5 absolute top-20 -right-20 xl:inline-block hidden">
                <p className="text-sm text-white">
                  Медсестра выезжает <br /> на дом
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
