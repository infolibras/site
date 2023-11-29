import { Service } from "typedi"
import TermosRepository from "./termos.repository"
import HTTPError from "@/lib/error"

@Service()
export default class TermosService {
  constructor(
    private readonly termosRepository: TermosRepository
  ) {}

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

  async getCategories() {
    const categorias = await this.termosRepository.getCategorias()

    return categorias
  }
}
