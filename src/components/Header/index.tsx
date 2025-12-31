import { useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const navMenu = ["About", "Tools & Stack", "Projects", "Contact", "Info"]

export function Header() {
  const navigate = useNavigate(),
    location = useLocation()

  return (
    <header
      className="relative"
    >
      {/* NOTE: Name and role */}
      <div
        className="absolute top-0 left-0"
      >
        <h1
          className="text-2xl md:text-3xl xl:text-4xl text-nowrap font-light"
        >Farell Reyhan Pradana</h1>
        <h2
          className="font-semibold leading-3"
        >Website Developer</h2>
      </div>

      {/* NOTE: Navigation buttons */}
      <div
        className="absolute top-20 left-0 flex flex-col items-start gap-2 font-light"
      >
        { navMenu.map((menu, index) => {
          const pathnameMenu = "/"+(menu === "About" ? "" : menu.toLowerCase().replace(" & ", "&"))
          const isPage = location.pathname === pathnameMenu

          return (
            <button
              key={index}
              onClick={() => navigate(pathnameMenu)}
              className="flex items-center gap-1"
            >
              { isPage
              ? <div
                  className="relative"
                >
                  <motion.div
                    initial={{
                      scale: 0
                    }}
                    animate={{
                      scale: 1
                    }}
                    exit={{
                      scale: 0
                    }}
                    className="absolute top-0 left-0 w-2 h-2 my-2 bg-current rounded-full"
                  />
                  <motion.p
                    initial={{
                      scale: 1,
                      x: 0
                    }}
                    animate={{
                      scale: 0,
                      x: menu.match("&") ? -40 : -20
                    }}
                    exit={{
                      scale: 1,
                      x: 0
                    }}
                  >{menu}</motion.p>
                </div>
              : <motion.p
                  initial={{
                    x: 0
                  }}
                  whileHover={{
                    x: 10
                  }}
                >{menu}</motion.p>
              }
            </button>
          )
        })}
      </div>
    </header>
  )
}
