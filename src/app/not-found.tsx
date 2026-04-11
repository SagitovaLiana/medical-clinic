import HeroSub from "@/components/Ui/HeroSub";
import NotFound from "@/components/Ui/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Гиппократ",
};

const ErrorPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Главная" },
    { href: "/", text: "404" },
  ];
  return (
    <>
      <HeroSub
        title="404"
        description="Страница не найдена"
        breadcrumbLinks={breadcrumbLinks}
      />
      <NotFound />
    </>
  );
};

export default ErrorPage;
