import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px]"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center leading-relaxed">
          I'm a passionate Frontend Developer with a strong focus on{" "}
          <span className="text-blue-400 font-medium">ReactJS</span>,{" "}
          <span className="text-blue-400 font-medium">TypeScript</span>, and{" "}
          <span className="text-blue-400 font-medium">JavaScript</span>. I love building intuitive and user-friendly web applications, transforming creative ideas into seamless digital experiences.
          <br />
          <br />
          My development journey revolves around crafting clean, responsive UIs
          and optimizing performance, ensuring users have an engaging
          experience. Every line of code I write reflects my dedication to both
          functionality and aesthetics. I'm always exploring new technologies
          and pushing my skills to the next level.
        </p>
      </div>
    </section>
  );
};

export default About;
