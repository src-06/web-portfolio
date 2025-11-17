import { LuGithub, LuGitlab, LuInstagram, LuLinkedin, LuMail } from "react-icons/lu"
import { PageTransition } from "../../components"

export function Contact() {
  return (
    <PageTransition>
      {/* TODO: Web title */}
      <title>Farell Reyhan Pradana Portfolio | Contact</title>

      <div
        className="max-w-52 ml-auto mr-6 mb-8 flex gap-4"
      >

        {/* NOTE: Email */}
        <p
          className="flex items-center gap-1"
        >
          <a
            href="mailto:gotthardleoreceive@gmail.com"
            target="_blank"
          ><LuMail size={26} /></a>
        </p>

        {/* NOTE: LinkedIn */}
        <p
          className="flex items-center gap-1"
        >
          <a
            href="https://www.linkedin.com/in/farell-reyhan-pradana"
            target="_blank"
          ><LuLinkedin size={26} /></a>
        </p>

        {/* NOTE: GitHub */}
        <p
          className="flex items-center gap-1"
        >
          <a
            href="https://github.com/src-06"
            target="_blank"
          ><LuGithub size={26} /></a>
        </p>

        {/* NOTE: GitLab */}
        <p
          className="flex items-center gap-1"
        >
          <a
            href="https://gitlab.com/src-06"
            target="_blank"
          ><LuGitlab size={26} /></a>
        </p>

        {/* NOTE: Instagram */}
        <p
          className="flex items-center gap-1"
        >
          <a
            href="https://www.instagram.com/src06leo"
            target="_blank"
          ><LuInstagram size={26} /></a>
        </p>
      </div>
    </PageTransition>
  )
}
