
export const updateWeather = (currentLocation) => (dispatch) => {
  fetch(
    `https://community-open-weather-map.p.rapidapi.com/weather?&units=metric&q=${currentLocation}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "e5c291fe26mshbc022f74aa64e54p14f06djsnb50329cc398f",
      },
    }
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: "UPDATE",
        payload: {
          tempMin: data.main.temp_min,
          tempMax: data.main.temp_max,
          weather: data.weather[0].main,
        },
      })
    )
    .catch((err) => {
      console.log(err);
    });
};
