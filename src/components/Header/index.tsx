import { useLocation, useNavigate } from "react-router-dom"
import { LuCircleDashed, LuCircleDot } from "react-icons/lu"

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
          className="text-2xl text-nowrap font-light"
        >Farell Reyhan Pradana</h1>
        <h2
          className="font-semibold leading-3 opacity-65"
        >Developer</h2>
      </div>

      {/* NOTE: Navigation buttons */}
      <div
        className="absolute top-20 left-0 flex flex-col items-start gap-2 font-light"
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1"
        >
          { location.pathname === "/"
          ? <LuCircleDot size={16} />
          : <LuCircleDashed size={16} />
          } About
        </button>
        <button
          onClick={() => navigate("/skills")}
          className="flex items-center gap-1"
        >
          { location.pathname === "/skills"
          ? <LuCircleDot size={16} />
          : <LuCircleDashed size={16} />
          } Skills
        </button>
        <button
          onClick={() => navigate("/projects")}
          className="flex items-center gap-1"
        >
          { location.pathname === "/projects"
          ? <LuCircleDot size={16} />
          : <LuCircleDashed size={16} />
          } Projects
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="flex items-center gap-1"
        >
          { location.pathname === "/contact"
          ? <LuCircleDot size={16} />
          : <LuCircleDashed size={16} />
          } Contact
        </button>
        <button
          onClick={() => navigate("/info")}
          className="flex items-center gap-1"
        >
          { location.pathname === "/info"
          ? <LuCircleDot size={16} />
          : <LuCircleDashed size={16} />
          } Info
        </button>
      </div>
    </header>
  )
}
