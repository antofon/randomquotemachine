$(document).ready(function() {
  console.log("JavaScript loaded.");
  "use strict";


  $.ajax({url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=displayQuote&lang=en', type: 'GET', dataType: 'jsonp'})


  $("#getQuote").click(function() {
    //perform AJAX request, configure by passing through key-value pairs
    $.ajax({url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=displayQuote&lang=en', type: 'GET', dataType: 'jsonp'})
  });
});
