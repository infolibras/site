import cn from "@/utils/cn"
import Link from "next/link"

const Letters: React.FC<{ currentLetter?: string }> = async ({ currentLetter }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/termos/quantidade`)
  const { total } = await res.json() as { total: number }

  return (
    <>
      <h1 className="font-bold text-2xl mb-4">
        Explorar termos
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
          {total}
        </span>
      </h1>
      <nav aria-label="Page navigation example">
        <ul className="flex flex-wrap gap-1">
          {"abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <li key={letter}>
              <Link
                href={`/letras/${letter}`}
                className={
                  cn(
                    "flex items-center justify-center w-8 h-8 leading-tight text-gray-500 hover:text-blue-700 rounded hover:bg-blue-100 uppercase text-lg",
                    letter === currentLetter && "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                  )
                }
              >
                {letter}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Letters
