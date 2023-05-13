import { readFileSync } from 'fs';
import { join } from 'path';

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export async function getAllPosts(): Promise<Post[]> {
  const filePath = join(process.cwd(), 'data', 'posts.json');
  const posts = JSON.parse(readFileSync(filePath, 'utf8')) as Post[];
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  const featuredPosts = posts.filter(({ featured }) => featured);
  return featuredPosts;
}
