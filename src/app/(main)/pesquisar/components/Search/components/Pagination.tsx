import { usePagination, UsePaginationProps } from "react-instantsearch"
import ReactPaginate from "react-paginate"

const Pagination: React.FC<UsePaginationProps> = (props) => {
  const { currentRefinement, nbPages, refine } = usePagination(props)

  return (nbPages > 1) ? (
    <ReactPaginate
      pageCount={nbPages}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      previousLabel="Anterior"
      nextLabel="Próximo"
      breakLabel="..."
      breakClassName="break-me"
      containerClassName="pagination"
      activeClassName="active"
      onPageChange={data =>  refine(data.selected)}
      forcePage={currentRefinement}
      disableInitialCallback
      className="flex justify-center gap-2 mt-8"
      pageLinkClassName="text-sm font-medium text-gray-900 hover:text-blue-500 hover:border-blue-500 border rounded p-1 select-none"
      previousLinkClassName="text-sm font-medium text-gray-900 hover:text-blue-500 hover:border-blue-500 border rounded p-1 select-none"
      nextLinkClassName="text-sm font-medium text-gray-900 hover:text-blue-500 hover:border-blue-500 border rounded p-1 select-none"
      disabledClassName="text-gray-300"
      activeLinkClassName="bg-blue-500 border-blue-500 text-white hover:border-blue-600 hover:text-white"
    />
  ) : null
}

export default Pagination
