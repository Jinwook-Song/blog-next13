import { getFeaturedPosts } from '@/app/service/posts';
import React from 'react';
import PostsGrid from './PostsGrid';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section>
      <h2 className='text-lg font-semibold my-2'>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
