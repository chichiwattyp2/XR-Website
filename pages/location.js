'use client';
import Script from 'next/script';

export default function LocationPage() {
  return (
    <main>
      <h1>Location Export</h1>
      <Script src="/js/location.js" strategy="afterInteractive" />
    </main>
  );
}
