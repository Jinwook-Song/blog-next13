'use client';

import { sendContactEmail } from '@/app/service/contact';
import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';

export type ContactForm = {
  from: string;
  subject: string;
  message: string;
};

const DEFULAT_DATA: ContactForm = {
  from: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactForm>(DEFULAT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [loading, setLoading] = useState(false);

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.currentTarget;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    sendContactEmail(form)
      .then(() => {
        setBanner({ message: '메일이 발송되었습니다.', state: 'success' });
        setForm(DEFULAT_DATA);
      })
      .catch(() => {
        setBanner({
          message: '메일 발송 실패. 다시 시도해주세요.',
          state: 'error',
        });
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
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
          className='focus:outline-none p-2 rounded-sm text-black'
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
          className='focus:outline-none p-2 rounded-sm text-black'
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
        <button
          disabled={loading}
          className='bg-yellow-300 text-black font-semibold hover:bg-yellow-400 rounded-sm p-2 disabled:cursor-not-allowed disabled:opacity-30'
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </section>
  );
}
