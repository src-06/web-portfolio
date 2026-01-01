import { Link } from "react-router-dom"

interface ProjectProps {
  title: string
  date: string
  url: string
  design?: ProjectDesignProps
}

interface ProjectDesignProps {
  name: string
  url?: string
}

const ProjectList: ProjectProps[] = [
  {
    title: "Xione Qatsu",
    date: "Jun 2021",
    url: "https://xioneqatsu.github.io/",
    design: {
      name: "Xione Qatsu",
      url: "https://github.com/xioneqatsu"
    }
  }
]

export function Projects() {
  return (
    <>
      {/* NOTE: Web title */}
      <title>Farell Reyhan Pradana Portfolio | Projects</title>

      {/* NOTE: Project contents */}
      <div
        className="max-w-fit max-h-full ml-auto"
      >
        <div
          className="max-h-[90dvh] mt-auto pb-[60dvh] flex flex-col gap-y-4 overflow-y-scroll scrollbar-none"
        >
          {ProjectList.map((project, index) =>
            <div
              key={index}
              className="text-right"
            >
              <div
                className="max-w-52 md:max-w-60 ml-auto text-2xl md:text-3xl font-bold"
              >
                <Link
                  to={project.url}
                  target="_blank"
                  className="hover:underline"
                >{project.title}</Link>
              </div>
              <p
                className="text-xs md:text-sm text-current/50 font-semibold leading-4"
              >
                {project.date} / Dev
                { project.design
                ? <span> / Design:{" "}
                    <Link
                      key={index}
                      to={project.design.url || ''}
                      target="_blank"
                      className="hover:text-fg hover:underline transition-colors"
                    >{project.design.name}</Link>
                  </span>
                : <span> & Design</span>
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
