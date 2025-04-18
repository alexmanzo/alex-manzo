import type { Metadata } from "next";
import { Roboto_Slab, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Manzo",
  description: "Meet Alex Manzo, a front-end focused developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoSlab.variable} antialiased bg-slate-app text-slate-12 dark:text-slate-1`}
      >
        {children}
      </body>
    </html>
  );
}
