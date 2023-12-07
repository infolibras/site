import { NextPage } from "next"
import Search from "./components/Search"

interface Categoria {
  id: string
  nome: string
  slug: string
}

const Page: NextPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/categorias`)
  const categorias: Categoria[] = await res.json()

  return (
    <Search categories={categorias.map(categoria => categoria.nome)} />
  )
}

export default Page
