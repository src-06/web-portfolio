import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { LuCircleDashed, LuCircleDot } from "react-icons/lu"
import { useTheme } from "../lib/ThemeProvider"
import { useFont } from "../lib/FontProvider"

export function Layout() {
  const navigate = useNavigate(),
    location = useLocation()

  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  const { font, setFont } = useFont()
  const isSans = font === "sans"

  return (
    <body
      className="relative w-screen h-dvh pl-6 pr-6 flex overflow-hidden"
    >
      {/* TODO: Web title */}
      <title>Farell Reyhan Pradana Portfolio</title>

      {/* NOTE: Additional buttons */}
      <div
        className="absolute bottom-8 left-6 -rotate-90 origin-bottom-left flex gap-2"
      >
        <button
          onClick={() => setTheme("dark")}
          className="flex items-center gap-1"
        >
          { isDark
          ? <LuCircleDot size={16} />
          : <LuCircleDashed size={16} />
          } Dark
        </button>
        <button
          onClick={() => setTheme("light")}
          className="flex items-center gap-1"
        >
          { isDark
          ? <LuCircleDashed size={16} />
          : <LuCircleDot size={16} />
          } Light
        </button>
        <button
          onClick={() => setFont(isSans ? "mono" : "sans")}
          className="flex items-center gap-1"
        >
          { isSans
          ? <LuCircleDashed size={16} />
          : <LuCircleDot size={16} />
          } Monospaced
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
              className="text-2xl text-nowrap font-light"
            >Farell Reyhan Pradana</h1>
            <h2
              className="font-bold leading-3 opacity-65"
            >Developer</h2>
          </div>

          {/* NOTE: Navigation buttons */}
          <div
            className="absolute top-20 left-0 flex flex-col items-start gap-2 text-lg font-light"
          >
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-1"
            >
              { location.pathname === "/"
              ? <LuCircleDot size={18} />
              : <LuCircleDashed size={18} />
              } About
            </button>
            <button
              onClick={() => navigate("/skills")}
              className="flex items-center gap-1"
            >
              { location.pathname === "/skills"
              ? <LuCircleDot size={18} />
              : <LuCircleDashed size={18} />
              } Skills
            </button>
            <button
              onClick={() => navigate("/projects")}
              className="flex items-center gap-1"
            >
              { location.pathname === "/projects"
              ? <LuCircleDot size={18} />
              : <LuCircleDashed size={18} />
              } Projects
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="flex items-center gap-1"
            >
              { location.pathname === "/contact"
              ? <LuCircleDot size={18} />
              : <LuCircleDashed size={18} />
              } Contact
            </button>
            <button
              onClick={() => navigate("/info")}
              className="flex items-center gap-1"
            >
              { location.pathname === "/info"
              ? <LuCircleDot size={18} />
              : <LuCircleDashed size={18} />
              } Info
            </button>
          </div>
        </header>

        {/* NOTE: Main sections */}
        <main
          className="h-full"
        ><Outlet /></main>
      </div>

      {/* Footer */}
      <footer
        className="absolute top-22 right-0.5 rotate-90 origin-top-right"
      >
        <p
          className="text-sm opacity-40"
        >@src-06</p>
      </footer>
    </body>
  )
}
