import { Post } from '@/app/service/posts';
import { cls } from '@/libs/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type Props = {
  post: Post;
  type: 'prev' | 'next';
};

export default function AdjacentPostcard({
  post: { path, title, description },
  type,
}: Props) {
  const ICON_CLASS = 'text-4xl m-4 text-yellow-300 transition-transform';

  return (
    <Link className='relative w-full bg-black max-h-56' href={`/posts/${path}`}>
      <Image
        className='w-full opacity-30'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full flex justify-around items-center text-white group px-8'>
        {type === 'prev' && (
          <FaArrowLeft
            className={cls(ICON_CLASS, 'group-hover:-translate-x-2')}
          />
        )}
        <div className='w-full text-center truncate whitespace-nowrap'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='font-semibold'>{description}</p>
        </div>
        {type === 'next' && (
          <FaArrowRight
            className={cls(ICON_CLASS, 'group-hover:translate-x-2')}
          />
        )}
      </div>
    </Link>
  );
}
