import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gooli",
  description: "Glossário online sobre informática acessível para deficientes auditivos"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main>
          {children}
        </main>
        <footer className="p-4 md:p-8 lg:p-10 bg-gray-800">
          <div className="mx-auto max-w-screen-xl text-center">
            <a href="#" className="flex justify-center items-center text-2xl font-semibold text-white">
              Gooli
            </a>
            <p className="my-6 text-gray-500 text-gray-400">Glossário online sobre informática acessível para deficientes auditivos</p>
            <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Sobre</a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Contato</a>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  )
}
