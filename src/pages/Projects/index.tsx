
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
    title: "Project 2",
    date: "Dec 2025",
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
                className="max-w-52 md:max-w-60 ml-auto text-2xl md:text-3xl font-bold leading-6.5"
              >
                <a
                  href={project.url}
                  className="hover:underline"
                >{project.title}</a>
              </div>
              <p
                className="text-xs md:text-sm font-semibold leading-4 md:leading-6 opacity-50"
              >
                {project.date} / Dev
                { project.design
                ? <span> / Design:{" "}
                    <a
                      key={index}
                      href={project.design.url}
                      className="hover:underline"
                    >{project.design.name}</a>
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
