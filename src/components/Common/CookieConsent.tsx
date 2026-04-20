'use client';

import React, { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Проверяем, давал ли пользователь согласие раньше
    setShowConsent(!hasCookie("cookieConsent"));
  }, []);

  const acceptCookies = () => {
    setCookie("cookieConsent", "true", { 
      maxAge: 365 * 24 * 60 * 60 // 1 год
    });
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-baseText text-white p-4 shadow-lg">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center sm:text-left">
            Мы используем cookie-файлы для улучшения работы сайта. 
            Продолжая использование сайта, вы соглашаетесь с нашей 
            <Link href="/cookie" className="text-primary hover:underline mx-1">
              Политикой использования cookie
            </Link>
          </p>
          <button
            onClick={acceptCookies}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;