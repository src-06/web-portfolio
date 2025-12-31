import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import { About, Contact, Info, Layout, Projects, ToolsAndStack } from "@/pages"

// NOTE: Browser route using "react-router-dom"
export function BrowserRoutes() {
  const location = useLocation()

  return (
    // NOTE: Animate when in/out page using "framer-motion".
    <AnimatePresence
      mode="wait"
    >
      {/* NOTE: Page routing. */}
      <Routes
        key={location.pathname}
        location={location}
      >
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<About />}
          />
          <Route
            path="tools&stack"
            element={<ToolsAndStack />}
          />
          <Route
            path="projects"
            element={<Projects />}
          />
          <Route
            path="contact"
            element={<Contact />}
          />
          <Route
            path="info"
            element={<Info />}
          />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
