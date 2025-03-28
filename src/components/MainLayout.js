"use client"; // This file is a client component

import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
