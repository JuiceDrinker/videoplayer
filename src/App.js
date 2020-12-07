import "./App.css";
import React, { useReducer, useEffect } from "react";

import GlobalContext from './state/GlobalContext'
import initialState from './state/initialState'
import VideoPlayer from "./components/VideoPlayer";
import Posters from "./components/Posters";
import globalReducer from "./globalReducer";
function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value ={{state, dispatch}}>
      <div className="App">
        <VideoPlayer />
        <Posters />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
