import TermosController from "@/backend/modules/termos/termos.controller"
import type { NextRequest } from "next/server"
import Container from "typedi"

const termosController = Container.get(TermosController)

export async function GET(req: NextRequest, params: { params: { letter: string } }) {
  return termosController.listByLetter(req, params)
}
