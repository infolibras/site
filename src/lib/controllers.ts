import { NextRequest, NextResponse } from "next/server"
import HTTPError from "./error"

export function Route(): MethodDecorator {
  return function (_target: Object, _propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    descriptor.value = async function (req: NextRequest, params: any) {
      try {
        const result = await originalMethod.apply(this, [req, params])
        return result
      } catch (error) {
        if (error instanceof HTTPError) {
          return new Response(error.message, { status: error.status })
        }

        throw error
      }
    }
  }
}
