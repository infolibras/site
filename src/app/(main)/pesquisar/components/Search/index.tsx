"use client"

import { Hits } from "react-instantsearch"
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter"
import React, { useEffect } from "react"
import Hit from "./components/Hit"
import SearchBox from "./components/SearchBox"
import Pagination from "./components/Pagination"
import CategoriesRefinementList from "./components/CategoriesRefinementList"
import NoResultsBoundary from "./components/NoResultsBoundary";

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

const Search: React.FC<{ categories: string[], categoria?: string }> = ({ categories, categoria }) => {
  return (
    <InstantSearchNext
      searchClient={searchClient}
      indexName="gooli-termos"
      future={{ preserveSharedStateOnUnmount: true }}
      routing
    >
      <div className="bg-blue-700 p-5 sticky top-0 w-full">
        <SearchBox />
      </div>
      <div
        className="w-full p-5 lg:w-4/5 xl:w-8/12 2xl:w-7/12 lg:p-0 mx-auto flex flex-col gap-12 mb-12 mt-6"
      >
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-2/3">
            <Pagination />
            <NoResultsBoundary>
              <Hits hitComponent={Hit as any} />
            </NoResultsBoundary>
            <Pagination />
          </div>
          <CategoriesRefinementList escapeFacetValues attribute="categorias" categories={categories} category={categoria} />
        </div>
      </div>
    </InstantSearchNext>
  )
}

export default Search
