import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Alaska Solutions and Associates | Servicios Legales e Inmigración",
  description:
    "Servicios legales y de inmigración en Paterson, NJ con atención profesional, confidencial y personalizada.",
  metadataBase: new URL("https://alaskasolutions.org")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} bg-ivory text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
