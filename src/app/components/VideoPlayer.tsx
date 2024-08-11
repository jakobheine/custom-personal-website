import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
      <video
        src="/videos/jakob_heine.mp4"
        autoPlay
        muted
        playsInline
        style={{ width: '600px', height: 'auto' }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;