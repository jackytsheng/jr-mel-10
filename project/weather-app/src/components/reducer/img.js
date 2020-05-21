
const initialLink = "https://static.travelweekly.com/i/sized/780/437/media.iceportal.com/95289/photos/62976060_XL.jpg"

const imgReducer = (state = initialLink, action) => {
  switch (action.type) {
    case "UPDATE_IMG":
      return action.payload;
    default:
      return state;
  }
};

export default imgReducer;