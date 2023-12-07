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
  async list(_req: NextRequest, _params: any) {
    return NextResponse.json(await this.termosService.list())
  }

  @Route()
  async get(_req: NextRequest, params: { params: { slug: string } }) {
    return NextResponse.json(await this.termosService.getOne(params.params.slug))
  }

  @Route()
  async listByLetter(_req: NextRequest, params: { params: { letter: string } }) {
    return NextResponse.json(await this.termosService.listByLetter(params.params.letter))
  }

  @Route()
  async categories(_req: NextRequest, _params: any) {
    return NextResponse.json(await this.termosService.getCategories())
  }

  @Route()
  async count(_req: NextRequest, _params: any) {
    return NextResponse.json(await this.termosService.count())
  }

  @Route()
  async editarDefinicacao(req: NextRequest, params: { params: { id: string } }) {
    const body = await req.formData()

    const data: any = {}
    for (const [key, value] of body.entries()) {
      data[key] = value
    }

    return NextResponse.json(await this.termosService.editarDefinicacao(parseInt(params.params.id), data))
  }

  @Route()
  async getDefinicaoById(_req: NextRequest, params: { params: { id: string } }) {
    return NextResponse.json(await this.termosService.getDefinicaoById(parseInt(params.params.id)))
  }
}
