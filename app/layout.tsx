import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Sallon barber Celeiro",
  description: "Sallon barber Celeiro",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt_br" className="dark">
      <body className={geistSans.className}>
        <div className="flex h-full flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
