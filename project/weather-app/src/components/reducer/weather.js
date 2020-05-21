 
const initialState = [
  {
    tempMax: 20.3,
    tempMin: 13.5,
    weather: "Clear",
  },
  {
    tempMax: 12.5,
    tempMin: 5,
    weather: "Clouds",
  },
  {
    tempMax: 12.3,
    tempMin: 4.7,
    weather: "Rain",
  },
  {
    tempMax: 15.4,
    tempMin: 6.3,
    weather: "Snow",
  },
  {
    tempMax: 23.5,
    tempMin: 13.4,
    weather: "Drizzle",
  },
  {
    tempMax: 14,
    tempMin: 9,
    weather: "Thunderstorm",
  },
  {
    tempMax: 15,
    tempMin: 10,
    weather: "Clear",
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

