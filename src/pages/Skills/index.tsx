import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export function Skills() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
    >
      <h1>Skill</h1>
      <button
        onClick={() => navigate("/")}
        className="hover:underline"
      >To About</button>
      <button
        onClick={() => navigate("/blog")}
        className="hover:underline"
      >To Blog</button>
    </motion.div>
  )
}
