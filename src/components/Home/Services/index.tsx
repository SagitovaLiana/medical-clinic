import React from "react";
import Link from "next/link";
import { conferences } from "../../../app/api/data";

const Services = () => {
  return (
    <>
      <section className="dark:bg-darkmode pt-0">
        <div className="container">
          <div className="text-center md:pb-20 pb-8">
            <h2
              className="pb-8"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Услуги клиники
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="text-baseText dark:text-darktext dark:text-opacity-80 text-lg font-normal max-w-920 m-auto"
            >
              Вам не нужно ездить по всему городу. У нас можно получить
              консультации ведущих специалистов, сдать анализы и пройти
              процедуры — все в одном месте.
            </p>
          </div>
          <div className="flex items-center flex-wrap w-full border border-solid  dark:border-dark_border md:px-14 px-6 rounded-22">
            {conferences.map((conference, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 300}`}
                data-aos-duration="1000"
                className="grid grid-cols-[1fr_1fr_auto] items-center lg:gap-0 gap-4 flex-wrap justify-between w-full md:py-12 py-5 border-b border-solid  dark:border-dark_border last:border-b-0"
              >
                <h6 className="text-[26px] leading-[2.1rem] font-bold text-accentTextBrown dark:text-white max-w-286">
                  {conference.title}
                </h6>
                <div className="flex items-center flex-wrap gap-30">
                  <div className="flex items-center">
                    <conference.icon className="!w-16 !h-16 text-icons opacity-80 dark:text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-normal text-primary text-opacity-50 dark:text-opacity-80">
                      {conference.subtitle}
                    </p>
                    <p className="text-lg font-medium text-accentTextBrown dark:text-white">
                      {conference.speakers}
                    </p>
                  </div>
                </div>
                <Link
                  href={conference.buttonLink}
                  className="btn_outline btn-2 btn_outline hover-outline-slide-down"
                >
                  <span>Подробнее</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
