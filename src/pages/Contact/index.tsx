import { motion } from "framer-motion"
import { Github, Gitlab, Instagram, Linkedin, Mail } from "lucide-react"

export function Contact() {
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
      <title>Farell Reyhan Pradana Portfolio | Contact</title>

      <div
        className="max-w-52 ml-auto mr-8 mb-8 flex gap-5"
      >

        {/* NOTE: Email */}
        <p
          className="flex items-center gap-1"
        >
          <a
            href="mailto:gotthardleoreceive@gmail.com"
            target="_blank"
          ><Mail size={30} /></a>
        </p>

        {/* NOTE: LinkedIn */}
        <p
          className="flex items-center gap-1"
        >
          <a
            href="https://www.linkedin.com/in/farell-reyhan-pradana"
            target="_blank"
          ><Linkedin size={30} /></a>
        </p>

        {/* NOTE: GitHub */}
        <p
          className="flex items-center gap-1"
        >
          <a
            href="https://github.com/src-06"
            target="_blank"
          ><Github size={30} /></a>
        </p>

        {/* NOTE: Gitlab */}
        <p
          className="flex items-center gap-1"
        >
          <a
            href="https://gitlab.com/src-06"
            target="_blank"
          ><Gitlab size={30} /></a>
        </p>

        {/* NOTE: Instagram */}
        <p
          className="flex items-center gap-1"
        >
          <a
            href="https://www.instagram.com/src06leo"
            target="_blank"
          ><Instagram size={30} /></a>
        </p>
      </div>
    </motion.div>
  )
}
