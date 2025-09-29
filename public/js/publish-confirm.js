// pages/publish-confirm/publish-confirm.js

async function publishConfirm() {
  if (typeof window === 'undefined' || typeof Package === 'undefined') {
    return; // prevent SSR from running this
  }

  let response = await fetch(
    `https://gatekeeper-arjsstudio.fly.dev/authenticate/${queryDict.code}`
  );
  response = await response.json();

  const pkg = new Package(window.session);
  const pagesUrl = await pkg.serve({
    packageType: 'github',
    token: response.token, // required, must be an OAuth2 token
    message: 'first commit for WebAR!', // optional
  });

  console.log('Published pages URL:', pagesUrl);
}

publishConfirm();
