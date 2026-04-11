import React from "react";
import { Stethoscope } from "lucide-react";
import Link from "next/link";
import ThumbnailCarousel from "../ThumbnailCarousel";

const AboutUs = () => {
  return (
    <>
      <section className="bg-neutral dark:bg-darklight relative overflow-hidden before:absolute before:content-[' '] before:bg-accentTextBrown before:dark:bg-darkmode before:opacity-50 before:w-687 before:h-687 before:-bottom-1/2 before:rounded-full before:xl:inline-block before:hidden">
        {/* <div className="absolute -bottom-20 left-70 transform ">
          <Stethoscope size={500} className="bg-primary/80" />
        </div> */}
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center lg:gap-24 gap-5">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <ThumbnailCarousel />
            </div>
            <div
              className="md:pt-0 pt-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h2>Медицинская клиника «Гиппократ»</h2>
              <p className="text-lg font-normal text-baseText  dark:text-darktext dark:text-opacity-80 max-w-506 md:pt-6 pt-5 md:pb-6 pb-4">
                С 2016 года мы задаем высокие стандарты в оказании медицинской
                помощи. За десятилетие работы клиника «Гиппократ» заслужила
                репутацию места, где профессионализм встречается с
                человечностью, а передовые технологии работают на благо каждого
                пациента.
              </p>
              <div className="flex items-center flex-wrap gap-30 mb-5">
                <div className="text-start sm:pb-0 pb-5">
                  <h2 className="text-accentTextBrown">10+</h2>
                  <p className="text-lg font-medium text-baseText dark:text-darktext">
                    лет работы
                  </p>
                </div>
                <div className="text-start sm:pb-0 pb-5">
                  <h2 className="text-accentTextBrown">2</h2>
                  <p className="text-lg font-medium text-baseText dark:text-darktext">
                    кабинета
                  </p>
                </div>
                <div className="text-start sm:pb-0 pb-5">
                  <h2 className="text-accentTextBrown">1тыс+</h2>
                  <p className="text-lg font-medium text-baseText dark:text-darktext">
                    довольных пациентов
                  </p>
                </div>
              </div>
              <Link
                href="/aboutus"
                className="btn_outline btn-2 hover-outline-slide-down before:bg-accentTextBrown [&>span]:text-accentTextBrown [&>span]:border-accentTextBrown dark:before:bg-primary dark:[&>span]:text-primary dark:[&>span]:hover:text-white dark:[&>span]:border-primary"
              >
                <span>Узнать больше</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
