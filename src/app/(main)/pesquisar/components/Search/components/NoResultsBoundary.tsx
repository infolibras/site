import { useInstantSearch } from "react-instantsearch"

const NoResultsBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { results } = useInstantSearch()

  return results.nbHits === 0 ?
    <div>
      <h1 className="text-2xl font-semibold text-gray-700">Nenhum resultado encontrado</h1>
    </div>
    : children
}

export default NoResultsBoundary

