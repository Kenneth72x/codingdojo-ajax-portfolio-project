$(document).ready(function () {
  $.get(
    "http://api.openweathermap.org/data/2.5/weather?q=los%20angeles&appid=4543eb04eb3e98e64833b81b8ae9876b",
    function (response) {
      console.log(response);
    }
  );
});

var dude = {
  gender: "male",
  height: "tall",
  color: "clear",
};
$("#LAstuff").html(`<p> This dude is ${dude.color} </p>`);
