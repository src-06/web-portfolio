import { createContext, useContext, useEffect, useState } from "react"

type Font = "sans" | "mono"

interface FontProviderContextType {
  font: Font
  setFont: (font: Font) => void
}

const FontProviderContext = createContext<FontProviderContextType | undefined>(undefined)

interface FontProviderProps {
  children: React.ReactNode
  defaultFont?: Font
  storageName?: string
}

export function FontProvider({
  children,
  defaultFont = "sans",
  storageName = "web-font",
}: FontProviderProps) {
  const localFont = localStorage.getItem(storageName) as Font
  const [font, setFont] = useState<Font>(() => (localFont) || defaultFont)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("font-sans", "font-mono")
    root.classList.add(`font-${font}`)
  }, [font])

  const value = {
    font,
    setFont: (font: Font) => {
      localStorage.setItem(storageName, font)
      setFont(font)
    }
  }

  return (
    <FontProviderContext.Provider value={value}>
      {children}
    </FontProviderContext.Provider>
  )
}

export const useFont = () => {
  const context = useContext(FontProviderContext)
  if (context === undefined) throw new Error("useFont must be used within a FontProvider")
  return context
}
