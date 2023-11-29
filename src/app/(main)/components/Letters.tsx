import cn from "@/utils/cn"
import Link from "next/link"

const Letters: React.FC = () => {
  return (
    <nav aria-label="Page navigation example" className="mb-8">
      <ul className="flex flex-wrap">
        {"abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
          <li key={letter}>
            <Link
              href={{
                href: "/",
                query: { letter }
              }}
              className={
                cn(
                  "flex items-center justify-center w-8 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700",
                  false && "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                )
              }
            >
              {letter}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Letters
