"use client"

import { SessionProvider } from "next-auth/react"
import React from "react"

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SessionProvider session={null}>
      {children}
    </SessionProvider>
  )
}

export default Providers
