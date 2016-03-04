
$(document).ready(function() {
  $("#submit").click(function convertToFahrenheit(celsius) {
      var temperature = $("#temp").val();
      var fahrenheit = (temperature * 1.8) + 32;
      console.log(fahrenheit)
      updateImage(temperature);
      updateResultMessage(temperature, fahrenheit);
    });
    function updateResultMessage(temperature, fahrenheit){
      if (temperature >= "20") {
        $("#resultMessage").html("<p>" +fahrenheit + "N°C (N°F). That's hot!"+"</p>");
        console.log("OK");
      }
      else {
        $("#resultMessage").html("<p>" +fahrenheit + "N°C (N°F). That's cold!"+"</p>");
      }
    }
    function updateImage(temperature) {
      if (temperature >= "20") {
        $("#weatherImage").attr("src", "images/hot.jpeg");
      }
      else {
        $("#weatherImage").attr("src", "images/cold.jpeg");
      }
    }
});
