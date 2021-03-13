var apiKey = `e00ee6e288dda21994e063ac75ea473f`;
var cityName = "San Francisco";
var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
var futureApiurl = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=${apiKey}`;

$.ajax({
  method: "GET",
  url: apiUrl,
}).then(function (response) {
  console.log(response);
  $.ajax({
    method: "GET",
    url: futureApiurl,
  }).then(function (response) {
    console.log(response);
  });
});

$.ajax({
  method: "GET",
  url: futureApiurl,
}).then(function (response) {
  console.log(response);
});
