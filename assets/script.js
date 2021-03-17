var apiKey = `e00ee6e288dda21994e063ac75ea473f`;
var cityName = "San Francisco";
var cities = [];
console.log(cities);

$("#searchBtn").on("click", () => {
  cityName = $("#cityInput").val();
  cities.push(cityName);
  localStorage.setItem("pastCities", JSON.stringify(cities));
  var pastCities = JSON.parse(localStorage.getItem("pastCities"));
  console.log(pastCities);
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;
  $.ajax({
    method: "GET",
    url: apiUrl,
  }).then(function (response) {
    console.log(response);
    let { lat, lon } = response.coord;
    var futureApiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    $.ajax({
      method: "GET",
      url: futureApiurl,
    }).then(function (response) {
      console.log(response);
      var date = new Date(response.current.dt);
      console.log(date);
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
  var previousCitieselement = $("#previousCities");
  previousCitieselement.empty();
  for (let i = 0; i < pastCities.length; i++) {
    previousCitieselement.prepend(
      `<li><button id=${pastCities}>${pastCities[i]}</button></li>`
    );
    console.log(pastCities[i]);
  }
});
// $.ajax({
//   method: "GET",
// //  url: futureApiurl,
// }).then(function (response) {
//   console.log(response);
// });
