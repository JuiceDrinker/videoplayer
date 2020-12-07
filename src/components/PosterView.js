import React, { useContext } from "react";
import data from "../data";
import GlobalContext from "../state/GlobalContext";
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
        return (
          <Poster
            name={poster.name}
            description={poster.description}
            image={poster.image}
            video={poster.video}
            total={data.length}
          />
        );
      })}
    </div>
  );
};
export default PosterView;
