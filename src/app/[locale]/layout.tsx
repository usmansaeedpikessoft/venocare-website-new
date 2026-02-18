import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import HtmlLangSetter from "@/components/HtmlLangSetter";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const languages: Record<string, string> = {};
  routing.locales.forEach((loc) => {
    languages[loc] = `https://www.venocaredubai.com/${loc}`;
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: `https://www.venocaredubai.com/${locale}`,
      languages,
    },
    openGraph: {
      type: "website",
      url: `https://www.venocaredubai.com/${locale}`,
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "https://static.wixstatic.com/media/48966f_d6a47b8e954e48f68bccf9090d9fb005~mv2.png",
        },
      ],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <HtmlLangSetter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: "VenoCare Dubai",
            alternateName: "Varicose Veins Clinic Dubai",
            image:
              "https://static.wixstatic.com/media/48966f_d6a47b8e954e48f68bccf9090d9fb005~mv2.png",
            url: `https://www.venocaredubai.com/${locale}`,
            logo: "https://www.venocaredubai.com/images/vc-logo.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2020 Building, Sheikh Zayed Rd, Unit M202",
              addressLocality: "Dubai",
              addressRegion: "Dubai",
              addressCountry: "AE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 25.2048,
              longitude: 55.2708,
            },
            telephone: "+971529936643",
            email: "info@venocaredubai.com",
            priceRange: "AED 500 - AED 12,450",
            currenciesAccepted: "AED",
            medicalSpecialty: ["VascularSurgery", "DiagnosticUltrasound"],
            availableService: [
              { "@type": "MedicalTherapy", name: "Vein Ablation & Laser" },
              { "@type": "MedicalTherapy", name: "Sclerotherapy for Spider Veins" },
              { "@type": "MedicalTest", name: "Diagnostic Vascular Lab Study" },
            ],
            sameAs: [
              "https://facebook.com/VenoCareDubai/",
              "https://www.instagram.com/venocare_uae/",
            ],
          }),
        }}
      />
      {children}
    </NextIntlClientProvider>
  );
}
