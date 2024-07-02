import { FaDownload, FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/ferdause-al-mahmud",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/ferdause-al-mahmud",
    },
    {
      id: 4,
      child: (
        <>
          <FaDownload size={30} /> Resume
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex justify-center mt-4">
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex hover:scale-110 justify-between items-center w-40 h-14 px-4  duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex  justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
