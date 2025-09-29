// public/js/utils.js

/**
 * Utility to create a package and serve it as a downloadable ZIP.
 * @param {Object} options - Options passed into new Package()
 * @param {string} options.arType - e.g. "location" or "marker"
 * @param {string} options.assetType - image/audio/video/3d
 * @param {string} options.assetFile - file path
 * @param {string} options.assetParam - optional parameters
 * @param {string} [options.markerPatt] - marker pattern (only for marker AR)
 */
function servePackage(options) {
  if (typeof window === 'undefined' || typeof Package === 'undefined') {
    console.warn('Package not available (SSR or missing global).');
    return;
  }

  const pkg = new Package(options);

  pkg.serve({ packageType: 'zip' }).then((base64) => {
    const link = document.createElement('a');
    link.href = `data:application/zip;base64,${base64}`;
    link.download = 'ar.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

/**
 * Utility to publish to GitHub (used by publish-confirm.js)
 */
async function publishToGitHub(session, code) {
  if (typeof window === 'undefined' || typeof Package === 'undefined') {
    console.warn('Package not available (SSR or missing global).');
    return;
  }

  let response = await fetch(`https://gatekeeper-arjsstudio.fly.dev/authenticate/${code}`);
  response = await response.json();

  const pkg = new Package(session);
  const pagesUrl = await pkg.serve({
    packageType: 'github',
    token: response.token, // OAuth2 token required
    message: 'first commit for WebAR!',
  });

  console.log('Published pages URL:', pagesUrl);
  return pagesUrl;
}
