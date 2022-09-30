// JS Challenge 1
let weather = {};
console.log(weather);

//JS Challenge 2
weather = {
  temperature: 0,
  humidity: 1
};

//JS Challenge 3
console.log(weather.temperature);
console.log(weather.humidity);

//JS Challenge 4
weather.windSpeed = 2;
console.log(weather.windSpeed);

//JS Challenge 5
console.log(weather["windSpeed"]);
console.log(weather["temperature"]);
console.log(weather["humidity"]);

let forecast = [
  { day: "monday", temperature: 3 },
  { day: "tuesday", temperature: 5 },
  { day: "wednesday", temperature: 7 },
  { day: "thursday", temperature: 9 }
];

console.log(forecast[0]["temperature"]);
console.log(forecast[0].temperature);
