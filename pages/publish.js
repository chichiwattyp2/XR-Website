'use client';
import Script from 'next/script';

export default function PublishPage() {
  return (
    <main>
      <h1>Publish</h1>
      <Script src="/js/publish.js" strategy="afterInteractive" />
    </main>
  );
}
