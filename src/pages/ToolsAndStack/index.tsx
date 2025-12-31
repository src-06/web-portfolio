
interface ToolsStackProps {
  title: string
  value: string[]
}

const ToolsStack: ToolsStackProps[] = [
  {
    title: "Daily Use",
    value: [
      "Tailwind CSS",
      "TypeScript",
      "React",
      "Laravel",
      "NixOS",
      "VSCode",
    ]
  },
  {
    title: "Exploring",
    value: [
      "(experimenting) Bun",
      "Node.js",
    ]
  }
]

export function ToolsAndStack() {
  return (
    <>
      {/* NOTE: Web title */}
      <title>Farell Reyhan Pradana Portfolio | Tools & Stack</title>

      {/* NOTE: Tools & Stack contents */}
      <div
        className="max-w-52 md:max-w-60 ml-auto"
      >
        <div
          className="flex flex-col gap-y-8"
        >
          { ToolsStack.map((tool, index) =>
            <div
              key={index}
              className="text-right"
            >
              <h1
                className="text-2xl md:text-3xl xl:text-4xl font-semibold"
              >{tool.title}</h1>
              {tool.value.map((v, i) =>
                <p
                  key={i}
                >{v}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
