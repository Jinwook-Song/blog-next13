import { getFeaturedPosts } from '@/app/service/posts';
import PostsGrid from './PostsGrid';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className='my-10'>
      <h2 className='text-lg font-semibold my-2'>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
