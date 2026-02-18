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
    <section id="services" className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-2xl font-bold text-primary sm:text-3xl">
          {t("sectionTitle")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map(({ key, image }) => (
            <article
              key={key}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <Image
                  src={image}
                  alt={t(`${key}.alt`)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">{t(`${key}.title`)}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{t(`${key}.description`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
