import type { Metadata } from "next";
import { DM_Mono, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import "./cadu.css";

const montserratAlternates = Montserrat_Alternates({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["900"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "CADU Planos de Saúde",
  description:
    "Infraestrutura de dados e coordenação do cuidado em autismo e neurodesenvolvimento: texto de referência para diálogo com operadoras, redes credenciadas e gestão assistencial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserratAlternates.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col cadu-body">{children}</body>
    </html>
  );
}
