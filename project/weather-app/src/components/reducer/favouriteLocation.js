const initialState = [];

const favouriteLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_LOCATION":
      let newArray= [...state];
      newArray.unshift({
        id: action.payload.id,
        location: action.payload.location,
        tempMax: action.payload.tempMax,
        tempMin: action.payload.tempMin,
        weather: action.payload.weather,
      });
      return newArray;

    case "DELETE_LOCATION":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default favouriteLocationReducer;
