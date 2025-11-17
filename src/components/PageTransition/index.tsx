import { motion } from "framer-motion"

export function PageTransition({
  children
}: {
  children: React.ReactNode
}) {
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
    >{children}</motion.div>
  )
}
