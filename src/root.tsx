import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./lib/ThemeProvider"
import { FontProvider } from "./lib/FontProvider"
import { BrowserRoutes } from "./routes"
import "./global.css"

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
