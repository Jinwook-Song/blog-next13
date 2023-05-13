'use client';

import { Post } from '@/app/service/posts';
import { useState } from 'react';
import Categories from './Categories';
import PostsGrid from './PostsGrid';

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = 'all';

export default function FilterablePost({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter(({ category }) => category === selected);
  return (
    <section className='my-20 flex justify-between'>
      <PostsGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
