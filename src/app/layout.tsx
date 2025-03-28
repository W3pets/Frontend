import ConditionalLayout from '../components/ConditionalLayout';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import StoreLayout from './StoreLayout';
import { ImgPaths } from '@/model/types/global';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'W3Pets',
  description: 'Find Your Perfect Pet Companion',
  icons: {
    icon: ImgPaths.Logo, // Path to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StoreLayout>
          <ConditionalLayout>{children}</ConditionalLayout>
        </StoreLayout>
      </body>
    </html>
  );
}
