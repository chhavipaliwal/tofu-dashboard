import React from "react";
import { Icon } from "@iconify/react";

const Home = () => {
  return (
    <div className="font-museo bg-[#151718] p-1">
      <div className="bg-white border border-gray rounded-xl m-3 bg-gradient-to-b from-[#d7d8dc] to-[#262626]">
        <div className="ml-8 mr-16 mt-8">
          <div className="flex gap-10">
            <div className="h-auto w-full mb-6 relative">
              <img
                src="earbuds.webp"
                alt="Tofu"
                className="rounded-xl h-auto w-full object-cover"
              />
              <div className="absolute top-0 left-0 flex flex-col text-white m-4  h-full w-full">
                <div>
                  <h1 className=" text-xl ml-4 ">More offers</h1>
                  <h1 className="text-6xl text-white font-sans ml-4 mb-4 w-96 mt-4">
                    There is something else for you
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-[810px] h-[270px] relative">
                <img
                  src="ears.jpg"
                  alt="Tofu"
                  className="rounded-xl h-full w-full object-cover object-left-bottom "
                />
                <div className="absolute top-0 left-0 flex flex-col justify-between  h-full w-full">
                  <div className="  text-white flex justify-between m-4 ">
                    <h1 className=" text-xl ">World of hearing technology</h1>
                    <Icon
                      icon="akar-icons:arrow-up-right"
                      className="text-6xl mr-12"
                    />
                  </div>
                  <div>
                    <h1 className="text-5xl text-white font-sans ml-4 mb-4">
                      View Our Blog
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-[385px] h-[240px] bg-[#5c5e5f] text-white rounded-xl shadow-lg flex flex-col justify-between ">
                  <div className="flex justify-between  mt-6 ml-4 ">
                    <h2 className="text-xl font-medium">
                      Discover Our History
                    </h2>
                    <Icon
                      icon="akar-icons:arrow-up-right"
                      className="text-4xl mr-4"
                    />
                  </div>

                  <div className=" ">
                    <p className="mb-4 items-end ml-4 text-5xl font-sans">
                      About us
                    </p>
                  </div>
                </div>

                <div className="w-[385px] h-[240px] bg-[#15c68f] text-white rounded-xl shadow-lg flex flex-col justify-between">
                  <div className="flex justify-between mt-6 ml-4 ">
                    <h2 className="text-xl font-medium">
                      Have Some Questions?
                    </h2>
                    <Icon
                      icon="bi:box-arrow-up-right"
                      className="text-4xl mr-4"
                    />
                  </div>

                  <div className=" ">
                    <p className="mb-4 items-end ml-4 text-5xl font-sans">
                      Contact us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
