import Link from "next/link";
import Theme from "./Theme";
import UnmountStudio from "./Unmount";

export default function Navbar() {
  const data = [
    {
      title: "About",
      href: "/", // Anchor link to the Experience section
    },
    {
      title: "Experience",
      href: "/#experience", // Anchor link to the Experience section
    },
    {
      title: "Skills",
      href: "/#skills", // Anchor link to the Skills section
    },
    {
      title: "Projects",
      href: "/#projects", // Anchor link to the Projects section
    },
  ];

  return (
    <UnmountStudio>
      <header className="text-sm py-6 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <nav className="flex-1 flex justify-center">
            <ul className="flex items-center gap-x-8">
              {data.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className="font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-base"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-x-4">
            <Theme />
          </div>
        </div>
      </header>
    </UnmountStudio>
  );
}
