import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi"
import { DiCss3, DiHtml5, DiReact } from "react-icons/di"
import { motion } from "framer-motion"

export function Skills() {
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
      <title>Farell Reyhan Pradana Portfolio | Skills</title>

      <div
        className="max-w-52 max-h-full ml-auto overflow-y-scroll scrollbar-transparent"
      >
        <div
          className="my-[40dvh]"
        >
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quos. Officiis soluta dicta, et voluptate, iusto quod repellendus culpa mollitia consequuntur, ipsam maxime? Debitis vero sit amet nemo asperiores non.</p>
          <div
            className="mt-4"
          >
            <h1>Languages</h1>
            <div
              className="flex gap-1"
            >
              <DiHtml5 size={30} />
              <DiCss3 size={30} />
              <BiLogoTypescript size={30} />
            </div>
          </div>
          <div
            className="mt-4"
          >
            <h1>Framework & Library</h1>
            <div
              className="flex gap-1"
            >
              <BiLogoTailwindCss size={30} />
              <DiReact size={30} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
