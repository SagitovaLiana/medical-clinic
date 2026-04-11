// import BoxSlider from "@/components/SharedComponent/BoxSlider";
import HeroSub from "@/components/Ui/HeroSub";
import React from "react";
import '@/Style/style.css'
import TicketSection from "@/components/Ui/CTA";
// import Testimonial from "@/components/SharedComponent/Testimonial";
import Testimonials from "@/components/Ui/Testimonials";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "О нас | Symposium",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/aboutus", text: "О нас" },
  ];
  return (
    <>
      <HeroSub
        title="Event Schedules"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="dark:bg-darkmode">  
        <div className="container upcoming">
          {/* <BoxSlider/> */}
        </div>
      </section>      
      <div>
        <Testimonials />
        <TicketSection/>
      </div>
    </>
  );
};

export default page;
