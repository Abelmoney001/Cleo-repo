import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import config from "@/utils/config"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  metadataBase: new URL(config.BASE_URL),
  title: "Cleo",
  description: "The Cat Ai news caster for stacks ",
  keywords: ["Cleo Ai newscaster", "Stacks", "Cleo"],
  publisher: "Cleo",
  openGraph: {
    title: "Cleo",
    description: "The Cat Ai news caster for stacks ",
    siteName: "Cleo",
    url: config.BASE_URL,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/cleo.jpg",
        alt: "Cleo",
        width: 1200,
        height: 675,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "/images/cleo.jpg",
        alt: "Cleo",
      },
    ],
    card: "summary_large_image",
    site: "@GoatCoinSTX",
    title: "Cleo",
    description: "The Cat Ai news caster for stacks ",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#ededed]`}
      >
        {children}
      </body>
    </html>
  )
}
