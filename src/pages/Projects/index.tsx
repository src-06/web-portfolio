import { motion } from "framer-motion"

export function Projects() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 20
      }}
      animate={{
        opacity: 1,
        x: 0
      }}
      exit={{
        opacity: 0,
        x: 20
      }}
      className="h-full flex items-end"
    >
      {/* TODO: Web title */}
      <title>Farell Reyhan Pradana Portfolio | Projects</title>

      <div
        className="max-w-fit ml-auto overflow-y-scroll scrollbar-transparent"
      >
        <div
          className="my-[50dvh] flex flex-col gap-y-4"
        >
          <div
            className="text-right"
          >
            <div
              className="max-w-52 ml-auto text-2xl font-light leading-6.5"
            >
              <a
                href="#"
              >Projects Title 1 Lorem ipsum dolor sit.</a>
            </div>
            <p
              className="text-xs font-semibold leading-4"
            >Oct 2025 / Dev & Design</p>
          </div>
          <div
            className="text-right"
          >
            <div
              className="max-w-52 ml-auto text-2xl font-light leading-6.5"
            >
              <a
                href="#"
              >Projects Title 1</a>
            </div>
            <p
              className="text-xs font-semibold leading-4"
            >Oct 2025 / Dev / Design: <a href="#">Xione Qatsu</a></p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
