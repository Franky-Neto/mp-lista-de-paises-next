import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const nunitoSans = Nunito_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lista de Países",
  description: "Projeto Educacional - Lista de Países",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.variable}>
        <main className="bg-gray-100 min-h-screen flex flex-col items-center">
          <nav className="w-full bg-white h-16 flex items-center justify-center">
            <section className="container flex items-center gap-3">
              <Image
                width={48}
                height={48}
                src="/logoCountries.svg"
                alt="Logo da APlicação emoji globo"
              />
              <h1 className="font-bold text-2xl gap-3">Lista de Países</h1>
            </section>
          </nav>

          {children}
        </main>
      </body>
    </html>
  );
}
