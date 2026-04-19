import React from "react";
import Link from "next/link";
import Image from "next/image";

const CTA = () => {
  return (
    <>
      <section className="dark:bg-darklight lg:pt-20 pt-10">
        <div className="container">
          <div className="bg-baseText dark:bg-darkmode relative md:mx-auto mx-0 overflow-hidden py-0 rounded-22 lg:-mb-48 dark:lg:-mb-48 ">
            <div className="flex flex-wrap items-center justify-center gap-20 sm:p-10 p-5 ">
              <div className="xl:text-start text-center">
                <p className="sm:text-4xl text-[28px] leading-[2.25rem] font-bold text-white xl:max-w-404 max-w-full xl:pb-9 pb-2">
                  Запишитесь на приём сегодня
                </p>
                <p className="sm:text-xl text-[14px] leading-[2.25rem]  text-white l max-w-full xl:pb-9 pb-2">
                  Без очередей. Удобное время
                </p>
                <Link
                  href="tel:+79174001025"
                  title="Позвонить +7 (917) 400-10-25"
                  className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden before:bg-accentTextBrown dark:before:bg-primary "
                >
                  <span className="sm:!px-20 px-10 !border-accentTextBrown !text-white hover:!text-accentTextBrown dark:!border-primary dark:hover:!text-primary ">
                    Записаться
                  </span>
                </Link>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1000"
                className="col-span-6  xl:flex hidden items-center gap-3"
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
                </div>
                <div className="relative rounded-tr-166 rounded-bl-166 w-full mt-20">
                  <Image
                    src="/images/hero/hero_1.jpg"
                    alt="hero"
                    width={0}
                    height={0}
                    quality={100}
                    sizes="100vh"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
