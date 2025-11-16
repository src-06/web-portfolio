import { motion } from "framer-motion"

export function About() {
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
      <title>Farell Reyhan Pradana Portfolio | About</title>

      <div
        className="max-w-52 ml-auto"
      >
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quos. Officiis soluta dicta, et voluptate, iusto quod repellendus culpa mollitia consequuntur, ipsam maxime? Debitis vero sit amet nemo asperiores non.</p>
      </div>
    </motion.div>
  )
}
