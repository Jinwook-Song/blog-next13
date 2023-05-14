import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const LINKS = [
  { icon: <AiFillGithub />, url: 'https://github.com/jinwook-song' },
  {
    icon: <AiFillLinkedin />,
    url: 'https://www.linkedin.com/in/j-w-song-807ba326a/',
  },
];

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Jinwook에게 메일 보내기',
};

export default function ContactPage() {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='text-3xl font-semibold my-2'>Contact Me</h2>
      <p>wlsdnr129@naver.com</p>
      <ul className='flex gap-4 my-2 [&>*:nth-child(2)]:text-sky-700'>
        {LINKS.map(({ icon, url }) => (
          <a
            key={url}
            href={url}
            target='_blank'
            rel='noreferere'
            className='text-4xl'
          >
            {icon}
          </a>
        ))}
      </ul>
      <h2 className='text-2xl font-semibold my-4'>Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
