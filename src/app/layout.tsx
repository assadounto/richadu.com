import React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/themeProvider";
import NavBar from "./ui/nav/nav";
import Footer from "./ui/footer/footer";

const poppins = Poppins({ weight: ["100", '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Richmond Portfolio',
  description: 'Showcasing my projects and blog posts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} p-5 dark:bg-dark dark:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main className="pt-[60px]"> {/* Adjust the padding to match NavBar height */}
            {children}
          </main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
