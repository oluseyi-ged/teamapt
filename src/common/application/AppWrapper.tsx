import React from "react"
import GlobalStyle from "./globalStyles"
import { PropsWithChildren } from "react"

const GlobalStyleFixed = GlobalStyle as unknown as React.FC<PropsWithChildren>

function AppWrapper({ children }: any) {
  return (
    <>
      <GlobalStyleFixed />
      {children}
    </>
  )
}

export default AppWrapper
