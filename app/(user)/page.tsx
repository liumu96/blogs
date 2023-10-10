"use client";
import { getAllPosts, getPaginatedPosts } from "@/lib/sanity.client";
import { useEffect, useState } from "react";

import BlogCard from "@/components/BlogCard.jsx";
import Container from "@/components/Container.jsx";
import Link from "next/link";
import Banner from "@/components/Banner";

interface BlogItem {
  author: Object;
  categories: Object;
  mainImage: Object;
  publishedAt: String;
  title: String;
  slug: String | null;
}

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getAllPosts();
      setBlogs(data);
      setMounted(true);
    };
    getPosts();
  }, []);
  if (!mounted) return;

  return (
    <div className="pt-24 pb-16 h-screen overflow-scroll">
      <Banner />
      {/* post card lists */}
      <Container>
        <div className="mt-10 grid gap-10 md:grid-cols-3 sm:grid-cols-2 lg:gap-10 xl:grid-cols-3 overflow-hidden">
          {blogs.slice(0, 6).map((blog: any) => {
            return (
              <BlogCard
                key={blog._id}
                post={blog}
                aspect="square"
                minimal={false}
                preloadImage={false}
                pathPrefix={null}
              />
            );
          })}
        </div>
        {/* View all Blogs */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/archive"
            className="relative inline-flex items-center gap-1 rounded-md border boder-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disable"
          >
            <span> View all Blogs</span>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
