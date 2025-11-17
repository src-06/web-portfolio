import { motion } from "framer-motion"
import { LuGithub, LuGitlab, LuInstagram, LuLinkedin, LuMail } from "react-icons/lu"

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
          ><LuMail size={30} /></a>
        </p>

        {/* NOTE: LinkedIn */}
        <p
          className="flex items-center gap-1"
        >
          <a
            href="https://www.linkedin.com/in/farell-reyhan-pradana"
            target="_blank"
          ><LuLinkedin size={30} /></a>
        </p>

        {/* NOTE: GitHub */}
        <p
          className="flex items-center gap-1"
        >
          <a
            href="https://github.com/src-06"
            target="_blank"
          ><LuGithub size={30} /></a>
        </p>

        {/* NOTE: GitLab */}
        <p
          className="flex items-center gap-1"
        >
          <a
            href="https://gitlab.com/src-06"
            target="_blank"
          ><LuGitlab size={30} /></a>
        </p>

        {/* NOTE: Instagram */}
        <p
          className="flex items-center gap-1"
        >
          <a
            href="https://www.instagram.com/src06leo"
            target="_blank"
          ><LuInstagram size={30} /></a>
        </p>
      </div>
    </motion.div>
  )
}
