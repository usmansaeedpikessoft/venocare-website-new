"use client";

import { useTranslations } from "next-intl";

export default function Pricing() {
  const t = useTranslations("pricing");

  const services = [
    { name: t("services.0.name"), price: t("services.0.price") },
    { name: t("services.1.name"), price: t("services.1.price") },
    { name: t("services.2.name"), price: t("services.2.price") },
    { name: t("services.3.name"), price: t("services.3.price") },
    { name: t("services.4.name"), price: t("services.4.price") },
    { name: t("services.5.name"), price: t("services.5.price") },
    { name: t("services.6.name"), price: t("services.6.price") },
    { name: t("services.7.name"), price: t("services.7.price") },
    { name: t("services.8.name"), price: t("services.8.price") },
    { name: t("services.9.name"), price: t("services.9.price") },
  ];

  return (
    <section id="prices" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-2xl font-bold text-primary sm:text-3xl">
          {t("sectionTitle")}
        </h2>

        {/* Discount Policy */}
        <div className="mb-10 rounded-2xl border border-border-soft bg-calm-mint p-6 sm:p-8">
          <h3 className="mb-4 text-lg font-bold text-green-800">{t("policyTitle")}</h3>
          <ul className="space-y-3 text-sm text-green-900 sm:text-base">
            <li className="flex gap-2">
              <span className="shrink-0 font-extrabold">{t("discount50Label")}</span>
              <span>{t("discount50a")}</span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 font-extrabold">{t("discount50Label")}</span>
              <span>{t("discount50b")}</span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 font-extrabold">{t("discount25Label")}</span>
              <span>{t("discount25")}</span>
            </li>
          </ul>
        </div>

        {/* Price Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-4 text-start text-sm font-semibold sm:px-6">{t("serviceHeader")}</th>
                  <th className="px-4 py-4 text-end text-sm font-semibold sm:px-6">{t("priceHeader")}</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-50 transition-colors hover:bg-gray-50 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="px-4 py-3.5 text-sm text-gray-700 sm:px-6">{service.name}</td>
                    <td className="px-4 py-3.5 text-end text-sm font-extrabold text-medical-teal sm:px-6">
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
