//var data = []

$.getJSON('assets/docs/markets.json')
.then(data => console.log(
  data.result[0],
  data.result[1],
  data.result[2]
))


// bittrex.getmarketsummaries( function( data, err ) {
//   if (err) {
//     return console.error(err);
//   }
//   for( var i in data.result ) {
//     bittrex.getticker( { market : data.result[i].MarketName }, function( ticker ) {
//       console.log( ticker );
//     });
//   }
// });

// function logResults(json){
//   console.log(json);
// }
//
// $.ajax({
//   url: "https://bittrex.com/api/v1.1/public/getmarkets?format=json",
//   dataType: "jsonp",
//   jsonpCallback: "logResults"
// });


// $.getJSON(
//   "https://bittrex.com/api/v1.1/public/getmarkets?format=json",
//   function(json) { console.log(json); }
// );


// $.getJSON("https://bittrex.com/api/v1.1/public/getmarkets?format=json", function(result){
//     $.each(result, function(i, field){
//         $("div").append(field + " ");
//     });
// });

// $.getJSON( "https://bittrex.com/api/v1.1/public/getmarkets?format=json", function( data ) {
//   var items = [];
//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val + "</li>" );
//   });
//
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "body" );
// });


// var getJSON = function(url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.responseType = 'json';
//     xhr.onload = function() {
//       var status = xhr.status;
//       if (status === 200) {
//         callback(null, xhr.response);
//       } else {
//         callback(status, xhr.response);
//       }
//     };
//     xhr.send();
// };
//
// $.getJSON('https://bittrex.com/api/v1.1/public/getmarkets?format=json',
// function(err, data) {
//   if (err !== null) {
//     alert('Something went wrong: ' + err);
//   } else {
//     alert('Your query count: ' + data.query.count);
//   }
// });


// let url = 'https://bittrex.com/api/v1.1/public/getmarkets?format=json';
//
// fetch(url)
// .then(res => res.jsonp())
// .then((out) => {
//   console.log('Checkout this JSON! ', out);
// })
// .catch(err => { throw err });

// const url.no-cors = 'https://bittrex.com/api/v1.1/public/getmarkets';
// fetch(url) // Call the fetch function passing the url of the API as a parameter
// .then(function() {
//   console.log('test');
//     // Your code for handling the data you get from the API
// })
// .catch(function() {
//     // This is where you run code if the server returns any errors
// });


//https://bittrex.com/api/v1.1/public/getmarkets?format=json
// function setup(){
//   loadJSON("https://bittrex.com/api/v1.1/public/getmarkets", gotData, 'jsonp');
// };
//
// function gotData(data) {
//   printIn(data);
// };
//
// function draw() {
//
// };
