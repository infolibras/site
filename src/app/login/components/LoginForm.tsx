"use client"

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

const LoginForm: React.FC = () => {
  const params = useSearchParams()

  return (
    <button onClick={() => signIn("suap", { callbackUrl: params.get("redirect") ?? "/" })}>Prosseguir com SUAP</button>
  )
}

export default LoginForm
