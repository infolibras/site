"use client"

import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import Script from "next/script"

const Providers: React.FC<{ children: React.ReactNode, session: Session | null }> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      {children}
      {/* @ts-ignore */}
      <div vw="true" className="enabled">
        <div vw-access-button="true" className="active"></div>
        <div vw-plugin-wrapper="true">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        async
        onLoad={() => {
          new window.VLibras.Widget("https://vlibras.gov.br/app")
          // @ts-ignore
          window.onload()
        }}
      />
    </SessionProvider>
  )
}

export default Providers
