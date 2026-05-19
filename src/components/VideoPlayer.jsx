const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video
        autoplay
        muted
        loop
        webkit-playsinline
        controls
        class="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/jasond/video/upload/v1769963776/4389357-uhd_3840_2024_30fps_lyenee.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};


export default VideoPlayer;
