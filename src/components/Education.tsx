"use client";

import { useTranslations } from "next-intl";

const pdfFiles = ["ScleroFacts.pdf", "doc2.pdf", "doc3.pdf", "doc4.pdf", "doc5.pdf"];

const itemIcons = [
  // Leg swelling
  <svg key="swelling" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Spider veins
  <svg key="veins" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>,
  // Leg pain
  <svg key="pain" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
];

export default function Education() {
  const t = useTranslations("education");

  const items = [
    { title: t("items.0.title"), text: t("items.0.text") },
    { title: t("items.1.title"), text: t("items.1.text") },
    { title: t("items.2.title"), text: t("items.2.text") },
  ];

  return (
    <section id="education" className="bg-gray-50 px-4 py-16 dark:bg-gray-800/60 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">{t("sectionTitle")}</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-medical-teal" aria-hidden="true" />
        </div>

        {/* PDF Downloads */}
        <div className="mb-10 rounded-2xl border border-dashed border-medical-teal bg-white p-6 dark:bg-gray-800 sm:p-8">
          <h3 className="mb-1 flex items-center gap-2 text-lg font-bold text-gray-800 dark:text-gray-100">
            <svg className="h-5 w-5 shrink-0 text-medical-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            {t("pdfTitle")}
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {pdfFiles.map((file, i) => (
              <a
                key={file}
                href={file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white hover:shadow-md dark:bg-primary/10 dark:hover:bg-primary"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t(`pdfs.${i}`)}
              </a>
            ))}
          </div>
        </div>

        {/* Info Cards */}
        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                {itemIcons[i]}
              </div>
              <div>
                <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white sm:text-lg">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
