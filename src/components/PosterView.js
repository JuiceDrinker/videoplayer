import React from "react";
import data from "../data";
import Poster from "./Poster";

const PosterView = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    border: "1px solid red",
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
          />
        );
      })}
    </div>
  );
};
export default PosterView;
