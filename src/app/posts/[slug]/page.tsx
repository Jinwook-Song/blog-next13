import { getPostData } from '@/app/service/posts';

type Props = {
  params: {
    slug: string;
  };
};
export default async function page({ params: { slug: fileName } }: Props) {
  const post = await getPostData(fileName);
  return (
    <>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </>
  );
}
