import { motion } from "framer-motion"
import { LuGithub, LuGitlab, LuInstagram, LuLinkedin, LuMail } from "react-icons/lu"
import { PageTransition } from "../../components"

const contactList = [
  {
    icon: <LuMail size={26} />,
    link: "mailto:gotthardleoreceive@gmail.com"
  },
  {
    icon: <LuLinkedin size={26} />,
    link: "https://www.linkedin.com/in/farell-reyhan-pradana"
  },
  {
    icon: <LuGithub size={26} />,
    link: "https://github.com/src-06"
  },
  {
    icon: <LuGitlab size={26} />,
    link: "https://gitlab.com/src-06"
  },
  {
    icon: <LuInstagram size={26} />,
    link: "https://www.instagram.com/src06leo"
  }
]

export function Contact() {
  return (
    <PageTransition>
      {/* TODO: Web title */}
      <title>Farell Reyhan Pradana Portfolio | Contact</title>

      {/* NOTE: Contact contents */}
      <div
        className="max-w-52 ml-auto mr-6 mb-8 flex gap-4"
      >
        { contactList.map((list, index) =>
          <motion.a
            key={index}
            initial={{
              scale: 1,
              y: 0
            }}
            whileHover={{
              scale: 1.2,
              y: -4
            }}
            whileTap={{
              scale: 1.5,
              y: -7
            }}
            href={list.link}
            target="_blank"
          >{list.icon}</motion.a>
        )}
      </div>
    </PageTransition>
  )
}
