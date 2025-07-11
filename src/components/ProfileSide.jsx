"use client";
import { Icon } from "@iconify/react";

export default function ProfileSide({
  onEditProfile,
  profileData,
  setProfileData,
}) {
  return (
    <div className="w-100 bg-white border-r border-gray-200 h-screen overflow-y-auto m-6">
      {/* Cover Image */}
      <div className="relative">
        <div className="h-32 relative overflow-hidden rounded-t-lg">
          {profileData.coverImage ? (
            <img
              src={profileData.coverImage || "/placeholder.svg"}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="h-full bg-gradient-to-r from-[#2A8DCA] to-[#4A9FDB] relative">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-medium">
                Cover Image
              </div>
            </div>
          )}
          <div className="absolute top-4 right-4">
            <button className="p-2 bg-black bg-opacity-30 rounded-full text-white hover:bg-opacity-50 transition-all">
              <Icon icon="mdi:camera" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="absolute -bottom-8 left-6">
          <div className="relative">
            <div className="w-16 h-16 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center overflow-hidden">
              {profileData.profileImage ? (
                <img
                  src={profileData.profileImage || "/placeholder.svg"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {profileData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              )}
            </div>
            <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#2A8DCA] rounded-full flex items-center justify-center text-white hover:bg-[#1f6b9a] transition-colors">
              <Icon icon="mdi:camera" className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-12 px-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-gray-900">
            {profileData.name}
          </h2>
          <button className="p-1 text-gray-500 hover:text-[#2A8DCA] transition-colors">
            <Icon icon="mdi:pencil" className="w-4 h-4" />
          </button>
        </div>

        <p className="text-gray-600 mb-3">@{profileData.username}</p>

        <p className="text-gray-800 mb-4 leading-relaxed">{profileData.bio}</p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-600">
            <Icon icon="mdi:map-marker" className="w-4 h-4 mr-2" />
            <span className="text-sm">Lives in {profileData.location}</span>
            <button className="ml-2 text-gray-400 hover:text-[#2A8DCA]">
              <Icon icon="mdi:pencil" className="w-3 h-3" />
            </button>
          </div>
          <div className="flex items-center text-gray-600">
            <Icon icon="mdi:briefcase" className="w-4 h-4 mr-2" />
            <span className="text-sm">Works at {profileData.work}</span>
            <button className="ml-2 text-gray-400 hover:text-[#2A8DCA]">
              <Icon icon="mdi:pencil" className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between mb-6 py-4 border-t border-b border-gray-100">
          <div className="text-center">
            <div className="font-bold text-lg text-gray-900">
              {profileData.posts}
            </div>
            <div className="text-sm text-gray-600">Posts</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-gray-900">
              {profileData.followers}
            </div>
            <div className="text-sm text-gray-600">Followers</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-gray-900">
              {profileData.following}
            </div>
            <div className="text-sm text-gray-600">Following</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={onEditProfile}
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Edit Profile
          </button>
          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            View Public Profile
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center px-3 py-3 text-gray-900 bg-[#2A8DCA] bg-opacity-10 rounded-lg"
          >
            <Icon icon="mdi:home" className="w-5 h-5 mr-3 text-[#2A8DCA]" />
            <span className="font-medium text-[#2A8DCA]">Home</span>
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Icon icon="mdi:book-open-page-variant" className="w-5 h-5 mr-3" />
            <span>My Posts</span>
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Icon icon="mdi:bookmark" className="w-5 h-5 mr-3" />
            <span>Saved</span>
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Icon icon="mdi:cog" className="w-5 h-5 mr-3" />
            <span>Settings</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
