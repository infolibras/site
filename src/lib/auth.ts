import type { AuthOptions } from "next-auth"
import db from "@/database"

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
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
          email: profile.email_secundario,
          cargo: profile.tipo_usuario
        }
      }
    }
  ],
  pages: {
    signIn: "/login"
  },
  callbacks: {
    async session({ session, user }) {
      session.user.cargo = (user as any).cargo ?? "Aluno"

      return session
    }
  },
  adapter: {
    async createUser({ email, name, emailVerified, cargo }: any) {
      const { insertId } = await db.insertInto("usuario")
        .values({ email, nome: name!, cargo, dataVerificacaoEmail: emailVerified, dataCriacao: new Date() })
        .executeTakeFirst()

      return { email, name, id: insertId!.toString(), emailVerified }
    },
    async getUser(id) {
      const user = await db.selectFrom("usuario")
        .select(["id", "email", "nome", "dataVerificacaoEmail", "cargo"])
        .where("id", "=", parseInt(id))
        .executeTakeFirst()

      if (!user) return null

      return {
        id: user.id.toString(),
        email: user.email,
        name: user.nome,
        emailVerified: user.dataVerificacaoEmail,
        cargo: user.cargo
      }
    },
    async getUserByEmail(email) {
      const user = await db.selectFrom("usuario")
        .select(["id", "email", "nome", "dataVerificacaoEmail", "cargo"])
        .where("email", "=", email)
        .executeTakeFirst()

      if (!user) return null

      return {
        id: user.id.toString(),
        email: user.email,
        name: user.nome,
        emailVerified: user.dataVerificacaoEmail,
        cargo: user.cargo
      }
    },
    async getUserByAccount({ provider, providerAccountId }) {
      const user = await db.selectFrom("usuario")
        .select(["usuario.id", "email", "nome", "dataVerificacaoEmail", "cargo"])
        .leftJoin("conta", "conta.idUsuario", "usuario.id")
        .where(eb => eb.and([
          eb("conta.idContaProvedor", "=", providerAccountId),
          eb("conta.provedor", "=", provider)
        ]))
        .executeTakeFirst()

      if (!user) return null

      return {
        id: user.id.toString(),
        email: user.email,
        name: user.nome,
        emailVerified: user.dataVerificacaoEmail,
        cargo: user.cargo
      }
    },
    async updateUser({ id, email, name }) {
      await db.updateTable("usuario")
        .set({ email, nome: name! })
        .where("id", "=", parseInt(id))
        .executeTakeFirst()

      const user = await db.selectFrom("usuario")
        .select(["id", "email", "nome", "dataVerificacaoEmail"])
        .where("id", "=", parseInt(id))
        .executeTakeFirst()

      const { nome, email: userEmail, dataVerificacaoEmail } = user!

      return { id, email: userEmail, emailVerified: dataVerificacaoEmail, name: nome }
    },
    async deleteUser(id) {
      await db.deleteFrom("usuario")
        .where("id", "=", parseInt(id))
        .execute()
    },
    async linkAccount({ provider, providerAccountId, userId, access_token, expires_at, id_token, refresh_token, scope, session_state, token_type }) {
      await db.insertInto("conta")
        .values({
          idContaProvedor: providerAccountId,
          idUsuario: parseInt(userId),
          provedor: provider,
          accessToken: access_token,
          estadoSessao: session_state,
          expiracaoAcessToken: expires_at,
          idToken: id_token,
          refreshToken: refresh_token,
          scope,
          tipoToken: token_type
        })
        .execute()
    },
    async unlinkAccount({ provider, providerAccountId }) {
      await db.deleteFrom("conta")
        .where(eb => eb.and([
          eb("idContaProvedor", "=", providerAccountId),
          eb("provedor", "=", provider)
        ]))
        .execute()
    },
    async createSession({ sessionToken, expires, userId }) {
      await db.insertInto("sessao")
        .values({
          IdUsuario: parseInt(userId),
          dataCriacao: new Date(),
          expiracao: expires,
          token: sessionToken,
          accessToken: sessionToken,
          dataVerificacaoEmail: new Date()
        })
        .execute()

      return {
        expires,
        sessionToken,
        userId
      }
    },
    async getSessionAndUser(sessionToken) {
      const session = await db.selectFrom("sessao")
        .select(["id", "IdUsuario", "expiracao"])
        .where("token", "=", sessionToken)
        .executeTakeFirst()

      if (!session) return null

      const user = await db.selectFrom("usuario")
        .select(["id", "email", "nome", "dataVerificacaoEmail"])
        .where("id", "=", session.IdUsuario)
        .executeTakeFirst()

      if (!user) return null

      return {
        user: {
          id: user.id.toString(),
          email: user.email,
          name: user.nome,
          emailVerified: user.dataVerificacaoEmail
        },
        session: {
          sessionToken,
          expires: session.expiracao,
          userId: user.id.toString()
        }
      }
    },
    async updateSession({ sessionToken, expires, userId }) {
      await db.updateTable("sessao")
        .set({ expiracao: expires, IdUsuario: userId ? parseInt(userId) : undefined })
        .where("token", "=", sessionToken)
        .executeTakeFirst()

      const session = await db.selectFrom("sessao")
        .select(["id", "IdUsuario", "expiracao"])
        .where("token", "=", sessionToken)
        .executeTakeFirst()

      return {
        expires: session!.expiracao,
        sessionToken,
        userId: session!.IdUsuario.toString()
      }
    },
    async deleteSession(sessionToken) {
      await db.deleteFrom("sessao")
        .where("token", "=", sessionToken)
        .execute()
    }
  }
}
