"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Physician() {
  const t = useTranslations("physician");

  return (
    <section id="physicians" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-2xl font-bold text-primary sm:text-3xl">
          {t("sectionTitle")}
        </h2>
        <div className="flex justify-center">
          <article className="max-w-sm rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-md">
            <div className="mx-auto mb-6 h-44 w-44 overflow-hidden rounded-full border-4 border-calm-mint">
              <Image
                src="/images/dr-samir-issa.png"
                alt={t("photoAlt")}
                width={176}
                height={176}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <h3 className="mb-1 text-xl font-bold text-gray-900">{t("name")}</h3>
            <p className="mb-2 font-semibold text-medical-teal">{t("subtitle")}</p>
            <p className="text-sm leading-relaxed text-gray-600">{t("description")}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
