import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import ThumbnailCarousel from "@/components/Home/AboutSection";
import OurDoctors from "@/components/Home/Doctors";
import Services from "@/components/Home/Services";
// import Highlight from "@/components/Home/YearHighlight/page";
// import Upcoming from "@/components/Home/Upcoming";
import Testimonials from "@/components/Home/Testimonials";
import TicketSection from "@/components/Home/TicketSection";
export const metadata: Metadata = {
  title: "Symposium",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ThumbnailCarousel />
      <OurDoctors />
      <Services />
      {/* <Highlight /> */}
      {/* <Upcoming /> */}
      <Testimonials />
      <TicketSection />
    </main>
  );
}
