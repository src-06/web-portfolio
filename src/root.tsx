import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./lib/ThemeProvider"
import { BrowserRoutes } from "./routes"
import "./global.css"

createRoot(document!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <BrowserRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
