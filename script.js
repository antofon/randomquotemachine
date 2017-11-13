$(document).ready(function() {
  console.log("JavaScript loaded.");
  "use strict";

//   function parseQuote(response) {
//  console.log(response);
//  $("#quote-text").text(response.quoteText);
//   $("#quote-author").text(response.quoteAuthor);
// };
function parseQuote(response)
    {
      document.getElementById("quote-text").innerHTML = response.quoteText;
      document.getElementById("quote-author").innerHTML = response.quoteAuthor;
    }

$("#getQuote").on("click", function(){


  var tag = document.createElement("script");
  tag.src="http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&callback=parseQuote&lang=en";
  document.getElementsByTagName("head")[0].appendChild(tag);

});

  // $.ajax({
  //   url: 'http://api.forismatic.com/api/1.0/?getQuote&key=457653&format=jsonp&jsonp=parseQuote&lang=en',
  //   type: 'GET',
  //   dataType: 'jsonp',
  //   contentType: 'application/javaScript'
  //   // data: {quoteText: 'quoteAuthor'}
  // })
  // .done(function() {
  //   console.log("success");
  // })
  // .fail(function() {
  //   console.log("error");
  // })
  // .always(function() {
  //   console.log("complete");
  // });

  // var xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function() {
  //   if(xhttp.readyState === 4 && xhttp.status == 200) {
  //     console.log("Web server returned and status is OK");
  //     document.getElementById('quote-text').innerHTML = xhttp.responseText;
  //   }
  // };
  // xhttp.open("GET", "ajax_test.txt", true);
  // xhttp.send();
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
