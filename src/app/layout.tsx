import type { Metadata } from 'next'
import Link from 'next/link'

import { mulish, nunitoSans } from '@styles/fonts'

import './layout.scss'

import '@styles/index.scss'

export const metadata: Metadata = {
  title: 'New Brand',
  description: 'New Brand Site',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={`main-layout ${nunitoSans.variable} ${mulish.variable}`}>
        <header>header</header>
        <aside>
          <Link href='/data-collection'>сбор данных</Link>
          <Link href='/diseases'>геоинформационная система</Link>
          <Link href='/geoinformation-system'>прогноз погоды</Link>
          <Link href='/technological-maps'>технологические карты</Link>
          <Link href='/weather-forecast'>болезни</Link>
        </aside>
        <main>{children}</main>
      </body>
    </html>
  )
}
