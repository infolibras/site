import db from "@/database"
import { Service } from "typedi"

@Service()
export default class TermosRepository {
  async getTermos() {
    return db.selectFrom("termo")
      .select(["termo.id", "termo.termo", "termo.slug"])
      .leftJoin("variacao", "variacao.idTermo", "termo.id")
      .execute()
  }

  async getTermoBySlug(slug: string) {
    return db.selectFrom("termo")
      .select(["termo.id", "termo.termo", "termo.slug"])
      .leftJoin("variacao", "variacao.idTermo", "termo.id")
      .where("termo.slug", "=", slug)
      .executeTakeFirst()
  }

  async editarDefinicacao(id: number, data: { definicao?: string, fonte?: string, urlVideo?: string, idCategoria?: number }) {
    await db.updateTable("definicao")
      .set(data)
      .where("id", "=", id)
      .executeTakeFirst()
  }

  async getDefinicoesByTermoId(id: number) {
    return db.selectFrom("definicao")
      .select(["definicao.id", "definicao.definicao", "definicao.fonte", "definicao.urlVideo", "definicao.idUsuario"])
      .where("definicao.idTermo", "=", id)
      .leftJoin("categoria", "categoria.id", "definicao.idCategoria")
      .execute()
  }

  async getCategoriaById(id: number) {
    return db.selectFrom("categoria")
      .select(["id", "nome", "slug"])
      .where("id", "=", id)
      .executeTakeFirst()
  }

  async getDefinicaoById(id: number) {
    return db.selectFrom("definicao")
      .leftJoin("categoria", "categoria.id", "definicao.idCategoria")
      .leftJoin("termo", "termo.id", "definicao.idTermo")
      .select(["termo.termo", "idTermo", "definicao.id", "definicao.definicao", "definicao.fonte", "definicao.urlVideo", "definicao.idUsuario", "categoria.nome", "idCategoria"])
      .where("definicao.id", "=", id)
      .executeTakeFirst()
  }

  async getVariacoesByTermoId(id: number) {
    return db.selectFrom("variacao")
      .select(["variacao.id", "variacao.variacao", "variacao.explicacao", "variacao.slug"])
      .where("variacao.idTermo", "=", id)
      .execute()
  }

  async getTermoByDefinicaoId(id: number) {
    return db.selectFrom("termo")
      .select(["termo.id", "termo.termo", "termo.slug"])
      .leftJoin("definicao", "definicao.idTermo", "termo.id")
      .where("definicao.id", "=", id)
      .executeTakeFirst()
  }

  async getTermosByLetter(letter: string) {
    const terms = await db.selectFrom("termo")
      .leftJoin("definicao", "definicao.idTermo", "termo.id")
      .select(({ fn }) => [
        "termo.id",
        "termo.termo",
        "termo.slug",
        "definicao.definicao",
        fn.count("definicao.id").as("definicoes"),
        fn.count("definicao.urlVideo").as("videos")
      ])
      .where("termo.termo", "like", `${letter}%`)
      .groupBy(["termo.id", "definicao.id"])
      .orderBy("termo.termo", "asc")
      .execute()

    const termsMap = new Map()
    terms.forEach((term) => {
      if (!termsMap.has(term.id)) {
        termsMap.set(term.id, term)
      }
    })

    return Array.from(termsMap.values())
  }

  async getCategorias() {
    return db.selectFrom("categoria")
      .select(["id", "nome", "slug"])
      .orderBy("nome", "asc")
      .execute()
  }

  async termosCount() {
    return db.selectFrom("termo")
      .select(({ fn }) => [
        fn.count("termo.id").as("total")
      ])
      .executeTakeFirst()
  }
}
