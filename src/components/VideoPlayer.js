import React, { useContext } from "react";
import GlobalContext from "../state/GlobalContext";

const VideoPlayer = () => {
  const { state } = useContext(GlobalContext);
  const { currentVideoSrc } = state;

  const { videoWidth } = state;

  const videoContainerStyle = {
    display: "block",
    margin: "0 auto",
    width: videoWidth,
    height: "50vh",
    marginTop: "3rem",
  };

  return (
    <div className="videoContainer" style={videoContainerStyle}>
      <video
        src={currentVideoSrc}
        width="100%"
        height="100%"
        controls
        autoPlay
      ></video>
    </div>
  );
};

export default VideoPlayer;
