import React from "react";

import { getPaginatedPosts } from "@/lib/sanity.client";
import Archive from "./Archive";

const POSTS_PER_PAGE = 6;

const page = async () => {
  const posts = await getPaginatedPosts(POSTS_PER_PAGE);
  return <Archive posts={posts} />;
};

export default page;
