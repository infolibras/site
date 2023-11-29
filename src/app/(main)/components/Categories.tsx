const Categories = () => {
  return (
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
  )
}

export default Categories
