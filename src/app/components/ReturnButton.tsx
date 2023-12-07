"use client"

import { useRouter } from "next/navigation"

const ReturnButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()

  return (
    <button onClick={() => router.back()}>
      {children}
    </button>
  )
}

export default ReturnButton
