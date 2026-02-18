"use client";

import { useTranslations } from "next-intl";

export default function PromoBanner() {
  const t = useTranslations("promo");

  return (
    <div className="bg-calm-mint px-4 py-2.5 text-center text-xs font-extrabold tracking-wide text-green-800 sm:text-sm">
      {t("text")}
    </div>
  );
}
