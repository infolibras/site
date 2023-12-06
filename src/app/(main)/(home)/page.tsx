import Categories from "../components/Categories"
import Letters from "../components/Letters"

export default function Page() {
  return (
    <section
      id="#termos"
      className="w-full p-5 lg:w-4/5 xl:w-8/12 2xl:w-7/12 lg:p-0 mx-auto flex flex-col md:flex-row gap-12 my-12"
    >
      <div className="w-full md:w-2/3">
        <Letters />
      </div>
      <Categories />
    </section>
  )
}
