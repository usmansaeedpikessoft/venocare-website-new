"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Physician() {
  const t = useTranslations("physician");

  return (
    <section id="physicians" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">{t("sectionTitle")}</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-medical-teal" aria-hidden="true" />
        </div>

        {/* Horizontal doctor card */}
        <article className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
          <div className="flex flex-col md:flex-row">
            {/* Photo panel */}
            <div className="flex shrink-0 items-center justify-center bg-calm-mint p-10 md:w-72">
              <figure>
                <div className="mx-auto h-44 w-44 overflow-hidden rounded-full border-4 border-white shadow-md lg:h-52 lg:w-52">
                  <Image
                    src="/images/dr-samir-issa.png"
                    alt={t("photoAlt")}
                    width={208}
                    height={208}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </figure>
            </div>

            {/* Content panel */}
            <div className="flex flex-col justify-center p-8 md:p-10">
              <h3 className="mb-1 text-2xl font-bold text-gray-900 lg:text-3xl">{t("name")}</h3>
              <p className="mb-5 font-semibold text-medical-teal">{t("subtitle")}</p>
              <p className="mb-6 max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base">
                {t("description")}
              </p>

              {/* Credential pills */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-calm-mint px-3 py-1.5 text-xs font-semibold text-green-800">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  MOH Licensed
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Laser Specialist
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Endovascular Expert
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
