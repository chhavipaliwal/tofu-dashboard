import { useState } from "react";
import { Icon } from "@iconify/react";

export default function PostSide({ profileData, setProfileData }) {
  const [posts, setPosts] = useState([
    {
      id: Date.now() - 7200000, // 2 hours ago
      author: "Alex Thompson",
      username: "alexthompson",
      time: "2 hours ago",
      content:
        "Just finished an amazing hiking trip in the mountains! The views were absolutely breathtaking. Nature always finds a way to inspire me. 🏔️",
      image: "/placeholder.svg?height=300&width=600",
      likes: 124,
      comments: 18,
      isLiked: false,
      isSaved: false,
    },
    {
      id: Date.now() - 18000000, // 5 hours ago
      author: "Maria Garcia",
      username: "mariagarcia",
      time: "5 hours ago",
      content:
        "Excited to share that I've just launched my new photography portfolio! It's been months of hard work, but seeing it come together feels incredible. Check it out and let me know what you think! 📸",
      likes: 89,
      comments: 12,
      isLiked: false,
      isSaved: false,
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [postImage, setPostImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPostImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
              isLiked: !post.isLiked,
            }
          : post
      )
    );
  };

  const handleSave = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, isSaved: !post.isSaved } : post
      )
    );
  };

  const handlePost = () => {
    if (newPost.trim()) {
      const post = {
        id: Date.now(), // Dynamic ID
        author: profileData.name,
        username: profileData.username,
        time: "now",
        content: newPost,
        image: postImage,
        likes: 0,
        comments: 0,
        isLiked: false,
        isSaved: false,
      };
      setPosts([post, ...posts]);
      setNewPost("");
      setPostImage(null);

      // Update post count
      setProfileData((prev) => ({
        ...prev,
        posts:
          Number.parseInt(prev.posts.replace("K", "")) * 1000 + 1 > 1000
            ? `${(
                (Number.parseInt(prev.posts.replace("K", "")) * 1000 + 1) /
                1000
              ).toFixed(1)}K`
            : (
                Number.parseInt(prev.posts.replace("K", "")) * 1000 +
                1
              ).toString(),
      }));
    }
  };

  return (
    <div className="flex-1 bg-gray-50 h-screen overflow-y-auto">
      <div className="max-w-2xl mx-auto py-6 px-4">
        {/* Create Post */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
              {profileData.profileImage ? (
                <img
                  src={profileData.profileImage || "/placeholder.svg"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 bg-[#2A8DCA] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {profileData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              )}
            </div>
            <div className="flex-1">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder={`What's on your mind, ${
                  profileData.name.split(" ")[0]
                }?`}
                className="w-full resize-none border-none outline-none text-gray-800 placeholder-gray-500 text-lg"
                rows="3"
              />

              {postImage && (
                <div className="mt-4 relative">
                  <img
                    src={postImage || "/placeholder.svg"}
                    alt="Post"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => setPostImage(null)}
                    className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70"
                  >
                    <Icon icon="mdi:close" className="w-4 h-4" />
                  </button>
                </div>
              )}

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-2 text-gray-600 hover:text-[#2A8DCA] transition-colors cursor-pointer">
                    <Icon icon="mdi:image" className="w-5 h-5" />
                    <span className="text-sm font-medium">Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-[#2A8DCA] transition-colors">
                    <Icon icon="mdi:video" className="w-5 h-5" />
                    <span className="text-sm font-medium">Video</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-[#2A8DCA] transition-colors">
                    <Icon icon="mdi:map-marker" className="w-5 h-5" />
                    <span className="text-sm font-medium">Location</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-[#2A8DCA] transition-colors">
                    <Icon icon="mdi:emoticon-happy" className="w-5 h-5" />
                    <span className="text-sm font-medium">Feeling</span>
                  </button>
                </div>

                <button
                  onClick={handlePost}
                  disabled={!newPost.trim()}
                  className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              {/* Post Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-bold text-sm">
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {post.author}
                      </h3>
                      <p className="text-sm text-gray-500">{post.time}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Icon icon="mdi:dots-horizontal" className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Post Content */}
              <div className="px-6 pb-4">
                <p className="text-gray-800 leading-relaxed">{post.content}</p>
              </div>

              {/* Post Image */}
              {post.image && (
                <div className="px-6 pb-4">
                  {post.image.startsWith("data:") ? (
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt="Post"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                      <span className="text-gray-500 font-medium">
                        Mountain Landscape Photo
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Post Actions */}
              <div className="px-6 py-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center space-x-2 transition-colors ${
                        post.isLiked
                          ? "text-red-500"
                          : "text-gray-600 hover:text-red-500"
                      }`}
                    >
                      <Icon
                        icon={post.isLiked ? "mdi:heart" : "mdi:heart-outline"}
                        className="w-5 h-5"
                      />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </button>

                    <button className="flex items-center space-x-2 text-gray-600 hover:text-[#2A8DCA] transition-colors">
                      <Icon icon="mdi:comment-outline" className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        {post.comments}
                      </span>
                    </button>

                    <button className="flex items-center space-x-2 text-gray-600 hover:text-[#2A8DCA] transition-colors">
                      <Icon icon="mdi:share-outline" className="w-5 h-5" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                  </div>

                  <button
                    onClick={() => handleSave(post.id)}
                    className={`transition-colors ${
                      post.isSaved
                        ? "text-[#2A8DCA]"
                        : "text-gray-400 hover:text-[#2A8DCA]"
                    }`}
                  >
                    <Icon
                      icon={
                        post.isSaved ? "mdi:bookmark" : "mdi:bookmark-outline"
                      }
                      className="w-5 h-5"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
