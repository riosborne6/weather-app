var apiKey = `e00ee6e288dda21994e063ac75ea473f`;
var cityName = "San Francisco";

$("#searchBtn").on("click", () => {
  cityName = $("#cityInput").val();
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  $.ajax({
    method: "GET",
    url: apiUrl,
  }).then(function (response) {
    console.log(response);
    let { lat, lon } = response.coord;
    var futureApiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    $.ajax({
      method: "GET",
      url: futureApiurl,
    }).then(function (response) {
      console.log(response);
      let { humidity, temp, uvi, wind_speed } = response.current;
      console.log("hum", humidity);
      var city = cityName;
      var ct = document.querySelector("#city");
      var tp = document.querySelector("#temp");
      var hum = document.querySelector("#hum");
      var wind = document.querySelector("#wind");
      var uv = document.querySelector("#uv");

      ct.textContent = city;
      tp.textContent = temp;
      hum.textContent = humidity;
      wind.textContent = wind_speed;
      uv.textContent = uvi;

      // var current = document.querySelector("#current");
      // var div = document.createElement("div");
      // div.textContent = `HUMIDITY: ${humidity}`;
      // current.appendChild(div);
    });
  });
});

// $.ajax({
//   method: "GET",
// //  url: futureApiurl,
// }).then(function (response) {
//   console.log(response);
// });
