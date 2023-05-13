import Link from 'next/link';
import React from 'react';

export default function Header() {
  const routes = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'about',
      path: '/about',
    },
    {
      name: 'posts',
      path: '/posts',
    },
    {
      name: 'contact',
      path: '/contact',
    },
  ];

  return (
    <header className='flex justify-between items-center p-4'>
      <Link href={'/'}>
        <h1 className='text-3xl font-semibold'>{`Jinwook's Blog`}</h1>
      </Link>
      <nav className='flex gap-4'>
        {routes.map((route) => (
          <Link key={route.name} href={route.path}>
            {route.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
