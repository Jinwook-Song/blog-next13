import './globals.css';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: `Jinwook's Blog`,
    template: `%s | Jinwook's Blog`,
  },
  description: 'Next 13으로 개발한 블로그',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sans.className}>
      <body className='w-full h-screen overflow-y-scroll flex flex-col max-w-screen-2xl mx-auto'>
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
