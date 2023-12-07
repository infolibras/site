"use client"

import { Hits, InstantSearch } from "react-instantsearch"
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter"
import React from "react"
import Hit from "./components/Hit"
import SearchBox from "./components/SearchBox"
import Pagination from "./components/Pagination"
import CategoriesRefinementList from "./components/CategoriesRefinementList"

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: process.env.NEXT_PUBLIC_TYPESENSE_API_KEY!,
    nodes: [
      {
        host: process.env.NEXT_PUBLIC_TYPESENSE_HOST!,
        port: parseInt(process.env.NEXT_PUBLIC_TYPESENSE_PORT!),
        protocol: process.env.NEXT_PUBLIC_TYPESENSE_PROTOCOL!
      }
    ]
  },
  additionalSearchParameters: {
    query_by: "termo,variacoes,definicoes,embedding",
    query_by_weights: "3,2,2,1",
    exclude_fields: "embedding",
    prefix: "true,true,true,false"
  }
})

const searchClient = typesenseInstantsearchAdapter.searchClient

const Search: React.FC<{ categories: string[] }> = ({ categories }) => {
  return (
    <InstantSearch searchClient={searchClient} indexName="gooli-termos">
      <div className="bg-blue-700 p-5 sticky top-0 w-full">
        <SearchBox />
      </div>
      <div
        className="w-full p-5 lg:w-4/5 xl:w-8/12 2xl:w-7/12 lg:p-0 mx-auto flex flex-col gap-12 mb-12 mt-6"
      >
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-2/3">
            <Pagination />
            <Hits hitComponent={Hit as any} />
            <Pagination />
          </div>
          <CategoriesRefinementList attribute="categoria" categories={categories} />
        </div>
      </div>
    </InstantSearch>
  )
}

export default Search
