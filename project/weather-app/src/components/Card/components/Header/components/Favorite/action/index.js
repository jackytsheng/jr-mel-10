export const saveLocation=(location,tempMax,tempMin,weather)=>{
  return {
    type: "SAVE_LOCATION",
    payload: {
      id:JSON.stringify(Date.now()),
      location,
      tempMax,
      tempMin,
      weather,
    }
  } 
}
export const deleteLocation = (id) => {
  return {
    type: "DELETE_LOCATION",
    payload: {id},
  }
};