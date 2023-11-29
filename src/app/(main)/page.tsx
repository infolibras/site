import Categories from "./components/Categories"
import Letters from "./components/Letters"

export default function Page() {
  return (
    <section
      id="#termos"
      className="w-full p-5 lg:w-4/5 xl:w-8/12 2xl:w-7/12 lg:p-0 mx-auto flex flex-col md:flex-row gap-12 my-12"
    >
       <div className="w-full md:w-2/3">
        <h1 className="font-bold text-2xl py-4">
          Listar termos
          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
            4
          </span>
        </h1>
        <Letters />
        <h1 className="font-bold text-2xl">
          Termos mais buscados
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
      <Categories />
    </section>
  )
}
