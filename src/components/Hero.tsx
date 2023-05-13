import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <section className='w-full flex justify-center items-center flex-col gap-4 mt-4'>
      <div className='w-40 aspect-square rounded-full overflow-hidden relative'>
        <Image fill src={'/images/profile.jpeg'} alt='profile' priority />
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='text-lg font-semibold'>{`Hi, I'm Jinwook`}</h2>
        <h3>{`Full-stack Engineer`}</h3>
      </div>
      <Link href={'/contact'}>
        <button className='rounded-xl bg-yellow-500 px-3 py-1 font-semibold'>
          Contact Me
        </button>
      </Link>
    </section>
  );
}
