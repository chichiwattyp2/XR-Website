// pages/location/location.js

// create the package (renamed to pkg)
const pkg = new Package({
  arType: 'location',
  assetType: window.assetType, // image/audio/video/3d
  assetFile: window.assetFile,
  assetParam: window.assetParam
});

pkg.serve({ packageType: 'zip' }).then((base64) => {
  const link = document.createElement('a');
  link.href = `data:application/zip;base64,${base64}`;
  link.download = 'ar.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
