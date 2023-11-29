import Image from "next/image"
import libras from "./images/libras.png"
import React from "react"
import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

const Layout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  const session = await getServerSession(authOptions)

  return (
    <>
      <section className="bg-blue-700 text-center lg:text-left" id="hero">
        {session ? (
          <Link className="absolute top-10 right-10 text-lg text-white hover:underline" href="/perfil">
            Olá {session.user?.name?.split(" ")[0]}
          </Link>
        ) : (
          <Link className="absolute top-10 right-10 text-lg text-white hover:underline" href="/login">
            Entrar
          </Link>
        )}
        <div className="grid justify-center lg:max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Gooli
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl">
              Glossário online sobre informática acessível para deficientes auditivos
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
      {children}
    </>
  )
}

export default Layout
