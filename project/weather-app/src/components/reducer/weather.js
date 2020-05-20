
const initialState = [
  {
    tempMax: 0,
    tempMin: 0,
    weather: "Cloudy",
  },
  {
    tempMax: 0,
    tempMin: 0,
    weather: "Cloudy",
  },
  {
    tempMax: 0,
    tempMin: 0,
    weather: "Cloudy",
  },
  {
    tempMax: 3,
    tempMin: -1,
    weather: "Cloudy",
  },
  {
    tempMax: 0,
    tempMin: 0,
    weather: "Cloudy",
  },
  {
    tempMax: 0,
    tempMin: 0,
    weather: "Cloudy",
  },
  {
    tempMax: 0,
    tempMin: 0,
    weather: "Cloudy",
  },
];

const weatherReducer = (state = initialState, action)=>{
  switch(action.type){
    case "UPDATE":
      let newArray = [...state];
      newArray[action.payload.id] = {
        tempMax: action.payload.tempMax,
        tempMin: action.payload.tempMin,
        weather: action.payload.weather,
      };
      return newArray;
    default:
      return state;
  };
}

export default weatherReducer;

