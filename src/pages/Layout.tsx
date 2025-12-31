import { Outlet } from "react-router-dom"
import { Footer, Header, PageTransition, ThemeButton } from "@/components"

export function Layout() {
  return (
    <body
      className="relative w-screen h-dvh p-6 flex overflow-hidden md:text-lg xl:text-xl"
    >
      {/* NOTE: Web title */}
      <title>Farell Reyhan Pradana Portfolio</title>

      {/* NOTE: Theme buttons */}
      <ThemeButton />

      {/* NOTE: Contents */}
      <div
        className="w-full h-full p-2 md:p-3 xl:p-5 border-2 rounded-md"
      >
        {/* NOTE: Header sections */}
        <Header />

        {/* NOTE: Main sections */}
        <PageTransition><Outlet /></PageTransition>
      </div>

      {/* NOTE: Footer sections */}
      <Footer />
    </body>
  )
}
