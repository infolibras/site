import cn from "@/utils/cn"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useRefinementList, UseRefinementListProps } from "react-instantsearch"

const CategoriesRefinementList: React.FC<UseRefinementListProps & { categories: string[] }> = ({ categories, ...props }) => {
  const params = useSearchParams()
  const { items: unsortedItems, refine, canRefine } = useRefinementList(props)

  useEffect(() => {
    if (canRefine && params.get("categoria")) {
      refine(params.get("categoria")!)
    }
  }, [canRefine])

  const items = unsortedItems.sort((a, b) => {
    if (a.label < b.label) return -1
    if (a.label > b.label) return 1

    return 0
  })

  const availableItems = items.map(item => item.label)

  return (
    <div className="w-full md:w-1/3">
      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900">
            Categorias
          </h5>
        </div>
        <div>
          <ul role="list" className="divide-y divide-gray-200">
            {categories.map(categoria => (
              <li className="py-3 sm:py-4">
                <label className={cn("ml-4 text-sm font-medium text-gray-900 select-none cursor-pointer", !availableItems.includes(categoria) && "text-gray-400")} htmlFor={categoria}>
                  <input
                    type="checkbox"
                    id={categoria}
                    name={categoria}
                    value={categoria}
                    checked={items.find(item => item.label === categoria)?.isRefined}
                    onChange={() => {
                      if (availableItems.includes(categoria)) {
                        refine(categoria)
                      }
                    }}
                    className="mr-2"
                    disabled={!availableItems.includes(categoria)}
                  />
                  {categoria}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CategoriesRefinementList
