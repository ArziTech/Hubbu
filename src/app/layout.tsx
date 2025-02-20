import type { Metadata } from "next";
import { Poppins, Nova_Square } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import ReactQuery from "@/components/providers/react-query";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const novaSquare = Nova_Square({
  variable: "--font-nova-square",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${novaSquare.variable} min-h-full font-poppins antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NuqsAdapter>
            <ReactQuery>{children}</ReactQuery>
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
