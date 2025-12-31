import { LuCircleDashed, LuCircleDot } from "react-icons/lu"
import { useFont } from "~/FontProvider"
import { useTheme } from "~/ThemeProvider"

export function ThemeButton() {
  const { theme, setTheme } = useTheme(),
    { font, setFont } = useFont()

  const isDark = theme === "dark",
    isSans = font === "sans"

  return (
    <div
      className="absolute bottom-8 left-6 md:left-6.5 -rotate-90 origin-bottom-left flex gap-2"
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
