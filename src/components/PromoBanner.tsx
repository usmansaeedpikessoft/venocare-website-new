"use client";

import { useTranslations } from "next-intl";

export default function PromoBanner() {
  const t = useTranslations("promo");

  return (
    <div className="bg-calm-mint px-4 py-2.5 text-center dark:bg-green-900/30">
      <p className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wide text-green-800 dark:text-green-300 sm:text-sm">
        <svg
          className="h-4 w-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
        {t("text")}
      </p>
    </div>
  );
}
