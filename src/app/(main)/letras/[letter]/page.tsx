import { NextPage } from "next"
import Letters from "../../components/Letters"
import Term from "@/app/(main)/components/Term"
import Categories from "@/app/(main)/components/Categories"
import Link from "next/link"

interface Termo {
  slug: string
  id: number
  termo: string
  definicoes: number
  videos: number
  definicao: string
  categoria: string
}

export async function generateStaticParams() {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("")

  return letters.map(letter => ({ letter }))
}

const Page: NextPage<{ params: { letter: string } }> = async ({ params: { letter } }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/termos/listar/${letter}`)
  const termos: Termo[] = await res.json()

  return (
    <>
      <header className="bg-blue-700 p-5 sticky top-0 w-full">
        <div className="flex items-center gap-5 mx-auto w-full md:w-2/3 md:gap-10 lg:w-1/2 lg:gap-20">
          <Link href="/">
            <h1 className="font-bold text-white text-xl md:text-2xl">GOLI</h1>
          </Link>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <Link href="/pesquisar">
              <span
                className="block w-full p-6 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              />
            </Link>
          </div>
        </div>
      </header>
      <section
        id="#termos"
        className="w-full p-5 lg:w-4/5 xl:w-8/12 2xl:w-7/12 lg:p-0 mx-auto flex flex-col md:flex-row gap-12 my-12"
      >
        <div className="w-full md:w-2/3">
          <Letters currentLetter={letter} />
          <h1 className="font-bold text-4xl mt-8">
            Letra {letter.toUpperCase()}
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
              {termos.length}
            </span>
          </h1>
          {termos.map(termo => (
            <Term
              key={termo.id}
              term={termo.termo}
              video={termo.videos > 0}
              categories={[termo.categoria]}
              definicoes={termo.definicoes}
              description={termo.definicao}
              slug={termo.slug}
            />
          ))}
        </div>
        <Categories />
      </section>
    </>
  )
}

export default Page
