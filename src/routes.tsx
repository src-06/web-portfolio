import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import { About, Layout, Skills } from "./pages"

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
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
