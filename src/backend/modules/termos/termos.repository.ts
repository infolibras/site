import db from "@/database"
import { Service } from "typedi"

@Service()
export default class TermosRepository {
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
      .select(["termo.id", "termo.termo", "termo.slug"])
      .where("termo.termo", "like", `${letter}%`)
      .execute()
  }

  async getCategorias() {
    return db.selectFrom("categoria")
      .select(["id", "nome", "slug"])
      .execute()
  }
}
