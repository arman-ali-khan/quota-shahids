import React from 'react';

const MapComponent = ({ address }) => {
  const generateEmbedUrl = (address) => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/embed/v1/place?q=${encodedAddress}&key=YOUR_API_KEY`;
  };

  return (
    <div>
      <iframe
        width="600"
        height="450"
        frameborder="0"
        style={{ border: 0 }}
        src={generateEmbedUrl(address)}
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default MapComponent;
