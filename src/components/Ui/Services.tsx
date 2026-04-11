import React from "react";
import Link from "next/link";
import { conferences } from "../../app/api/data";

const Services = ({ showTitle = true }) => {
  return (
    <>
      <section className="dark:bg-darkmode pt-0">
        <div className="container">
         {showTitle &&<div className="text-center md:pb-20 pb-8">
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
          </div> }
          <div className="flex items-center flex-wrap w-full border border-solid  dark:border-dark_border md:px-14 px-6 rounded-22">
            {conferences.map((conference, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 300}`}
                data-aos-duration="1000"
                className="grid grid-cols-1 sm:grid-cols-[1fr_auto] sm:grid-row-2 lg:grid-cols-[1fr_1fr_auto] lg:grid-row-1 items-center  gap-4 flex-wrap justify-between w-full md:py-12 py-5 border-b border-solid  dark:border-dark_border last:border-b-0"
              >
                <h6 className="text-[26px] leading-[2.1rem] font-bold text-accentTextBrown dark:text-white ">
                  {conference.title}
                </h6>
                <div className="flex items-center  lg:gap-8 gap-4">
                  <div className="flex items-center ">
                    <conference.icon className="lg:!w-16 lg:!h-16 !w-10 !h-10 text-icons opacity-80 dark:text-white" />
                  </div>
                  <div className="flex flex-col items-start flex-wrap">
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
                  className="btn_outline btn-2 btn_outline hover-outline-slide-down sm:row-span-2 sm:col-start-2 sm:row-start-1 lg:row-span-1 lg:col-start-3"
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
