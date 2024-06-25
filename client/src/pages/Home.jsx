import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl">
          Welcome to my blog, Daily Orthodoxy
        </h1>
        <p className="text-gray-600 text-lg sm:text-lg">
          በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሃዱ አምላክ አሜን። በዚህ ገጽ የኢትዮጵያ ኦርቶዶክስ ተዋህዶን አስተምህሮ
          የሚከተሉ መንፈሳዊ ጽሁፎችን ከተለያዩ መጻህፍት፣ እና ድህረ ገጾች በማጣቀስ የሚቀርብበት ነው። ይህ የሙከራ
          ድህረ-ገጽ ነው። In this blog I will try to post a variety of aritcles about
          the Ethiopian Orthodox Tewahido Religion Church. This is a demo
          project.
          <br />
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-lg text-white">
            The goal is to rise spritually, not simply to avoid sin.
          </span>
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
