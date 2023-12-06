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

  async getDefinicoesByTermoId(id: number) {
    return db.selectFrom("definicao")
      .select(["definicao.id", "definicao.definicao", "definicao.fonte", "definicao.urlVideo", "definicao.idUsuario"])
      .where("definicao.idTermo", "=", id)
      .leftJoin("categoria", "categoria.id", "definicao.idCategoria")
      .execute()
  }

  async getVariacoesByTermoId(id: number) {
    return db.selectFrom("variacao")
      .select(["variacao.id", "variacao.variacao", "variacao.explicacao", "variacao.slug"])
      .where("variacao.idTermo", "=", id)
      .execute()
  }

  async getTermosByLetter(letter: string) {
    return db.selectFrom("termo")
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
  }

  async getCategorias() {
    return db.selectFrom("categoria")
      .select(["id", "nome", "slug"])
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
