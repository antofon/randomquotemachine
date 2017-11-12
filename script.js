$(document).ready(function() {
  console.log("JavaScript loaded.");
  "use strict";
$("#getQuote").on("click", function(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(xhttp.readyState === 4 && xhttp.status == 200) {
      console.log("Web server returned and status is OK");
      document.getElementById('quote').innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "ajax_test.txt", true);
  xhttp.send();
});
  // $("#getQuote").on("click", function(){
  //   $.getJSON('http://api.forismatic.com/api/1.0/', function(json, textStatus) {
  //       var html = "";
  //
  //       json.forEach(function(val) {
  //         var keys = Object.keys(val);
  //         html += "<div class='quote'>";
  //         keys.forEach(function(key) {
  //           html += "<p>" + key + "</p>:" + val[key] + "<br>";
  //         });
  //         html += "</div><br>";
  //       });
  //       $(".quote-copy").html(html);
  //   });
  // });

});
