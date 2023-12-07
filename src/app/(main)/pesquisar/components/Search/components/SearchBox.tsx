import Link from "next/link";
import React, { useState, useRef } from "react"
import {
  useSearchBox,
  UseSearchBoxProps
} from "react-instantsearch"

const SearchBox: React.FC<UseSearchBoxProps> = (props) => {
  const { query, refine } = useSearchBox(props)
  const [inputValue, setInputValue] = useState(query)
  const inputRef = useRef<HTMLInputElement>(null)

  function setQuery(newQuery: string) {
    setInputValue(newQuery)

    refine(newQuery)
  }

  return (
    <form onSubmit={event => event.preventDefault()} className="flex items-center gap-5 mx-auto w-full md:w-2/3 md:gap-10 lg:w-1/2 lg:gap-20">
      <Link href="/">
        <h1 className="font-bold text-white text-xl md:text-2xl">GOLI</h1>
      </Link>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input
          ref={inputRef}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          maxLength={512}
          type="search"
          value={inputValue}
          onChange={event => {
            setQuery(event.currentTarget.value)
          }}
          autoFocus
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
    </form>
  )
}

export default SearchBox;
