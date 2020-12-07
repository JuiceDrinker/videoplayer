import React, { useContext } from "react";
import GlobalContext from "../state/GlobalContext";

import data from "../data";
import Poster from "./Poster";

const PosterView = () => {
  const { state } = useContext(GlobalContext);
  const { videoWidth } = state;

  const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 auto",
    width: videoWidth,
    marginTop: "1rem",
  };

  return (
    <div style={style}>
      {data.map((poster) => {
        const { id, name, description, image, video } = poster;
        return (
          <Poster
            key={id}
            {...{ name, description, image, video }}
            // total={data.length}
          />
        );
      })}
    </div>
  );
};
export default PosterView;
