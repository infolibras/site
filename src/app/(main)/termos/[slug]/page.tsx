import type { NextPage } from "next"
import Categories from "../../components/Categories"
import Link from "next/link"
import Video from "./components/Video"

interface Termo {
  slug: string
  id: string
  termo: string
  definicoes: {
    id: string
    definicao: string
    fonte: string
    urlVideo?: string
    categoria?: {
      id: string
      nome: string
      slug: string
    }
  }[]
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/termos`)
  const termos: Termo[] = await res.json()

  return termos.map(termo => ({
    slug: termo.slug
  }))
}

const Page: NextPage<{ params: { slug: string } }> = async ({ params: { slug } }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/termos/obter/${slug}`)
  const termo: Termo = await res.json()

  const isAdmin = true

  return (
    <div
      className="w-full p-5 lg:w-4/5 xl:w-8/12 2xl:w-7/12 lg:p-0 mx-auto flex flex-col gap-12 my-12"
    >
      <div className="flex items-center mb-10 gap-2">
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M7.94 13.06a1.5 1.5 0 0 1 0-2.12l5.656-5.658a1.5 1.5 0 1 1 2.121 2.122L11.121 12l4.596 4.596a1.5 1.5 0 1 1-2.12 2.122L7.938 13.06Z"/></g></svg>
        </Link>
        <h1 className="font-bold text-4xl">{termo.termo}</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-2/3">
          <h2 className="font-bold text-2xl">Definições</h2>
          {termo.definicoes.map(definicao => (
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md mt-8" key={definicao.id}>
              {definicao.categoria && (
                <div className="flex gap-2 items-center mb-5 text-gray-500">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    {definicao.categoria.nome}
                  </span>
                </div>
              )}
              <blockquote cite={definicao.fonte} className="mb-5 font-light text-gray-500">
                <p>{definicao.definicao}</p>
              </blockquote>
              {definicao.urlVideo && <Video url={definicao.urlVideo} />}
              <div className="flex mt-5">
                <span className="font-semibold">Fonte:&ensp;</span>
                <cite className="not-italic"><a href={definicao.fonte} target="_blank" className="hover:underline text-blue-600">{definicao.fonte}</a></cite>
              </div>
              {isAdmin && (
                <div className="flex justify-end gap-3">
                  <Link href={`/admin/definicoes/${definicao.id}/editar`} className="flex justify-end items-center mt-5 text-gray-500 hover:underline">
                    <span className="text-sm">Editar</span>
                  </Link>
                </div>
              )}
            </article>
          ))}
          {isAdmin && (
            <div className="flex justify-end items-center mt-5 text-gray-500 hover:underline">
              <span className="text-sm">Adicionar definição</span>
            </div>
          )}
        </div>
        <Categories />
      </div>
     </div>
  )
}

export default Page
