import DefaultPost from "./default";

import { getAllPostsSlugs, getPostBySlug } from "@/lib/sanity.client";

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export async function generateMetadata({ params }: { params: any }) {
  const post = await getPostBySlug(params.slug);
  return { title: post.title };
}

const page = async ({ params }: { params: any }) => {
  const post = await getPostBySlug(params.slug);
  return <DefaultPost post={post} />;
};

export default page;
