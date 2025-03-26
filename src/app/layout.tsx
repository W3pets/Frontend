import ConditionalLayout from '../components/ConditionalLayout';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'W3Pets',
  description: 'Find Your Perfect Pet Companion',
  icons: {
    icon: '/logo.svg', // Path to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
