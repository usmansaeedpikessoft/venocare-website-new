import { Raleway } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const raleway = Raleway({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-raleway",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme'),s=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&s))document.documentElement.classList.add('dark');}catch(e){}`,
          }}
        />
      </head>
      <body className={`${raleway.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
