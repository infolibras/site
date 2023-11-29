import { NextResponse, type NextRequest } from "next/server"
import { Service } from "typedi"
import TermosService from "./termos.service"
import { Route } from "@/lib/controllers"

@Service()
export default class TermosController {
  constructor(
    private readonly termosService: TermosService
  ) {}

  @Route()
  async get(_req: NextRequest, params: { params: { slug: string } }) {
    return NextResponse.json(await this.termosService.getOne(params.params.slug))
  }

  @Route()
  async list(_req: NextRequest, params: { params: { letter: string } }) {
    return NextResponse.json(await this.termosService.listByLetter(params.params.letter))
  }

  @Route()
  async categories(_req: NextRequest, _params: any) {
    return NextResponse.json(await this.termosService.getCategories())
  }
}
