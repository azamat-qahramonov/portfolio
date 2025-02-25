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
        <div className="flex-col flex md:flex-row  mt-7">
          <div className="flex items-center justify-center">
            <Link
              href="https://shopco-app.vercel.app"
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
                    Developed a full-featured e-commerce <br className="md:block lg:hidden" /> web application using
                    Vite, React, and TypeScript, <br /> enabling users to browse
                    products, add items to the cart, leave reviews, and place
                    orders, with an admin panel for product and order
                    management.
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
