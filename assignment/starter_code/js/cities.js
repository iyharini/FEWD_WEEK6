$(document).ready(function() {
/* Storing city names in array */
  var city = ["NYC", "SF", "LA", "ATX", "SYD"];
  /* Using loop to append array items to dropdown */
  for (var i = 0; i < city.length; i++) {
    $("#city-type").append("<option>" + city[i] + "</option>");
  }
  /* Storing value of input upon change of dropdown selection*/
  $("#city-type").change(function(e) {
    var cityvalue = $("#city-type").val();
    /*console.log(cityvalue);*/
    /* Using conditional to check if input is NYC*/
    if (cityvalue == "NYC") {
      /* Changing the background attribute of body based on user selection */
      $("body").attr("style", "background: url('images/nyc.jpg')");
    }
        /* Using conditional to check if input is SF*/
    if (cityvalue == "SF") {
      /* Changing the background attribute of body based on user selection */
      $("body").attr("style", "background: url('images/sf.jpg')");
    }
        /* Using conditional to check if input is LA*/
    if (cityvalue == "LA") {
      /* Changing the background attribute of body based on user selection */
      $("body").attr("style", "background: url('images/la.jpg')");
    }
        /* Using conditional to check if input is ATX*/
    if (cityvalue == "ATX") {
      /* Changing the background attribute of body based on user selection */
      $("body").attr("style", "background: url('images/austin.jpg')");
    }
        /* Using conditional to check if input is SYD*/
    if (cityvalue == "SYD") {
      /* Changing the background attribute of body based on user selection */
      $("body").attr("style", "background: url('images/sydney.jpg')");
    }
        /* Conditional for default so that background will apply if input changed to Select a City, */
    if (cityvalue == "Select a City") {
      /* Changing the background attribute of body based on user selection */
      $("body").attr("style", "background: url('images/citipix_skyline.jpg')");
    }
  });
});
