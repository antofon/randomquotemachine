$(document).ready(function() {
  console.log("JavaScript loaded.");
  "use strict";


//   function parseQuote(response) {
//  console.log(response);
//  $("#quote-text").text(response.quoteText);
//   $("#quote-author").text(response.quoteAuthor);
// };
// var tag = document.createElement("script");
// tag.src="http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&callback=parseQuote&lang=en";
// document.getElementsByTagName("head")[0].appendChild(tag);
// var quoteHTML;
// var forismaticAPI;
// var quoteCopy;
// var quoteOptions;

// application/javascript
// $("#getQuote").click(function () {
  // var forismaticAPI = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=displayQuote&lang=en";
  // // function displayQuote(response) {
  // //     console.log(response.quoteText);
  // // }
  // // $.$.getJSON('/path/to/file', {param1: 'value1'}, function(json, textStatus) {
  // //     /*optional stuff to do after success */
  // // });
  // $.getJSON(forismaticAPI, function displayQuote (response){
  //   JSON.parse(response);
  //   alert(response);
  // });

  $("#getQuote").click(function () {
  $.ajax({
    url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=displayQuote&lang=en',
    type: 'GET',
    dataType: 'jsonp',
    // data: {param1: 'value1'}
  })
});



//});

// var xhr = new XMLHttpRequest();
// var url = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=displayQuote&lang=en";
//
// xhr.open('GET', url, true);
// // xhr.setRequestHeader("Access-Control-Allow-Origin", "http://127.0.0.1:3000/");
// xhr.setRequestHeader("content-type", "application/json");
//
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200){
//     var jsonContent = JSON.parse(xhr.responseText);
//     console.log(jsonContent);
// //     document.getElementById("getQuote").click(function(){
// // displayQuote();
// //     });
//   }
//
//   // function displayQuote () {
//   //
//   //
//   // }
// }
//
// xhr.send();



// function displayQuote(response) {
//   $("#quote-text").innerHTML = response.quoteText;
//     $("#quote-author").innerHTML = response.quoteAuthor;
//   };
//
//   $.getJSON(forismaticAPI, displayQuote);
//
// });
//   function displayQuote(response) {
//
//       quoteHTML = "<p class='text-left' id='quote-text'>";
//       $.each(response.quoteText, function(index, quote) {
//         quoteHTML += "<span id='left-quote'>&ldquo;</span>"
//         quoteHTML += quote.quoteLink;
//       });
//
//         // $("#quote-text").text(response.quoteText);
//         // $("#quote-author").text(response.quoteAuthor);
//   }
// quoteHTML += "</p>";
//   $.getJSON(forismaticAPI, quoteOptions, displayQuote);
  // var quoteOptions = {
  //
  //       format: "json"
  // };






//helpful code for API
// $(document).ready(function () {
//   $('button').click(function() {
//     $("button").removeClass("selected");
//     $(this).addClass("selected");
//     var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//     var animal = $(this).text();
//     var flickrOptions = {
//       tags: animal,
//       format: "json"
//     };
//
//     function displayPhotos(data) {
//       var photoHTML = '<ul>';
//       $.each(data.items, function(i, photo) {
//         photoHTML += '<li class="grid-25 tablet-grid-50">';
//         photoHTML += '<a href="' + photo.link + '" class="image">';
//         photoHTML += ' <img src="' + photo.media.m + '"></a></li>';
//
//       });
//       photoHTML += '</ul>';
//       $('#photos').html(photoHTML);
//     }
//     $.getJSON(flickerAPI, flickrOptions, displayPhotos);
//
//   });
//
//  });//end ready


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
