import DigitalSculp from '../../public/portfolio/digital-sculp-1.jpg'
import SuiteVoyage from '../../public/portfolio/suite-vouage-1.jpg'
import TechFusion from '../../public/portfolio/techfusion-1.jpg'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: DigitalSculp,
      demo: "https://starlit-jelly-aa5348.netlify.app",
      code: 'https://github.com/diptomahin/digital-sculp-client'
    },
    {
      id: 2,
      src: SuiteVoyage,
      demo: 'https://stupendous-belekoy-96d692.netlify.app',
      code: 'https://github.com/diptomahin/suite-voyage-client'
    },
    {
      id: 3,
      src: TechFusion,
      demo: ' https://cool-sundae-a30382.netlify.app',
      code: 'https://github.com/diptomahin/brand-shop-client'
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
               <a href={demo}>
               <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
               </a>
              <a href={code}>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
