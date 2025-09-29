// pages/marker/marker.js

if (typeof window !== 'undefined' && typeof Package !== 'undefined') {
  new Package({
    arType: 'marker',
    assetType: window.assetType,
    assetFile: window.assetFile,
    assetParam: window.assetParam,
    markerPatt: markerPattern, // assumes markerPattern is set earlier
  })
    .serve({ packageType: 'zip' })
    .then((base64) => {
      const link = document.createElement('a');
      link.href = `data:application/zip;base64,${base64}`;
      link.download = 'ar.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
}
