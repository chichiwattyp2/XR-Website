'use client';
import Script from 'next/script';

export default function PublishConfirmPage() {
  return (
    <main>
      <h1>Publish Confirm</h1>
      <Script src="/js/utils.js" strategy="beforeInteractive" />
      <Script src="/js/publish-confirm.js" strategy="afterInteractive" />
    </main>
  );
}
