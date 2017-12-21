'use strict';

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//document.write('test');

const url.no-cors = 'https://bittrex.com/api/v1.1/public/getmarkets';
fetch(url) // Call the fetch function passing the url of the API as a parameter
.then(function() {
  console.log('test');
    // Your code for handling the data you get from the API
})
.catch(function() {
    // This is where you run code if the server returns any errors
});
