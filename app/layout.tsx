import type { Metadata } from "next";
import { Arima, Poppins } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const arima = Arima({
  subsets: ["latin"],
  variable: "--font-arima",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Book Publishers for Self-Publishing Success",
  description:
    "AMZSelfPub helps authors write, publish, and promote their books with expert guidance from manuscript to marketing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${arima.variable} ${poppins.variable}`}>
      <body className="min-h-full max-w-full overflow-x-clip bg-white antialiased">
        <SiteHeader />
        <div className="max-w-full overflow-x-clip">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
