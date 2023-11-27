import Image from "next/image"
import libras from "./images/libras.png"

export default function Page() {
  return (
    <>
      <section className="bg-blue-700 text-center lg:text-left" id="hero">
        <div className="grid justify-center lg:max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              InfoLibras
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl">
              Glossário online sobre informática acessível para deficientes
              auditivos
            </p>
            <form className="mt-5">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="hidden absolute inset-y-0 start-0 md:flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="!bg-blue-700 text-white absolute end-2.5 bottom-2.5 !hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  <span className="hidden md:flex">Pesquisar termo</span>
                  <svg
                    className="w-4 h-4 text-white md:hidden"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={libras} alt="libras" />
          </div>
        </div>
      </section>
      <section
        id="#termos"
        className="w-full p-5 lg:w-4/5 xl:w-8/12 2xl:w-7/12 lg:p-0 mx-auto flex flex-col md:flex-row gap-12 my-12"
      >
        <div className="w-full md:w-2/3">
          <h1 className="font-bold text-2xl">
            Termos
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
              4
            </span>
          </h1>
          <h2 className="font-semibold text-xl mb-2 mt-4">
            A
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
              2
            </span>
          </h2>
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md mt-4">
            <div className="flex justify-between items-center mb-5 text-gray-500">
              <span className="bg-blue-700 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                <svg
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Contem vídeo
              </span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              <a href="./pages/termo.html">Lorem ipsum</a>
            </h2>
            <p className="mb-5 font-light text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              accusantium eligendi facere ad est nobis corrupti quos, deserunt,
              aspernatur illum animi similique ut velit consectetur, ipsam minima
              eius? Iste, temporibus!
            </p>
            <div className="flex justify-between items-center">
              <a
                href="./pages/termo.html"
                className="inline-flex items-center font-medium text-primary-600"
              >
                Ler mais
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </article>
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md mt-4">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              <a href="./pages/termo.html">Lorem ipsum</a>
            </h2>
            <p className="mb-5 font-light text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              accusantium eligendi facere ad est nobis corrupti quos, deserunt,
              aspernatur illum animi similique ut velit consectetur, ipsam minima
              eius? Iste, temporibus!
            </p>
            <div className="flex justify-between items-center">
              <a
                href="./pages/termo.html"
                className="inline-flex items-center font-medium text-primary-600"
              >
                Ler mais
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </article>
          <h2 className="font-semibold text-xl mb-2 mt-4">
            B
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
              2
            </span>
          </h2>
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md mt-4">
            <div className="flex gap-2 items-center mb-5 text-gray-500">
              <span className="bg-blue-700 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                <svg
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Contem vídeo
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                Lorem ipsum
              </span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              <a href="./pages/termo.html">Lorem ipsum</a>
            </h2>
            <p className="mb-5 font-light text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              accusantium eligendi facere ad est nobis corrupti quos, deserunt,
              aspernatur illum animi similique ut velit consectetur, ipsam minima
              eius? Iste, temporibus!
            </p>
            <div className="flex justify-between items-center">
              <a
                href="./pages/termo.html"
                className="inline-flex items-center font-medium text-primary-600"
              >
                Ler mais
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </article>
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md mt-4">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              <a href="./pages/termo.html">Lorem ipsum</a>
            </h2>
            <p className="mb-5 font-light text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              accusantium eligendi facere ad est nobis corrupti quos, deserunt,
              aspernatur illum animi similique ut velit consectetur, ipsam minima
              eius? Iste, temporibus!
            </p>
            <div className="flex justify-between items-center">
              <a
                href="./pages/termo.html"
                className="inline-flex items-center font-medium text-primary-600"
              >
                Ler mais
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </article>
        </div>
        <div className="w-full md:w-1/3">
          <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900">
                Categorias
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                  5
                </span>
              </h5>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Ver todas
              </a>
            </div>
            <div>
              <ul role="list" className="divide-y divide-gray-200">
                <li className="py-3 sm:py-4">
                  <a href="#" className="flex items-center">
                    <span className="ml-4 text-sm font-medium text-gray-900">
                      Lorem ipsum
                    </span>
                  </a>
                </li>
                <li className="py-3 sm:py-4">
                  <a href="#" className="flex items-center">
                    <span className="ml-4 text-sm font-medium text-gray-900">
                      Lorem ipsum
                    </span>
                  </a>
                </li>
                <li className="py-3 sm:py-4">
                  <a href="#" className="flex items-center">
                    <span className="ml-4 text-sm font-medium text-gray-900">
                      Lorem ipsum
                    </span>
                  </a>
                </li>
                <li className="py-3 sm:py-4">
                  <a href="#" className="flex items-center">
                    <span className="ml-4 text-sm font-medium text-gray-900">
                      Lorem ipsum
                    </span>
                  </a>
                </li>
                <li className="py-3 sm:py-4">
                  <a href="#" className="flex items-center">
                    <span className="ml-4 text-sm font-medium text-gray-900">
                      Lorem ipsum
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
