import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        EXPERIENCE
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 text-1xl">
        EXPLORE NOW
      </p>
      <div className="container mx-auto">
        <div className="md:flex md:justify-between items-center pt-5">
          <div className="flex items-center gap-3">
            <Image src={"/WebHR.svg"} height={30} width={30} alt="" />
            <p className="text-gray-300 text-lg">
              <span className="font-semibold">Frontend Developer </span>
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">Present</p>
        </div>

        <p className="text-gray-300 py-7 text-center leading-relaxed">
          I am a passionate{" "}
          <span className="text-blue-400 font-medium">Frontend Developer</span>{" "}
          with a strong focus on modern web technologies. My expertise lies in
          building dynamic and responsive web applications using{" "}
          <span className="text-blue-400 font-medium">ReactJS</span>,{" "}
          <span className="text-blue-400 font-medium">TypeScript</span>, and{" "}
          <span className="text-blue-400 font-medium">JavaScript</span>.
          <br />
          <br />I specialize in creating seamless user interfaces that combine
          both aesthetics and functionality. My journey involves developing
          scalable components, managing state effectively, and ensuring optimal
          performance across diverse platforms. I constantly strive to stay
          updated with the latest web technologies and best practices, pushing
          my skills to the next level.
        </p>

        <div className="flex flex-wrap gap-3 mt-5">
          <div className="bg-transparent cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E]">
            ReactJS
          </div>
          <div className="bg-transparent cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E]">
            NextJS
          </div>
          <div className="bg-transparent cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E]">
            TypeScript
          </div>
          <div className="bg-transparent cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E]">
            JavaScript
          </div>
          <div className="bg-transparent cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E]">
            Tailwind CSS
          </div>
          <div className="bg-transparent cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E]">
            Redux
          </div>
          <div className="bg-transparent cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E]">
            MUI
          </div>
          <div className="bg-transparent cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E]">
            SASS
          </div>
          <div className="bg-transparent cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E]">
            HTML
          </div>
          <div className="bg-transparent cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E]">
            CSS
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
