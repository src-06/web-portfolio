import { LuCircleDashed, LuCircleDot } from "react-icons/lu"
import { useFont } from "../../lib/FontProvider"
import { useTheme } from "../../lib/ThemeProvider"

export function ThemeButton() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  const { font, setFont } = useFont()
  const isSans = font === "sans"

  return (
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
  )
}
