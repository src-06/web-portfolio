import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

interface ThemeProviderContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageName?: string
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageName = "web-theme",
}: ThemeProviderProps) {
  const localTheme = localStorage.getItem(storageName) as Theme
  const [theme, setTheme] = useState<Theme>(() => (localTheme) || defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("dark", "light")
    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageName, theme)
      setTheme(theme)
    }
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
