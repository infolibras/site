import { ColumnType, Generated, Insertable, Selectable, Updateable } from "kysely"

export interface Database {
  usuario: UsuarioTable
  termo: TermoTable
  categoria: CategoriaTable
  conta: ContaTable
  definicao: DefinicaoTable
  variacao: VariacaoTable
}

export interface UsuarioTable {
  id: Generated<number>
  email: string
  nome: string
  dataCriacao: ColumnType<Date, string | undefined, never>
}

export type Usuario = Selectable<UsuarioTable>
export type NewUsuario = Insertable<UsuarioTable>
export type UsuarioUpdate = Updateable<UsuarioTable>

export interface TermoTable {
  id: Generated<number>
  termo: string
}

export type Termo = Selectable<TermoTable>
export type NewTermo = Insertable<TermoTable>
export type TermoUpdate = Updateable<TermoTable>

export interface CategoriaTable {
  id: Generated<number>
  nome: string
}

export type Categoria = Selectable<CategoriaTable>
export type NewCategoria = Insertable<CategoriaTable>
export type CategoriaUpdate = Updateable<CategoriaTable>

export interface ContaTable {
  id: Generated<number>
  idUsuario: number
  idProvedor: string
  tipoProvedor: string
  idContaProvedor: string
  refreshToken: string | null
  accessToken: string | null
  expiracaoAcessToken: ColumnType<Date, string | undefined, never> | null
}

export type Conta = Selectable<ContaTable>
export type NewConta = Insertable<ContaTable>
export type ContaUpdate = Updateable<ContaTable>

export interface DefinicaoTable {
  id: Generated<number>
  idTermo: number
  idCategoria: number | null
  definicao: string
  fonte: string
  urlVideo: string | null,
  idUsuario: number | null
}

export type Definicao = Selectable<DefinicaoTable>
export type NewDefinicao = Insertable<DefinicaoTable>
export type DefinicaoUpdate = Updateable<DefinicaoTable>

export interface VariacaoTable {
  id: Generated<number>
  idTermo: number
  variacao: string
  explicacao: string
}

export type Variacao = Selectable<VariacaoTable>
export type NewVariacao = Insertable<VariacaoTable>
export type VariacaoUpdate = Updateable<VariacaoTable>
