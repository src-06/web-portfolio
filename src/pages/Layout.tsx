import { CircleCheck, CircleDashed } from "lucide-react"
import { Outlet, useNavigate } from "react-router-dom"
import { useTheme } from "../lib/ThemeProvider"

export function Layout() {
  const navigate = useNavigate()

  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <body
      className="relative w-screen h-dvh pl-6 pr-6 flex font-kode-mono overflow-hidden"
    >
      {/* NOTE: Additional buttons */}
      <div
        className="absolute bottom-8 left-6 -rotate-90 origin-bottom-left flex gap-2"
      >
        <button
          onClick={() => setTheme("dark")}
          className="flex items-center gap-1"
        >
          {isDark
          ? <CircleCheck size={16} />
          : <CircleDashed size={16} />
          } Dark
        </button>
        <button
          onClick={() => setTheme("light")}
          className="flex items-center gap-1"
        >
          {isDark
          ? <CircleDashed size={16} />
          : <CircleCheck size={16} />
          } Light
        </button>
      </div>

      {/* NOTE: Contents */}
      <div
        className="w-full h-full p-2 border-l-2 border-r-2 border-dotted"
      >
        {/* NOTE: Header sections */}
        <header
          className="relative"
        >
          {/* NOTE: Name and role */}
          <div
            className="absolute top-0 left-0"
          >
            <h1
              className="text-2xl"
            >Farell Reyhan Pradana</h1>
            <h2
              className="font-bold leading-3"
            >Developer</h2>
          </div>

          {/* NOTE: Navigation buttons */}
          <div
            className="absolute top-20 left-0 flex flex-col items-start gap-2 text-lg font-semibold"
          >
            <button
              onClick={() => navigate("/")}
            >About</button>
            <button
              onClick={() => navigate("/skills")}
            >Skills</button>
            <button
              onClick={() => navigate("/projects")}
            >Projects</button>
            <button
              onClick={() => navigate("/contact")}
            >Contact</button>
            <button
              onClick={() => navigate("/info")}
            >Info</button>
          </div>
        </header>

        {/* NOTE: Main sections */}
        <main
          className="h-full"
        >
          <Outlet />
        </main>
      </div>
    </body>
  )
}
