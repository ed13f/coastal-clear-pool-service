import type { Metadata } from "next";

import "../../styles/globals.scss";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const metadata: Metadata = {
  title: "Coastal Clear Pool Repair",
  description: "Servicing all your pool needs in the greater palm beach county area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
