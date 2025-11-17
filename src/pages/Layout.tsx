import { Outlet } from "react-router-dom"
import { Footer, Header, ThemeButton } from "../components"

export function Layout() {
  return (
    <body
      className="relative w-screen h-dvh pl-6 pr-6 flex overflow-hidden"
    >
      {/* TODO: Web title */}
      <title>Farell Reyhan Pradana Portfolio</title>

      {/* NOTE: Theme buttons */}
      <ThemeButton />

      {/* NOTE: Contents */}
      <div
        className="w-full h-full p-2 border-l-2 border-r-2 border-dotted"
      >
        {/* NOTE: Header sections */}
        <Header />

        {/* NOTE: Main sections */}
        <main
          className="h-full"
        ><Outlet /></main>
      </div>

      {/* NOTE: Footer sections */}
      <Footer />
    </body>
  )
}
