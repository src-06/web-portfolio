import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import { About, Contact, Info, Layout, Projects, Skills } from "./pages"

export function BrowserRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence
      mode="wait"
    >
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
            path="skills"
            element={<Skills />}
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
