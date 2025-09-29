// src/app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'XR Website',
  description: 'An XR-powered experience',
  icons: {
    icon: '/favicon.png',   // ✅ switched from .ico to .png
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
