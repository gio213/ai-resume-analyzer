import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProviderClient";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Resume Analyzer - Optimize Your Resume",
  description:
    "AI Resume Analyzer helps you optimize your resume for job applications by providing insights and suggestions.",
  openGraph: {
    title: "AI Resume Analyzer",
    description:
      "Optimize your resume with AI-powered insights and suggestions.",
    url: "https://ai-resume-analyzer-woad.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://res-console.cloudinary.com/dimy1fj2c/thumbnails/v1/image/upload/v1740864083/YmVjb21lRHJpdmVyX2UybWxyMw==/drilldown",
        width: 1200,
        height: 630,
        alt: "AI Resume Analyzer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Resume Analyzer",
    description:
      "Optimize your resume with AI-powered insights and suggestions.",
    images: [
      "https://res-console.cloudinary.com/dimy1fj2c/thumbnails/v1/image/upload/v1740864083/YmVjb21lRHJpdmVyX2UybWxyMw==/drilldown",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          enableColorScheme
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
