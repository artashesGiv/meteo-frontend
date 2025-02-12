import type { Metadata } from 'next';

import { mulish, nunitoSans } from '@styles/fonts';

import { Header } from '@/widgets/Header/ui';
import { NavBar } from '@/widgets/NavBar/ui';

import './layout.scss';

import '@styles/index.scss';

export const metadata: Metadata = {
  title: 'New Brand',
  description: 'New Brand Site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body>
        <div
          className={`main-layout ${nunitoSans.variable} ${mulish.variable}`}
        >
          <Header />
          <NavBar className='main-layout__nav-bar' />
          <main className='main-layout__main'>{children}</main>
        </div>
      </body>
    </html>
  );
}
