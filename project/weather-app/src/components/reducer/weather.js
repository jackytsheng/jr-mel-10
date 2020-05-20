
const fetchData = () => {
  const getData = async () => {
    let res = await fetch(
      "https://community-open-weather-map.p.rapidapi.com/forecast?q=heathmont&units=metric",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "e5c291fe26mshbc022f74aa64e54p14f06djsnb50329cc398f",
        },
      }
    ).catch((err) => {
      console.log(err);
    });
    console.log(res.json());
  };
  return getData();
};

fetchData();


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

