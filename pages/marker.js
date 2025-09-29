'use client';
import Script from 'next/script';

export default function MarkerPage() {
  return (
    <main>
      <h1>Marker Export</h1>
      <Script src="/js/marker.js" strategy="afterInteractive" />
    </main>
  );
}
