import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apexify.dev"),
  title: {
    default:
      "Apexify — Full-Service Digital Agency | Web, Mobile & Software Development",
    template: "%s | Apexify",
  },
  description:
    "Apexify builds world-class digital products — websites, mobile apps, custom software, dashboards, and automation systems. Trusted by 50+ clients across 12+ countries. Get a free consultation today.",
  keywords: [
    "web development",
    "mobile app development",
    "custom software development",
    "Next.js development",
    "Flutter app development",
    "React development",
    "UI/UX design",
    "SEO services",
    "business automation",
    "cloud solutions",
    "digital agency India",
    "software company Pune",
    "Apexify",
  ],
  authors: [{ name: "Apexify", url: "https://apexify.dev" }],
  creator: "Apexify",
  publisher: "Apexify",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apexify.dev",
    siteName: "Apexify",
    title: "Apexify — Full-Service Digital Agency",
    description:
      "We build websites, mobile apps, custom software & automation systems that help businesses grow faster. 100+ projects delivered. 50+ happy clients.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Apexify — Full-Service Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apexify — Full-Service Digital Agency",
    description:
      "Web development, mobile apps, custom software & automation. 100+ projects. 50+ happy clients.",
    images: ["/og-image.svg"],
    creator: "@apexify",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://apexify.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
