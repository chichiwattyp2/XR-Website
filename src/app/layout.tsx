import './globals.css';
import { Inter } from 'next/font/google';
import QueryProvider from '../components/providers/QueryProvider';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'XR Website',
  description: 'An XR-powered experience',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* ✅ Wrap the entire app in QueryProvider */}
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
