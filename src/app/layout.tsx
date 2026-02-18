import { Raleway } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${raleway.variable} font-sans antialiased text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
