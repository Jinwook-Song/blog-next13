import { cls } from '@/libs/utils';

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};
export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className='text-center p-4'>
      <h2 className='text-lg font-semibold border-b border-sky-600 mb-2'>
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={cls(
              'cursor-pointer hover:text-sky-600 transition-colors',
              category === selected ? 'text-sky-600 font-semibold' : ''
            )}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
