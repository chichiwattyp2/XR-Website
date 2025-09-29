// pages/marker/marker.js

// Assuming markerPattern is already defined earlier
new Package({
  arType: 'marker',
  assetType: window.assetType,
  assetFile: window.assetFile,
  assetParam: window.assetParam,
  markerPatt: markerPattern
})
  .serve({ packageType: 'zip' }) // renamed variable usage
  .then((base64) => {
    const link = document.createElement('a');
    link.href = `data:application/zip;base64,${base64}`;
    link.download = 'ar.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
