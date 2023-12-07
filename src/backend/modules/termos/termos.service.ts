import { Service } from "typedi"
import TermosRepository from "./termos.repository"
import HTTPError from "@/lib/error"
import { revalidatePath } from "next/cache"

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

  async editarDefinicacao(id: number, data: { definicao?: string, fonte?: string, urlVideo?: string }) {
    const definicao = await this.termosRepository.editarDefinicacao(id, data)
    const termo = await this.termosRepository.getTermoByDefinicaoId(id)
    revalidatePath(`/termos/${termo?.slug}`)

    return definicao
  }

  async getDefinicaoById(id: number) {
    return this.termosRepository.getDefinicaoById(id)
  }
}
