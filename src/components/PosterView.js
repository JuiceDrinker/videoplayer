import React from "react";
import data from "../data";
import Poster from "./Poster";

const PosterView = () => {
  return (
    <div>
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
