import Term from "../../../../components/Term"

interface Hit {
  contem_video: boolean
  termo: string
  quantidade_definicoes: number
  slug: string
  definicoes: string[]
  categorias: string[]
}

const Hit: React.FC<{ hit: Hit }> = ({ hit }) => {
  return (
    <Term
      term={hit.termo}
      video={hit.contem_video}
      categories={hit.categorias}
      definicoes={hit.quantidade_definicoes}
      description={hit.definicoes[0]}
      slug={hit.slug}
    />
  )
}

export default Hit
