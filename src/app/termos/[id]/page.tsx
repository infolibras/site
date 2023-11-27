import type { NextPage } from "next"

const Page: NextPage<{ params: { id: string } }> = () => {
  return (
    <>
      <div className="flex items-center mb-10 gap-2">
        <a href="../index.html">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M7.94 13.06a1.5 1.5 0 0 1 0-2.12l5.656-5.658a1.5 1.5 0 1 1 2.121 2.122L11.121 12l4.596 4.596a1.5 1.5 0 1 1-2.12 2.122L7.938 13.06Z"/></g></svg>
        </a>
        <h1 className="font-bold text-4xl">Lorem ipsum</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-2/3">
          <h2 className="font-bold text-2xl">Definições</h2>
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-4">
            <div className="flex gap-2 items-center mb-5 text-gray-500">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                Lorem ipsum
              </span>
            </div>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusantium eligendi facere ad est nobis corrupti quos, deserunt, aspernatur illum animi similique ut velit consectetur, ipsam minima eius? Iste, temporibus!</p>
            <iframe width="100%" style={{ aspectRatio: "16 / 9" }} src="https://www.youtube.com/embed/v0U22Ww0LwY?si=UjXDw4cpN9fg3OPy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div className="flex mt-5">
              <span className="font-semibold">Fonte:&ensp;</span>
              <a href="https://google.com.br" className="hover:underline text-blue-600">https://google.com.br</a>
            </div>
            <div className="flex justify-end gap-3">
              <a href="./editar_definicao.html" className="flex justify-end items-center mt-5 text-gray-500 hover:underline">
                <span className="text-sm">Editar</span>
              </a>
              <a href="#" className="flex justify-end items-center mt-5 text-gray-500 hover:underline">
                <span className="text-sm">Deletar</span>
              </a>
            </div>
          </article>
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-4">
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusantium eligendi facere ad est nobis corrupti quos, deserunt, aspernatur illum animi similique ut velit consectetur, ipsam minima eius? Iste, temporibus!</p>
            <div className="flex mt-5">
              <span className="font-semibold">Fonte:&ensp;</span>
              <a href="https://google.com.br" className="hover:underline text-blue-600">https://google.com.br</a>
            </div>
          </article>
          <a href="./editar_definicao.html" className="flex justify-end items-center mt-5 text-gray-500 hover:underline">
            <span className="text-sm">Adicionar definição</span>
          </a>
        </div>
        <div className="w-full md:w-1/3">
          <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Categorias</h5>
              <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Ver todas</a>
            </div>
            <div>
              <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                  <a href="#" className="flex items-center">
                    <span className="ml-4 text-sm font-medium text-gray-900 dark:text-white">Lorem ipsum</span>
                  </a>
                </li>
                <li className="py-3 sm:py-4">
                  <a href="#" className="flex items-center">
                    <span className="ml-4 text-sm font-medium text-gray-900 dark:text-white">Lorem ipsum</span>
                  </a>
                </li>
                <li className="py-3 sm:py-4">
                  <a href="#" className="flex items-center">
                    <span className="ml-4 text-sm font-medium text-gray-900 dark:text-white">Lorem ipsum</span>
                  </a>
                </li>
                <li className="py-3 sm:py-4">
                  <a href="#" className="flex items-center">
                    <span className="ml-4 text-sm font-medium text-gray-900 dark:text-white">Lorem ipsum</span>
                  </a>
                </li>
                <li className="py-3 sm:py-4">
                  <a href="#" className="flex items-center">
                    <span className="ml-4 text-sm font-medium text-gray-900 dark:text-white">Lorem ipsum</span>
                  </a>
                </li>
              </ul>
              <a href="./adicionar_categoria.html" className="flex justify-end items-center mt-5 text-gray-500 hover:underline">
                <span className="text-sm">Adicionar categoria</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
