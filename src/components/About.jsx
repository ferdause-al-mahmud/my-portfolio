
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello there! I{"'"}m <span className=" text-cyan-500">Mahin</span>, a passionate and ambitious MERN Stack Developer eager to embark on a journey in the dynamic world of web development.
        </p>
        <br />
        <p className="text-xl">
          My love for coding and problem-solving led me to specialize in the MERN (MongoDB, Express.js, React.js, Node.js) stack, where I{"'"}ve honed my skills in crafting robust and scalable web applications. I thrive in collaborative environments and am always excited to contribute innovative solutions to complex challenges.
        </p>
        <br></br>
        <p className="text-xl">
          In addition to my technical skills, I possess excellent communication and teamwork abilities. I am adept at translating complex technical concepts into user-friendly language, fostering effective collaboration between developers, designers, and stakeholders. I am also a quick learner, always staying abreast of the latest industry trends and technologies to stay ahead of the curve.
        </p>
      </div>
    </div>
  );
};

export default About;
