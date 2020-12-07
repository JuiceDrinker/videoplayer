import React, { useContext } from "react";
import globalContext from "../state/GlobalContext";

import ReactTooltip from "react-tooltip";

const Poster = (props) => {
  const { state, dispatch } = useContext(globalContext);
  const { name, description, image, video, total } = props;
  // const imageWidth = parseInt(state.videoWidth) / total  TODO: Dynamic image resize not working

  const handleClick = () => {
    if (state.currentVideoSrc !== video) {
      // As to not reload video, if its already selected by user
      dispatch({
        type: "posterClick",
        payload: video,
      });
    }
  };

  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  };

  const captionStyle = {
    fontWeight: "800",
    fontSize: "1rem",
    marginTop: "0.6rem",
  };

  return (
    <figure style={style}>
      <img
        className="poster"
        data-tip={description}
        src={image}
        alt={description}
        onClick={handleClick}
        // width={imageWidth + "%"} Dynamic images not working
      />
      <figcaption style={captionStyle}> {name} </figcaption>
      <ReactTooltip className="tooltip" arrowColor="white" />
    </figure>
  );
};

export default Poster;
