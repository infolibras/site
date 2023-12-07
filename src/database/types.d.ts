import { ColumnType, Generated, Insertable, Selectable, Updateable } from "kysely"

export interface Database {
  usuario: UsuarioTable
  termo: TermoTable
  categoria: CategoriaTable
  conta: ContaTable
  sessao: SessaoTable
  definicao: DefinicaoTable
  variacao: VariacaoTable
}

export interface UsuarioTable {
  id: Generated<number>
  email: string
  nome: string
  dataCriacao: Date | null
  dataVerificacaoEmail: Date | null
  cargo: "Aluno" | "Professor" | "Administrador"
}

export interface TermoTable {
  id: Generated<number>
  termo: string
  slug: string
}

export interface CategoriaTable {
  id: Generated<number>
  nome: string
  slug: string
}

export interface ContaTable {
  id: Generated<number>
  idUsuario: number
  provedor: string
  idContaProvedor: string
  refreshToken: string | null
  accessToken: string | null
  expiracaoAcessToken: number | null
  tipoToken: string | null
  scope: string | null
  idToken: string | null
  estadoSessao: string | null
}

export interface SessaoTable {
  id: Generated<number>
  IdUsuario: number
  dataCriacao: Date
  expiracao: Date
  token: string
  accessToken: string
  dataVerificacaoEmail: Date | null
}

export interface DefinicaoTable {
  id: Generated<number>
  idTermo: number
  idCategoria: number | null
  definicao: string
  fonte: string
  urlVideo: string | null
  idUsuario: number | null
}

export interface VariacaoTable {
  id: Generated<number>
  idTermo: number
  variacao: string
  explicacao: string | null
  slug: string
}

export type Usuario = Selectable<UsuarioTable>
export type NewUsuario = Insertable<UsuarioTable>
export type UsuarioUpdate = Updateable<UsuarioTable>

export type Termo = Selectable<TermoTable>
export type NewTermo = Insertable<TermoTable>
export type TermoUpdate = Updateable<TermoTable>

export type Categoria = Selectable<CategoriaTable>
export type NewCategoria = Insertable<CategoriaTable>
export type CategoriaUpdate = Updateable<CategoriaTable>

export type Conta = Selectable<ContaTable>
export type NewConta = Insertable<ContaTable>
export type ContaUpdate = Updateable<ContaTable>

export type Sessao = Selectable<SessaoTable>
export type NewSessao = Insertable<SessaoTable>
export type SessaoUpdate = Updateable<SessaoTable>

export type Definicao = Selectable<DefinicaoTable>
export type NewDefinicao = Insertable<DefinicaoTable>
export type DefinicaoUpdate = Updateable<DefinicaoTable>

export type Variacao = Selectable<VariacaoTable>
export type NewVariacao = Insertable<VariacaoTable>
export type VariacaoUpdate = Updateable<VariacaoTable>
