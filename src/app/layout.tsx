import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import NextTopLoader from "nextjs-toploader";
import CookieConsent from "@/components/Common/CookieConsent";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-manrope",
});


export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: any;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={manrope.className}>   
        <ThemeProvider  attribute="class" defaultTheme="system" enableSystem>  
              <Aoscompo>
                <Header />
                <NextTopLoader />
                {children}
                <Footer />
              </Aoscompo>
              <ScrollToTop />
              <CookieConsent />
              </ThemeProvider>
      </body>
    </html>
  );
}
