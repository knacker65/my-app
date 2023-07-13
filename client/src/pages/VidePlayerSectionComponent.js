import React from 'react';
import ReactPlayer from 'react-player';

export default function VideoPlayerSection() {
  return (
    <section className="h-screen bg-black">
      <div className="relative h-full">
        <ReactPlayer
          url="https://vimeo.com/811965417"
          width="100%"
          height="100%"
          playing={true}
          loop={true}
          muted={true}
          playsInline={true}
        />
      </div>
    </section>
  );
}
