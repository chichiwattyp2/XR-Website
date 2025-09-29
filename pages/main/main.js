'use client'; // ✅ forces client-side rendering for this page

import { useEffect } from 'react';

export default function MainPage() {
  useEffect(() => {
    // ✅ Only runs in browser, safe to use window
    if (typeof window !== 'undefined') {
      console.log('Window width:', window.innerWidth);

      // Example: reattach any onclicks you previously defined
      if (window.radioOnclick) {
        // eslint-disable-next-line no-unused-vars
        const radioHandler = window.radioOnclick;
      }

      if (window.anchorOnclick) {
        // eslint-disable-next-line no-unused-vars
        const anchorHandler = window.anchorOnclick;
      }
    }
  }, []);

  return (
    <main>
      <h1>Main Page</h1>
      {/* your actual UI here */}
    </main>
  );
}
