export const changeLocation = (event,location) => {
  event.preventDefault();
    return {
      type: "CHANGE",
      payload: location,
    };
}

export const typing = (event) => {
  return {
    type: "TYPING",
    payload: event.target.value.trim(),
  };
};

//API KEY 59f50906ffa57b3737627dd27793aedc
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
let date = new Date();

export const updateWeather = (currentLocation) => (dispatch) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${currentLocation}&appid=59f50906ffa57b3737627dd27793aedc`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: "UPDATE",
        payload: {
          id: date.getDay(),
          tempMin: data.main.temp_min,
          tempMax: data.main.temp_max,
          weather: data.weather[0].main,
        },
      });
      console.log(data.main.temp_min, data.main.temp_max, data.weather[0].main);
    })
    .catch((err) => {
      console.log(err);
    });
};


//https://www.googleapis.com/customsearch/v1?key=AIzaSyCsZ6x_-j2ltEgTOZlcdDmI1jEKSqY27gE&cx=010729018410505568531:iluybomzdjt&q=melbourne&searchType=image&imgDominantColor=purple&imgSize=large&num=5
export const updateImg = (location) => (dispatch) => {
  fetch(
    `https://www.googleapis.com/customsearch/v1?key=AIzaSyCsZ6x_-j2ltEgTOZlcdDmI1jEKSqY27gE&cx=010729018410505568531:iluybomzdjt&q=${location}&searchType=image&imgSize=large&num=5`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((result) => {
      dispatch({
        type: "UPDATE_IMG",
        payload:  result.items[0].link,
      });
      console.log(result.items[0].link);
    })
    .catch((err) => {
      console.log(err);
    });
};