"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative flex min-h-[50vh] items-center justify-center bg-cover bg-center px-6 py-20 text-center text-white sm:min-h-[60vh]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://static.wixstatic.com/media/3b1f25_efc1908db3fa487d88c92f3e48ce0350.jpg')",
      }}
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
          {t("heading")}
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
          {t("subheading")}
        </p>
        <a
          href="#contact"
          className="inline-block rounded-full bg-medical-teal px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:text-base"
        >
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
