import Link from "next/link"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <main className="grow">
        {children}
      </main>
      <footer className="p-4 md:p-8 lg:p-10 bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <Link href="/" className="flex justify-center items-center text-2xl font-semibold text-white">
            GOLI
          </Link>
          <p className="my-6 text-gray-500 text-gray-400">Glossário Online em Libras para Informática</p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
            <li>
              <Link href="/sobre" className="mr-4 hover:underline md:mr-6">Sobre</Link>
            </li>
            <li>
              <Link href="/contato" className="mr-4 hover:underline md:mr-6">Contato</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Layout
