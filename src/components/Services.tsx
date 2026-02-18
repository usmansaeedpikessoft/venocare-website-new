"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const serviceCards = [
  { key: "ablation", image: "/images/vein-ablation.png" },
  { key: "sclerotherapy", image: "/images/sclerotherapy.png" },
  { key: "diagnostic", image: "/images/non-invasive.png" },
] as const;

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="bg-gray-50 px-4 py-16 dark:bg-gray-800/60 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">{t("sectionTitle")}</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-medical-teal" aria-hidden="true" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map(({ key, image }, i) => (
            <article
              key={key}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <Image
                  src={image}
                  alt={t(`${key}.alt`)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                {/* Number badge */}
                <div className="absolute start-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white shadow-md">
                  {i + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">{t(`${key}.title`)}</h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{t(`${key}.description`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
