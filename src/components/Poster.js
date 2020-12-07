import { findByLabelText } from "@testing-library/react";
import React, { useContext } from "react";
import ReactTooltip from "react-tooltip";
import globalContext from "../state/GlobalContext";

const Poster = (props) => {
  const { state, dispatch } = useContext(globalContext);
  const { name, description, image, video } = props;
  const { videoWidth } = state;

  const imageWidth = parseInt(videoWidth) / 4;
  const handleClick = () => {
    console.log(imageWidth);
    dispatch({
      type: "posterClick",
      payload: video,
    });
  };

  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  };

  return (
    <div style={style}>
      <img data-tip={description} src={image} alt="" onClick={handleClick} />
      {name}
      <ReactTooltip />
    </div>
  );
};

export default Poster;
