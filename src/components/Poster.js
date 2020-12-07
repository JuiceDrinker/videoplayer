import React, { useContext } from "react";
import globalContext from "../state/GlobalContext";

const Poster = (props) => {
  const { state, dispatch } = useContext(globalContext);
  const { name, description, image, video } = props;

  const handleClick = () => {
    console.log(state);
    dispatch({
      type: "posterClick",
      payload: video,
    });
  };

  return (
    <div>
      <img src={image} alt="" srcset="" onClick={handleClick} />
      {name}
    </div>
  );
};

export default Poster;
