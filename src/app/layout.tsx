import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Providers from "./providers"
import { getServerSession } from "next-auth"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GOLI",
  description: "Glossário Online em Libras para Informática"
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  return (
    <html lang="pt-BR">
      <body className="min-h-screen" style={inter.style}>
        <Providers session={session}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
