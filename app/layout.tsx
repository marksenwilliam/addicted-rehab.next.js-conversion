import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nytt Liv | Addicted Rehab",
  description:
    "Privat rehab & beroendeklinik i Spanien. Individuell behandling för alkoholism och beroende.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body className="font-sans antialiased selection:bg-brand-peach selection:text-brand-navy">
        {/* Paper Texture Overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 bg-paper-texture mix-blend-multiply"></div>

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
