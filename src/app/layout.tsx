import "@/global/styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";

import AppHeader from "@/components/main/AppHeader";
import OnEnterApp from "@/components/main/OnEnterApp";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "BlogMaster",
  description:
    "BlogMaster - ваш надежный помощник в создании и развитии блога. У нас вы найдете полезные советы по написанию контента, продвижению блога в сети и монетизации вашего труда. Присоединяйтесь к нашему сообществу блоггеров и станьте настоящим мастером своего блога!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <OnEnterApp />
        <AppHeader />
        <main>{children}</main>
        <ToastContainer />
      </body>
    </html>
  );
}
