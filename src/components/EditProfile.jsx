import { useState } from "react";
import { Icon } from "@iconify/react";

export default function EditProfile({ onClose, profileData, setProfileData }) {
  const [formData, setFormData] = useState({
    name: profileData.name,
    username: profileData.username,
    bio: profileData.bio,
    location: profileData.location,
    work: profileData.work,
    website: profileData.website || "",
    phone: profileData.phone || "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = (type, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData((prev) => ({
          ...prev,
          [type]: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setProfileData((prev) => ({
      ...prev,
      ...formData,
    }));
    onClose();
  };

  return (
    <div className="flex-1 bg-gray-50 h-screen overflow-y-auto">
      <div className="max-w-2xl mx-auto py-6 px-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Edit Profile</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Icon icon="mdi:close" className="w-6 h-6" />
            </button>
          </div>

          {/* Cover Photo Section */}
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Cover Photo
            </h3>
            <div className="relative">
              <div className="h-32 rounded-lg relative overflow-hidden">
                {profileData.coverImage ? (
                  <img
                    src={profileData.coverImage || "/placeholder.svg"}
                    alt="Cover"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="h-full bg-gradient-to-r from-[#2A8DCA] to-[#4A9FDB]">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <label className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-opacity-70 transition-all cursor-pointer">
                    <Icon icon="mdi:camera" className="w-4 h-4" />
                    <span>Change Cover</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload("coverImage", e)}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Photo Section */}
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Profile Photo
            </h3>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                  {profileData.profileImage ? (
                    <img
                      src={profileData.profileImage || "/placeholder.svg"}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-[#2A8DCA] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {formData.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  )}
                </div>
                <label className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#2A8DCA] rounded-full flex items-center justify-center text-white hover:bg-[#1f6b9a] transition-colors cursor-pointer">
                  <Icon icon="mdi:camera" className="w-4 h-4" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload("profileImage", e)}
                    className="hidden"
                  />
                </label>
              </div>
              <div>
                <label className="bg-[#2A8DCA] text-white px-4 py-2 rounded-lg hover:bg-[#1f6b9a] transition-colors cursor-pointer">
                  Upload Photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload("profileImage", e)}
                    className="hidden"
                  />
                </label>
                <p className="text-sm text-gray-500 mt-1">
                  JPG, PNG or GIF. Max size 2MB.
                </p>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A8DCA] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500">@</span>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) =>
                    handleInputChange("username", e.target.value)
                  }
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A8DCA] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio
              </label>
              <textarea
                value={formData.bio}
                onChange={(e) => handleInputChange("bio", e.target.value)}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A8DCA] focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell people about yourself..."
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.bio.length}/160 characters
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A8DCA] focus:border-transparent outline-none transition-all"
                placeholder="Where are you based?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Work
              </label>
              <input
                type="text"
                value={formData.work}
                onChange={(e) => handleInputChange("work", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A8DCA] focus:border-transparent outline-none transition-all"
                placeholder="Where do you work?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A8DCA] focus:border-transparent outline-all"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A8DCA] focus:border-transparent outline-none transition-all"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-[#2A8DCA] text-white rounded-lg hover:bg-[#1f6b9a] transition-colors flex items-center space-x-2"
            >
              <Icon icon="mdi:content-save" className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
