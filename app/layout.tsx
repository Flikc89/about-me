import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const pixeloidSans = localFont({
  src: [
    {
      path: '../public/fonts/Pixeloid Sans.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/PixeloidSans-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pixeloid-sans',
  fallback: ['Arial', 'sans-serif'],
});

const hack = localFont({
  src: [
    {
      path: '../public/fonts/Hack-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Hack-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-hack',
  fallback: ['monospace'],
});

export const metadata: Metadata = {
  title: 'Denis Lobanov',
  description: 'Senior Frontend Developer',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${pixeloidSans.variable} ${hack.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
