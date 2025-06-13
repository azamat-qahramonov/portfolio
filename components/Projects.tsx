import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 text-1xl">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex mt-7">
          <div className="flex items-center justify-center">
            <Link
              href="https://shopco.uz"
              rel="noopener noreferrer"
              target="_blank"
              className="z-[1]"
            >
              <div className="flex-row flex mb-5">
                <div className="bg-white p-5 rounded-lg flex justify-center items-center w-[200px] h-[100px]">
                  <Image
                    src="/shopco.svg"
                    height={100}
                    width={150}
                    alt="shopco logo"
                  />
                </div>

                <div className="px-1">
                  <p className="text-white font-semibold text-xl">SHOP.CO</p>
                  <p className="text-gray-500 text-[10px]">
                    Developed a full-featured e-commerce{" "}
                    <br className="md:block lg:hidden" /> web application using
                    Vite, React, and TypeScript, <br /> enabling users to browse
                    products, add items to the cart, leave reviews, and place
                    orders, with an admin panel for product and order
                    management.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="https://deznavoiy.uz"
              rel="noopener noreferrer"
              target="_blank"
              className="z-[1]"
            >
              <div className="flex-row flex mb-5">
                <div className="bg-white p-5 rounded-lg flex justify-center items-center w-[200px] h-[100px]">
                  <Image
                    src="/deznavoiy.PNG"
                    height={100}
                    width={150}
                    alt="deznavoiy logo"
                  />
                </div>

                <div className="px-1">
                  <p className="text-white font-semibold text-xl">DEZNAVOIY</p>
                  <p className="text-gray-500 text-[10px]">
                    Developed a professional disinfection{" "}
                    <br className="md:block lg:hidden" /> service platform for
                    Deznavoiy.uz <br className="lg:block md:hidden" /> using
                    Vite, React, and TypeScript. The site allows users to book
                    pest control services, view information about treatments,
                    and share feedback.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="https://viacargo.uz"
              rel="noopener noreferrer"
              target="_blank"
              className="z-[1]"
            >
              <div className="flex-row flex mb-5">
                <div className="bg-white p-5 rounded-lg flex justify-center items-center w-[200px] h-[100px]">
                  <Image
                    src="/via.png"
                    height={100}
                    width={150}
                    alt="via logo"
                  />
                </div>

                <div className="px-1">
                  <p className="text-white font-semibold text-xl">VIA</p>
                  <p className="text-gray-500 text-[10px]">
                    Developed a reliable cargo delivery{" "}
                    <br className="md:block lg:hidden" /> service platform for
                    Via Cargo Uz <br className="lg:block md:hidden" /> using
                    Vite, React, and TypeScript. <br />
                    The site allows users to schedule secure deliveries, <br />
                    track shipments in real time, and get detailed service info.
                    We guarantee fast and safe delivery with a fleet of
                    top-quality trucks, ensuring your cargo arrives on time.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
