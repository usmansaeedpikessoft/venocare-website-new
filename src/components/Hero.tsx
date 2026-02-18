"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background image panel */}
      <div
        className="flex min-h-[58vh] flex-col items-center justify-center px-6 py-24 text-center text-white sm:min-h-[65vh]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.62) 100%), url('https://static.wixstatic.com/media/3b1f25_efc1908db3fa487d88c92f3e48ce0350.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-3xl">
          {/* Location pill */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-medical-teal" aria-hidden="true" />
            Dubai &middot; UAE
          </div>

          <h1 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {t("heading")}
          </h1>
          <p className="mx-auto mb-9 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {t("subheading")}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-medical-teal px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl sm:text-base"
          >
            {t("cta")}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Trust stats bar */}
      <div className="bg-gray-900" aria-label="Clinic highlights">
        <div className="mx-auto flex max-w-3xl divide-x divide-gray-700">
          <div className="flex flex-1 flex-col items-center py-4 px-3">
            <span className="text-xl font-extrabold text-medical-teal sm:text-2xl">18+</span>
            <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs">
              Years Experience
            </span>
          </div>
          <div className="flex flex-1 flex-col items-center py-4 px-3">
            <span className="text-xl font-extrabold text-medical-teal sm:text-2xl">MOH</span>
            <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs">
              Licensed Clinic
            </span>
          </div>
          <div className="flex flex-1 flex-col items-center py-4 px-3">
            <span className="text-xl font-extrabold text-medical-teal sm:text-2xl">3</span>
            <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs">
              Core Treatments
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
