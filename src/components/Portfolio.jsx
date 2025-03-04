import PetzAdopt from "/portfolio/project-1.png";
import StudyBuddy from "/portfolio/project-2.png";
import CraftXtore from "/portfolio/project-3.png";
import ClassyTouch from "../assets/image.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 4,
      src: ClassyTouch,
      projectName: "Classy Touch",
      demo: "https://www.classytouchbd.com",
      // code: "https://github.com/ferdause-al-mahmud/PetzAdopt",
    },
    {
      id: 1,
      src: PetzAdopt,
      projectName: "PetzAdopt",
      demo: "https://petzadopt-7acf4.web.app",
      code: "https://github.com/ferdause-al-mahmud/PetzAdopt",
    },
    {
      id: 2,
      src: StudyBuddy,
      projectName: "Study Buddy",
      demo: "https://assignment-hub-e4e39.web.app",
      code: "https://github.com/ferdause-al-mahmud/Assignment-Hub-client",
    },
    {
      id: 3,
      src: CraftXtore,
      projectName: "CraftXtore",
      demo: "https://craftxtore.web.app",
      code: "https://github.com/ferdause-al-mahmud/CraftXtore-client",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(({ id, src, demo, code, projectName }) => (
            <div key={id}>
              <h1 className="flex justify-center items-center md:text-2xl mb-4 font-semibold">
                {projectName}
              </h1>
              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <a rel="noreferrer" target="_blank" href={demo}>
                    <button className="w-full px-6 py-3 m-4 hover:bg-gray-700  duration-200  hover:scale-110">
                      Live
                    </button>
                  </a>
                  {code && (
                    <a rel="noreferrer" target="_blank" href={code}>
                      <button className="w-full px-6 py-3 m-4  duration-200 hover:bg-gray-700 hover:scale-110">
                        Code
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
