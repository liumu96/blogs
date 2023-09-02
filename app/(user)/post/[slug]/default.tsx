import Container from "@/components/Container";
import CategoryLabel from "@/components/blog/CategoryLabel";
import { urlForImage } from "@/lib/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@/lib/plugins/portabletext";
import AuthorCard from "@/components/blog/AuthorCard";

const DefaultPost = (props: any) => {
  const { loading, post } = props;

  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }
  const imageProps = post?.mainImage ? urlForImage(post?.mainImage) : null;

  return (
    <div className="pt-20 pb-10 h-screen overflow-scroll">
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {post.title}
          </h1>
          <div className="flex justify-center">
            <CategoryLabel categories={post.categories} nomargin={false} />
          </div>
        </div>
      </Container>
      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        {imageProps && (
          <Image
            src={imageProps.src}
            alt={post.mainImage?.alt || "Thumbnail"}
            loading="eager"
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>
      <Container>
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            {post.body && <PortableText value={post.body} />}
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 "
            >
              ← View all posts
            </Link>
          </div>
          {post.author && <AuthorCard author={post.author} />}
        </article>
      </Container>
    </div>
  );
};

export default DefaultPost;
