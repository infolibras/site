import type { AuthOptions } from "next-auth"
import db from "@/database"

export const authOptions: AuthOptions = {
  providers: [
    {
      id: "suap",
      name: "SUAP",
      type: "oauth",
      authorization: {
        params: {
          scope: "identificacao email"
        },
        url: "https://suap.ifrn.edu.br/o/authorize/"
      },
      token: "https://suap.ifrn.edu.br/o/token/",
      userinfo: "https://suap.ifrn.edu.br/api/eu/",
      clientId: process.env.SUAP_CLIENT_ID,
      clientSecret: process.env.SUAP_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.identificacao,
          name: profile.nome_usual,
          email: profile.email_secundario
        }
      }
    }
  ],
  adapter: {
    async createUser({ email, name }) {
      const { insertId } = await db.insertInto("usuario")
        .values({ email, nome: name! })
        .executeTakeFirst()

      return { email, name, id: insertId!.toString(), emailVerified: new Date() }
    },
    async getUser(id) {
      const user = await db.selectFrom("usuario")
        .select(["id", "email", "nome"])
        .where("id", "=", parseInt(id))
        .executeTakeFirst()

      if (!user) return null

      return {
        id: user.id.toString(),
        email: user.email,
        name: user.nome,
        emailVerified: new Date()
      }
    },
    async getUserByEmail(email) {
      const user = await db.selectFrom("usuario")
        .select(["id", "email", "nome"])
        .where("email", "=", email)
        .executeTakeFirst()

      if (!user) return null

      return {
        id: user.id.toString(),
        email: user.email,
        name: user.nome,
        emailVerified: new Date()
      }
    },
    async updateUser({ id, email, name }) {
      await db.updateTable("usuario")
        .set({ email, nome: name! })
        .where("id", "=", parseInt(id))
        .executeTakeFirst()

      const user = await db.selectFrom("usuario")
        .select(["id", "email", "nome"])
        .where("id", "=", parseInt(id))
        .executeTakeFirst()

      const { nome, email: userEmail } = user!

      return { id, email: userEmail, emailVerified: new Date(), name: nome }
    },
    async deleteUser(id) {
      await db.deleteFrom("usuario")
        .where("id", "=", parseInt(id))
        .execute()
    },
    async linkAccount({ provider, providerAccountId, type, userId, access_token, expires_at, id_token, refresh_token }) {
      await db.insertInto("conta")
        .values({
          idUsuario: parseInt(userId),
          idProvedor: providerAccountId,
          tipoProvedor: provider,
          idContaProvedor: providerAccountId,
          refreshToken: refresh_token,
          accessToken: access_token,
          expiracaoAcessToken: expires_at
        })
        .execute()
    }
  },
  session: { strategy: "jwt" }
}
