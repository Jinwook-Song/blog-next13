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

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export async function getAllPosts(): Promise<Post[]> {
  const filePath = join(process.cwd(), 'data', 'posts.json');
  const posts = JSON.parse(readFileSync(filePath, 'utf8')) as Post[];
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter(({ featured }) => featured);
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter(({ featured }) => !featured);
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find(({ path }) => path === fileName);

  if (!post) throw new Error(`${fileName} not found.`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;

  const content = readFileSync(filePath, 'utf8');
  return { ...post, content, next, prev };
}
