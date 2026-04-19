import React from "react";
import { Metadata } from "next";
import { HeroSection, AboutUsSection } from "@/components/Home";
import { Doctors, Services, CTA, Testimonials } from "@/components/Ui";
export const metadata: Metadata = {
  title: "Гиппократ",
  //  icons: {
  //   icon: "./favicon.svg",
  // },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
      <Doctors />
      <Services />
      <Testimonials />
      <CTA />
    </main>
  );
}
