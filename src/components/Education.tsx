"use client";

import { useTranslations } from "next-intl";

const pdfFiles = ["ScleroFacts.pdf", "doc2.pdf", "doc3.pdf", "doc4.pdf", "doc5.pdf"];

export default function Education() {
  const t = useTranslations("education");

  const items = [
    { title: t("items.0.title"), text: t("items.0.text") },
    { title: t("items.1.title"), text: t("items.1.text") },
    { title: t("items.2.title"), text: t("items.2.text") },
  ];

  return (
    <section id="education" className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-2xl font-bold text-primary sm:text-3xl">
          {t("sectionTitle")}
        </h2>

        {/* PDF Links */}
        <div className="mb-12 rounded-2xl border border-dashed border-medical-teal bg-white p-6 text-center sm:p-8">
          <h3 className="mb-4 text-lg font-bold text-gray-800">{t("pdfTitle")}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {pdfFiles.map((file, i) => (
              <a
                key={file}
                href={file}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
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
              className="rounded-xl border-s-4 border-primary bg-white p-5 shadow-sm transition-transform hover:translate-x-1 sm:p-6"
            >
              <h3 className="mb-2 text-base font-bold text-gray-900 sm:text-lg">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
