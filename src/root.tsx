import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "~/ThemeProvider"
import { FontProvider } from "~/FontProvider"
import { BrowserRoutes } from "@/routes"
import "@/global.css"

// NOTE: Create root and render react components
createRoot(document!).render(
  <StrictMode>
    <ThemeProvider>
      <FontProvider>
        <BrowserRouter>
          <BrowserRoutes />
        </BrowserRouter>
      </FontProvider>
    </ThemeProvider>
  </StrictMode>
)
