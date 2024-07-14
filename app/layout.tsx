import type { Metadata } from 'next';
import './globals.css';
import { cormorant, gowun_dodum, inter, mrs_saint_delafield, parisienne } from './fonts';

export const metadata: Metadata = {
  title: '유하진 ❤️ 이등록',
  description: '유하진과 이등록의 결혼식에 초대합니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${inter.variable} ${cormorant.variable} ${gowun_dodum.variable} ${mrs_saint_delafield.variable} ${parisienne.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
