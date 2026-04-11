"use client";
import React from "react";
import Image from "next/image";
import { doctors } from "@/app/api/data";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Doctors = ({ showTitle = true }) => {
  const pathname = usePathname();
  return (
    <>
      <section className={` dark:bg-darkmode ${pathname === "/" ? "" : ""}`}>
        {showTitle && <h2 className="text-center pb-12">Наши врачи</h2>}
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 items-stretch gap-8 mx-7">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              data-aos="fade-up"
              data-aos-delay={`${index * 300}`}
              data-aos-duration="1000"
              className={`col-span-1 group overflow-hidden ${
                index % 2 === 1 ? "lg:mt-28 mt-0" : ""
              }`}
            >
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={doctor.src}
                  alt={doctor.alt}
                  width={0}
                  height={0}
                  quality={100}
                  sizes="100vh"
                  className=" object-cover w-full h-full transition-all duration-0.4s group-hover:scale-110"
                />
              </div>
              <div className="pt-6">
                <h6 className="text-[26px] leading-[2.25rem] font-bold text-accentTextBrown dark:text-white">
                  {doctor.name}
                </h6>
                <span className="text-lg font-normal text-baseText dark:text-darktext dark:text-opacity-80">
                  {doctor.designation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Doctors;
