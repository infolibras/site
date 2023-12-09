import { NextPage } from "next"
import Letters from "../../../components/Letters"
import Term from "@/app/(main)/components/Term"
import Categories from "@/app/(main)/components/Categories"

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
  )
}

export default Page
