import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mis XV Años — Paula | 25 de Julio 2026",
  description:
    "Estás cordialmente invitado(a) a celebrar los XV Años de Paula. Sábado 25 de julio de 2026.",
  openGraph: {
    title: "Mis XV Años — Paula",
    description:
      "Te invitamos a celebrar los XV Años de Paula. 25 de julio de 2026.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full bg-warm-100">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased h-full w-full flex justify-center m-0">
        <main className="w-full max-w-[430px] min-h-screen bg-warm-50 shadow-2xl relative overflow-x-hidden flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
