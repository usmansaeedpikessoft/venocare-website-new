"use client";

import { useTranslations } from "next-intl";

export default function Pricing() {
  const t = useTranslations("pricing");

  const services = Array.from({ length: 10 }, (_, i) => ({
    name: t(`services.${i}.name`),
    price: t(`services.${i}.price`),
  }));

  const discounts = [
    { label: t("discount50Label"), detail: t("discount50a") },
    { label: t("discount50Label"), detail: t("discount50b") },
    { label: t("discount25Label"), detail: t("discount25") },
  ];

  return (
    <section id="prices" className="px-4 py-16 dark:bg-gray-900 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">{t("sectionTitle")}</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-medical-teal" aria-hidden="true" />
        </div>

        {/* Discount Policy */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-border-soft bg-calm-mint dark:border-green-800/40 dark:bg-green-900/20">
          <div className="border-b border-border-soft px-6 py-4 dark:border-green-800/40 sm:px-8">
            <h3 className="flex items-center gap-2 text-lg font-bold text-green-800 dark:text-green-300">
              <svg className="h-5 w-5 shrink-0 text-medical-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
              </svg>
              {t("policyTitle")}
            </h3>
          </div>
          <ul className="divide-y divide-border-soft dark:divide-green-800/40">
            {discounts.map((d, i) => (
              <li key={i} className="flex items-start gap-3 px-6 py-4 sm:px-8">
                <span className="mt-0.5 shrink-0 rounded-full bg-medical-teal px-2.5 py-0.5 text-xs font-extrabold text-white">
                  {d.label}
                </span>
                <span className="text-sm leading-relaxed text-green-900 dark:text-green-200 sm:text-base">{d.detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md dark:border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-5 py-4 text-start text-sm font-semibold sm:px-6">{t("serviceHeader")}</th>
                  <th className="px-5 py-4 text-end text-sm font-semibold sm:px-6">{t("priceHeader")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {services.map((service, i) => (
                  <tr
                    key={i}
                    className={`transition-colors hover:bg-calm-mint/60 dark:hover:bg-green-900/20 ${
                      i % 2 === 0
                        ? "bg-white dark:bg-gray-800"
                        : "bg-gray-50/60 dark:bg-gray-700/50"
                    }`}
                  >
                    <td className="px-5 py-4 text-sm text-gray-700 dark:text-gray-300 sm:px-6">{service.name}</td>
                    <td className="px-5 py-4 text-end text-sm font-extrabold text-medical-teal sm:px-6">
                      {service.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
