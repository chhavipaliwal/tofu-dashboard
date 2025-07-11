import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className=" w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Connect, Share, and Discover
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              A modern social media platform where you can share your moments,
              connect with friends, and discover amazing content from around the
              world.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="px-8 py-4 font-semibold rounded-lg text-white transition-colors duration-200 shadow-lg hover:opacity-90"
              style={{ backgroundColor: "#387DAD" }}
            >
              Join SocialConnect
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm">
              <Icon icon="mdi:play-circle" width="24" height="24" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Hero Image Placeholder */}
        <div className="lg:ml-8 ">
          <div className=" bg-[#387DAD] rounded-2xl lg:h-[500px] flex items-center justify-center">
            <div className="text-center text-gray-500">
              <img src="/hero.jpg" alt="Hero Placeholder" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
