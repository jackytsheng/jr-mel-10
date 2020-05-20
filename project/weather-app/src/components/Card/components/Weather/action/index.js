
export const updateWeather = (tempMin, tempMax, weather) => {
         return {
           type: "UPDATE",
           payload: {
             tempMax,
             tempMin,
             weather,
           },
         };
       };