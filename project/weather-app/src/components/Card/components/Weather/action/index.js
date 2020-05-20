
export const updateWeater = (tempMax, tempMin, weather) => {
         return {
           type: "UPDATE",
           payload: {
             tempMax,
             tempMin,
             weather,
           },
         };
       };