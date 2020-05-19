let date = new Date();
// sun: 0, mon: 1
let today = date.getDay();
let todate = date.getDate();
// Jan: 1, Dec: 12
let month = date.getMonth();
let year = date.getFullYear();

// no action needed
const dateReducer = () => {
  return {
    todate,
    today,
    month,
    year,
  };
};

export default dateReducer;
