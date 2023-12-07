import type { NextPage } from "next"

interface Definicao {
  id: string
  definicao: string
  fonte: string
  urlVideo?: string
  idCategoria?: string
}

interface Categoria {
  id: string
  nome: string
}

export const dynamic = "force-dynamic"

const Page: NextPage<{ params: { id: string } }> = async ({ params: { id } }) => {
  const res1 = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/definicoes/${id}/obter`)
  const definicao: Definicao = await res1.json()
  const res2 = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/categorias`)
  const categorias: Categoria[] = await res2.json()

  const update = async (formData: FormData) => {
    "use server"

    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/definicoes/${id}/editar`, {
      method: "PATCH",
      body: formData
    })
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <div className="flex items-center mb-4 gap-2">
          <a href="./termo.htmlFor">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M7.94 13.06a1.5 1.5 0 0 1 0-2.12l5.656-5.658a1.5 1.5 0 1 1 2.121 2.122L11.121 12l4.596 4.596a1.5 1.5 0 1 1-2.12 2.122L7.938 13.06Z"/></g></svg>
          </a>
          <h1 className="font-bold text-gray-900 dark:text-white">Editar definição</h1>
        </div>
        <form action={update}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Definição</label>
              <textarea id="description" rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" defaultValue={definicao.definicao}></textarea>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
              <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={definicao.idCategoria ?? undefined}>
                <option value={undefined}>(Nenhuma)</option>
                {categorias.map(categoria => (
                  <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link do vídeo</label>
              <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="https://[...]" value={definicao.urlVideo ?? undefined} />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button type="submit" className="text-white !bg-blue-700 !hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Page
