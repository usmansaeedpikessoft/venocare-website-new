"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";

export default function HtmlLangSetter() {
  const locale = useLocale();
  const isRTL = locale === "ar";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [locale, isRTL]);

  return null;
}
