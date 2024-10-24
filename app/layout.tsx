import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Analytics } from '@vercel/analytics/react';
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
let title = "Nishaanth | Software Developer";
let description = "Nishaanth is a full-stack developer with 4 years of experience.";
let url = "https://nishaanth.com";
let ogimage = [
  {
    url: "https://www.nishaanth.com/thumbnail.png",
    width: 1200,
    height: 630,
    alt: "nishaanth"
  }
];
let twitterid = '@nishaaanth2';
let sitename = 'nishaanth.com';

export const metadata = {
  title,
  description,
  metadataBase: new URL(url),
  keywords: [
    'nishaanth',
    'nishaanth.com',
    'nishaanth.dev',
    'nishaanth.io',
    'nishaanth.ai',
    'portfolio',
    'full-stack developer',
    'web developer',
    'software engineer',
    'react',
    'next.js',
    'node.js',
    'express',
    'mongodb',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: ogimage,
    title,
    description,
    url: url,
    siteName: sitename,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ogimage,
    title,
    description,
    creator: twitterid,
    site: twitterid,
  },
  alternates: {
    canonical: url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Head>

      <Script async strategy="afterInteractive" id="analytics">
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K7J7QRKF');
        `}
      </Script>
      </Head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            
            <Header />
            {children}
            <Analytics />

            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
