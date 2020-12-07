const globalReducer = (state, action) => {
  switch (action.type) {
    case "posterClick":
      return {
        ...state,
        currentVideoSrc: action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
