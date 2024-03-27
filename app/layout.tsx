import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Providers"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WikiRest",
  description: "Wiki Restaurants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black/60 flex justify-center items-center h-screen w-screen `}>
        <AuthProvider>
        {children}
        </AuthProvider>
        </body>
    </html>
  );
}
