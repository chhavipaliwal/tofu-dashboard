"use client";

import { useState } from "react";
import ProfileSide from "./ProfileSide";
import PostSide from "./PostSide";
import EditProfile from "./EditProfile";

export default function Home() {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Sarah Johnson",
    username: "sarahjohnson",
    bio: "Digital marketing enthusiast | Coffee lover | Travel addict",
    location: "New York, NY",
    work: "Tech Solutions Inc.",
    posts: "1.2K",
    followers: "5.4K",
    following: "890",
    website: "",
    phone: "",
    profileImage: null,
    coverImage: null,
  });

  const handleEditProfile = () => {
    setShowEditProfile(true);
  };

  const handleCloseEditProfile = () => {
    setShowEditProfile(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <ProfileSide
        onEditProfile={handleEditProfile}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      {showEditProfile ? (
        <EditProfile
          onClose={handleCloseEditProfile}
          profileData={profileData}
          setProfileData={setProfileData}
        />
      ) : (
        <PostSide profileData={profileData} setProfileData={setProfileData} />
      )}
    </div>
  );
}
