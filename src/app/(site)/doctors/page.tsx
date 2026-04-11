import Testimonials from "@/components/Home/Testimonials";
import TicketSection from "@/components/Home/TicketSection";
import OurDoctors from "@/components/Home/Doctors";
import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Наши врачи | Symposium",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Главная" },
    { href: "/doctors", text: "Наши врачи" },
  ];
  return (
    <>
      <HeroSub
        title="Наши врачи"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
      />
      <OurDoctors showTitle={false} />
      <Testimonials />
      <TicketSection />
    </>
  );
};

export default page;
