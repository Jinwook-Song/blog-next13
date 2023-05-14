import { PostData } from '@/app/service/posts';
import { AiTwotoneCalendar } from 'react-icons/ai';
import MarkdownViewer from './MarkdownViewer';

type Props = {
  post: PostData;
};

export default function PostContent({ post }: Props) {
  const { title, description, date, content } = post;

  return (
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
  );
}
