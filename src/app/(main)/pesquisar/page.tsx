"use client"

import { NextPage } from "next"
import { Hits, InstantSearch } from "react-instantsearch"
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter"
import React from "react"
import Hit from "./components/Hit"
import SearchBox from "./components/SearchBox"

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
    query_by: "embedding,termo,variacoes,definicoes",
    exclude_fields: "embedding",
    prefix: false
  }
})

const searchClient = typesenseInstantsearchAdapter.searchClient

const Page: NextPage = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="gooli-termos">
      <div className="bg-blue-700 p-5">
        <SearchBox />
      </div>
      <div
        className="w-full p-5 lg:w-4/5 xl:w-8/12 2xl:w-7/12 lg:p-0 mx-auto flex flex-col gap-12 my-12"
      >
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-2/3">
            <Hits hitComponent={Hit as any} />
          </div>
        </div>
      </div>
    </InstantSearch>
  )
}

export default Page
