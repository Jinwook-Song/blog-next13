import Hero from '@/components/Hero';

const TITLE_CLASS = 'text-2xl font-semibold text-gray-800 my-2';

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className='bg-gray-100 shadow-md p-8 m-8 text-center'>
        <h2 className={TITLE_CLASS}>Who am I?</h2>
        <p>가치를 제공하는 개발자</p>
        <h2 className={TITLE_CLASS}>Carrer</h2>
        <p>
          IMLAB (-Now) <br />
          Hanyang Univ. (-2021)
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, NextJs <br />
          Express, Nest, Django <br />
          Flutter, Go
        </p>
      </section>
    </>
  );
}
