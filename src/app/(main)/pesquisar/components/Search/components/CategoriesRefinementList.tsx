import { useRefinementList, UseRefinementListProps } from "react-instantsearch"

const CategoriesRefinementList: React.FC<UseRefinementListProps & { categories: string[], category?: string }> = ({ categories, category, ...props }) => {
  const { items, refine } = useRefinementList(props)

  const categiesItems = categories.map(categoria => items.find(item => item.label === categoria) ?? {
    label: categoria,
    value: categoria,
    isRefined: false,
    count: 0
  })

  return (
    <div className="w-full md:w-1/3">
      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold leading-none text-gray-900">
            Categorias
          </h1>
        </div>
        <div>
          <ul role="list" className="divide-y divide-gray-200">
            {categiesItems.map(categoria => (
              <li className="py-3 sm:py-4 flex justify-between" key={categoria.label}>
                <label className="ml-4 text-sm font-medium text-gray-900 select-none cursor-pointer" htmlFor={categoria.label}>
                  <input
                    type="checkbox"
                    checked={categoria.isRefined}
                    onChange={() => {
                      refine(categoria.value)
                    }}
                    className="mr-2"
                  />
                  {categoria.label}
                </label>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                  {categoria.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CategoriesRefinementList
