const API_KEY = "5f961a4ccf1aac8fa74ef5c5b92f4fd2";
const makeIconURL=(iconID)=>`http://openweathermap.org/img/w/${iconID}.png`
const getWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);
  const {
    weather,
    main: {temp, temp_min, temp_max, humidity },
    sys: { country },
    name,
  } = data;
  const { description, icon } = weather[0];
  return {
    description,
    temp,
    temp_max,
    temp_min,
    humidity,
    name,
    iconURL:makeIconURL(icon),
    country,
  };
};
export { getWeatherData };
