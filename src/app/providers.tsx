"use client"

import { Session } from "next-auth"

const Providers: React.FC<{ children: React.ReactNode, session: Session | null }> = ({ children, session }) => {
  return children
}

export default Providers
