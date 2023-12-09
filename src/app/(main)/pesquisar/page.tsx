import { NextPage } from "next"
import Search from "./components/Search"

interface Categoria {
  id: string
  nome: string
  slug: string
}

export const dynamic = "force-dynamic"

const Page: NextPage<{ searchParams: { categoria?: string } }> = async ({ searchParams: { categoria } }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/categorias`)
  const categorias: Categoria[] = await res.json()

  return (
    <Search categories={categorias.map(categoria => categoria.nome)} categoria={categoria} />
  )
}

export default Page
