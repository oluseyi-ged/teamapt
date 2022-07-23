import "../styles/globals.css"
import type { AppProps } from "next/app"
import AppWrapper from "src/common/application/AppWrapper"

function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default App
