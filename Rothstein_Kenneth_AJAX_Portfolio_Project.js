$(document).ready(function () {
  var apiKey = "4543eb04eb3e98e64833b81b8ae9876b";

  $("form").submit(function () {
    var city = $("#city").val();
    var cityString = `${city}`;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityString}&appid=${apiKey}&units=imperial`;

    $.get(
      url,
      function (res) {
        console.log(res);
        var htmlString = `<h1>${cityString}</h1><p>Temperature: ${res.main.temp}&#8457;</p>`;
        htmlString += `<p>Description: ${res.weather[0].description}</p><p>Wind Speed: ${res.wind.speed} mph</p>`;
        $("#forecast").html(htmlString);
      },
      "json"
    );
    return false;
  });
});
