'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';

type Form = {
  from: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: '',
    subject: '',
    message: '',
  });
  const [banner, setBanner] = useState<BannerData | null>(null);

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.currentTarget;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
    setBanner({ message: '성공', state: 'success' });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  }
  return (
    <section className='w-full max-w-md'>
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className='w-full flex flex-col gap-3 m-4 p-4 bg-slate-600 rounded-lg text-white'
      >
        <label className='font-semibold' htmlFor='from'>
          Your Email
        </label>
        <input
          className='focus:outline-none p-2 rounded-sm'
          type='email'
          id='from'
          name='from'
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label className='font-semibold' htmlFor='subject'>
          Subject
        </label>
        <input
          className='focus:outline-none p-2 rounded-sm'
          type='text'
          id='subject'
          name='subject'
          required
          value={form.subject}
          onChange={onChange}
        />
        <label className='font-semibold' htmlFor='message'>
          Message
        </label>
        <textarea
          className='text-black focus:outline-none p-2 rounded-sm'
          rows={6}
          id='message'
          name='message'
          required
          value={form.message}
          onChange={onChange}
        />
        <button className='bg-yellow-300 text-black font-semibold hover:bg-yellow-400 rounded-sm p-2'>
          Submit
        </button>
      </form>
    </section>
  );
}
