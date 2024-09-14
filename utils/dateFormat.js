const addZero = (num) => (num < 10 ? `0${num}` : num);

// Function to format the date
const dateFormat = (timestamp) => {
  const dateObj = new Date(timestamp);
  
  const month = addZero(dateObj.getMonth() + 1); // months are zero-indexed
  const day = addZero(dateObj.getDate());
  const year = dateObj.getFullYear();
  
  const hours = addZero(dateObj.getHours());
  const minutes = addZero(dateObj.getMinutes());
  const seconds = addZero(dateObj.getSeconds());

  return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
};

module.exports = dateFormat;
