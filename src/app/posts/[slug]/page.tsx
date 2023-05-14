import { getPostData } from '@/app/service/posts';
import MarkdownViewer from '@/components/MarkdownViewer';
import Image from 'next/image';
import { AiTwotoneCalendar } from 'react-icons/ai';

type Props = {
  params: {
    slug: string;
  };
};
export default async function page({ params: { slug: fileName } }: Props) {
  const { title, description, date, path, content } = await getPostData(
    fileName
  );
  return (
    <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-md m-4'>
      <Image
        className='w-full max-h-[400px]'
        src={`/images/posts/${path}.png`}
        alt='title'
        width={760}
        height={420}
      />
      <section className='flex flex-col p-4'>
        <div className='flex items-center self-end text-sky-600 gap-2'>
          <AiTwotoneCalendar />
          <p className='font-semibold'>{date.toString()}</p>
        </div>
        <h1 className='text-4xl font-semibold'>{title}</h1>
        <p className='text-xl'>{description}</p>
        <div className='w-1/2 border-2 border-sky-600 mt-4 mb-8' />
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
