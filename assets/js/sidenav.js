'use strict';

/* Set the width of the side navigation to 250px */

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};

function generateNavLinks(){
  document.write('<a href="#">Link 1</a>');
  document.write('<a href="#">Link 2</a>');
  document.write('<a href="#">Link 3</a>');
  document.write('<a href="#">Link 4</a>');
  document.write('<a href="#">Link 5</a>');
  document.write('<a href="#">Link 6</a>');
};

generateNavLinks();
