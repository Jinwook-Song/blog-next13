import { getFeaturedPosts, getPostData } from '@/app/service/posts';
import AdjacentPostcard from '@/components/AdjacentPostcard';
import PostContent from '@/components/PostContent';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug: fileName },
}: Props): Promise<Metadata> {
  const { title, description } = await getPostData(fileName);
  return {
    title,
    description,
  };
}

export default async function page({ params: { slug: fileName } }: Props) {
  const post = await getPostData(fileName);
  const { title, path, next, prev } = post;
  return (
    <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-md m-4'>
      <Image
        className='w-full max-h-[400px]'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className='flex shadow-md'>
        {prev && <AdjacentPostcard type='prev' post={prev} />}
        {next && <AdjacentPostcard type='next' post={next} />}
      </section>
    </article>
  );
}

// 자주 사용하는 포스트에 대해 미리 static하게 생성해둠 (ssr -> ssg)
export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map(({ path: slug }) => ({ slug }));
}
