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