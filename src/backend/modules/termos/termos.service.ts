import { Service } from "typedi"
import TermosRepository from "./termos.repository"
import HTTPError from "@/lib/error"
import { revalidatePath } from "next/cache"
import { Client } from "typesense"

const typesenseClient = new Client({
  nodes: [{
    host: process.env.NEXT_PUBLIC_TYPESENSE_HOST!,
    port: Number(process.env.NEXT_PUBLIC_TYPESENSE_PORT!),
    protocol: process.env.NEXT_PUBLIC_TYPESENSE_PROTOCOL!
  }],
  apiKey: process.env.NEXT_PUBLIC_TYPESENSE_API_KEY!
})

@Service()
export default class TermosService {
  constructor(
    private readonly termosRepository: TermosRepository
  ) {}

  async list() {
    const termos = await this.termosRepository.getTermos()

    return termos
  }

  async listByLetter(letter: string) {
    const termos = await this.termosRepository.getTermosByLetter(letter)

    return termos
  }

  async getOne(slug: string) {
    const termo = await this.termosRepository.getTermoBySlug(slug)

    if (!termo) throw new HTTPError(404, "Termo não encontrado")

    const definicoes = await this.termosRepository.getDefinicoesByTermoId(termo.id)

    const variacoes = await this.termosRepository.getVariacoesByTermoId(termo.id)

    return { ...termo, definicoes, variacoes }
  }

  async getCategoriaById(id: number) {
    const categoria = await this.termosRepository.getCategoriaById(id)

    return categoria
  }

  async getTermoByDefinicaoId(id: number) {
    const termo = await this.termosRepository.getTermoByDefinicaoId(id)

    return termo
  }

  async getCategories() {
    const categorias = await this.termosRepository.getCategorias()

    return categorias
  }

  async count() {
    const count = await this.termosRepository.termosCount()

    return count
  }

  async editarDefinicacao(id: number, data: { definicao?: string, urlVideo?: string, idCategoria?: number | null }) {
    const oldDefinicao = await this.termosRepository.getDefinicaoById(id)

    if (!oldDefinicao) throw new HTTPError(404, "Definição não encontrada")

    const oldDefinicaoDocument = await typesenseClient.collections("gooli-termos").documents(String(oldDefinicao.idTermo)).retrieve() as any

    if (!data.idCategoria) {
      data.idCategoria = null
    }

    await this.termosRepository.editarDefinicacao(id, data)

    const oldDocument = await typesenseClient.collections("gooli-termos").documents(String(oldDefinicao.idTermo)).retrieve() as any

    await typesenseClient.collections("gooli-termos").documents(String(oldDefinicao.idTermo)).update({
      categorias: data.idCategoria ? oldDocument.categorias.filter((categoria: any) => categoria !== oldDefinicao.nome).concat([(await this.getCategoriaById(data.idCategoria))?.nome]) : oldDocument.categorias.filter((categoria: any) => categoria !== oldDefinicao.nome),
      definicoes: oldDefinicaoDocument.definicoes.filter((definicao: any) => definicao !== oldDefinicao.definicao).concat(data.definicao ? [data.definicao] : []),
      contem_video: data.urlVideo ? true : false
    })

    const termo = await this.termosRepository.getTermoByDefinicaoId(id)
    revalidatePath(`/termos/${termo?.slug}`)

    return null
  }

  async getDefinicaoById(id: number) {
    return this.termosRepository.getDefinicaoById(id)
  }
}
