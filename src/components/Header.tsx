"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const languages = [
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "ar", flag: "🇦🇪", label: "العربية" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "zh", flag: "🇨🇳", label: "中文" },
  { code: "it", flag: "🇮🇹", label: "Italiano" },
  { code: "ru", flag: "🇷🇺", label: "Русский" },
];

const navLinks = [
  { href: "#home", key: "home" },
  { href: "#physicians", key: "doctor" },
  { href: "#services", key: "treatments" },
  { href: "#prices", key: "prices" },
  { href: "#contact", key: "contact" },
] as const;

export default function Header() {
  const t = useTranslations("header");
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href={`/${locale}#home`} className="shrink-0">
          <Image
            src="/images/vc-logo.png"
            alt={t("logoAlt")}
            width={140}
            height={50}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              className="text-sm font-semibold text-gray-700 transition-colors hover:text-primary"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        {/* Right side: Language + Phone + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-sm transition-colors hover:border-primary"
              aria-label="Switch language"
            >
              <span className="text-base">{currentLang.flag}</span>
              <span className="hidden sm:inline">{currentLang.code.toUpperCase()}</span>
              <svg className="h-3 w-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute end-0 top-full mt-1 w-40 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}`}
                    onClick={() => setLangOpen(false)}
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 ${
                      lang.code === locale ? "bg-calm-mint font-semibold text-primary" : "text-gray-700"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Phone */}
          <a
            href="tel:+971529936643"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90 sm:flex"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {t("phone")}
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {navLinks.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-gray-50 py-3 text-sm font-semibold text-gray-700 transition-colors hover:text-primary"
            >
              {t(key)}
            </a>
          ))}
          <a
            href="tel:+971529936643"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {t("phoneLabel")}: {t("phone")}
          </a>
        </nav>
      )}
    </header>
  );
}
