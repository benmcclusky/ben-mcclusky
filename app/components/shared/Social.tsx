import { socialLinks } from "../../data/social";
import { BiSolidDownload } from "react-icons/bi";

interface SocialProps {
  type: string;
  resumeURL?: string;
}

export default function Social({ type, resumeURL }: SocialProps) {
  return (
    <ul className="flex items-center flex-wrap gap-x-5 gap-y-4 my-10">
      {socialLinks
        .filter((item) => item.status === type)
        .map((value) => (
          <li key={value.id}>
            <a
              href={value.url}
              rel="noreferer noopener"
              target="_blank"
              className="flex items-center border-b dark:border-b-zinc-800 border-zinc-200 group"
            >
              <value.icon
                className="flex-shrink-0 h-5 w-5 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                aria-hidden="true"
              />
              <span className="ml-2">{value.name}</span>
            </a>
          </li>
        ))}
      {resumeURL && (
        <li>
          <a
            href={resumeURL}
            download="ben-mcclusky-cv.pdf"
            className="flex items-center border-b dark:border-b-zinc-800 border-zinc-200 group"
          >
            <BiSolidDownload
              className="flex-shrink-0 h-5 w-5 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
              aria-hidden="true"
            />
            <span className="ml-2">Download CV</span>
          </a>
        </li>
      )}
    </ul>
  );
}
