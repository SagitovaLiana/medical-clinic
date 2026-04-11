"use client";
import { useEffect, useState } from "react";
import { ArrowUpCircleIcon } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) { // Adjust the value as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`dp_backto_top fixed z-10 bottom-[6%] md:right-[2%] right-[5%] p-5 cursor-pointer ${
        isVisible ? "visible" : "hidden"
      }`}
      onClick={scrollToTop}
      aria-hidden={!isVisible} // Optional: for accessibility
    >
       <ArrowUpCircleIcon 
        className="w-10 h-10 text-primary hover:text-primary/80 transition-colors" 
        strokeWidth={1.5}
      />
    </div>
  );
}