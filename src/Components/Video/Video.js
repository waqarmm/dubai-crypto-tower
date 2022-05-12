import React from "react";

const Video = ({ videoURL, className }) => {
  return (
    <>
      <video
        id="background-video"
        className={`w-full ${className}`}
        loop
        muted
        autoPlay
        playsInline
      >
        <source src={videoURL} type="video/webm" />
        <source src={videoURL} type="video/ogg" />
        <source src={videoURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Video;
