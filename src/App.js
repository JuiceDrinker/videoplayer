import "./App.css";
import React, { useReducer } from "react";

//Context API
import GlobalContext from "./state/GlobalContext";
import initialState from "./state/initialState";
import globalReducer from "./globalReducer";

//Components
import VideoPlayer from "./components/VideoPlayer";
import PosterView from "./components/PosterView";
function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState); // As this is quite simple could consider just passing callbacks instead of setting up Context API

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <VideoPlayer />
        <PosterView />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
