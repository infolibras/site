import TermosController from "@/backend/modules/termos/termos.controller"
import type { NextRequest } from "next/server"
import Container from "typedi"

const termosController = Container.get(TermosController)

export async function POST(req: NextRequest, params: any) {
  return termosController.editarDefinicacao(req, params)
}
