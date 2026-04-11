import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Services } from "@/components/Ui";
import HeroSub from "@/components/Ui/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги | Гиппократ",
};

const page = () => {
      const breadcrumbLinks = [
        { href: "/", text: "Главная" },
        { href: "/services", text: "Услуги" },
    ];

  return (
     <>
            <HeroSub
                title="Услуги"
                description="Вам не нужно ездить по всему городу. У нас можно получить
              консультации ведущих специалистов, сдать анализы и пройти
              процедуры — все в одном месте."
                breadcrumbLinks={breadcrumbLinks}
            />
<Services showTitle={false}/>
    </>
  );
};

export default page;