import { getNonFeaturedPosts } from '@/app/service/posts';
import React from 'react';
import MultiCarousel from './MultiCarousel';
import PostCard from './PostCard';

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();
  return (
    <section className='my-10'>
      <h2 className='text-lg font-semibold my-2'>You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
