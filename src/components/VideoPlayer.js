import React, { useContext } from "react";
import GlobalContext from "../state/GlobalContext";

const VideoPlayer = () => {
  const { state } = useContext(GlobalContext);
  const { currentVideoSrc } = state;
  return (
    <div>
      <video
        src={currentVideoSrc}
        width="480"
        height="360"
        controls
        autoPlay
      ></video>
    </div>
  );
};

export default VideoPlayer;
