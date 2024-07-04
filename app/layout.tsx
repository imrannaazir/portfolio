import Header from "@components/Header/Header";
import "../style/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@provider/Provider";
import Footer from "@components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imran N. Emon | Full stack developer",
  description:
    "Next JS Web App Developer. Passionate about staying up-to-date with the latest web development technologies and best practices. Lets talk soon!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
