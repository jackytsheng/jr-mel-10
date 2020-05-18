const locationReducer = (state = "melbourne",action) => {
  switch(action.type){
    case "CHANGE":
      return action.payload;
    default:
      return state;
  }
}

export default locationReducer;