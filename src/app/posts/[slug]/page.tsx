import { getPostData } from '@/app/service/posts';
import PostContent from '@/components/PostContent';
import { Metadata } from 'next';
import Image from 'next/image';
import AdjacentPostcard from './AdjacentPostcard';

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
