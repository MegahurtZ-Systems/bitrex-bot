var fileInput = document.getElementById('csv');
var csvData = [];//Raw CSV data
var convertedData = [];
var userTimeZone = "EST";
var length;
var numConv;
var month = [1,2,3,4,5,6,7,8,9,10,11,12];
var day = [31,28,31,30,31,30,31,31,30,31,30,31];
/*need to convert array in csvData to an object in convertedData
"OrderUuid", "Exchange", "Type", "Quantity", "Limit", "CommissionPaid", "Price", "Opened", "Closed"
arrage data by Exchange, Type, then Closed.
*/

readFile = function(csv){
  csvData.length = 0;//emptys array data when new file is selected.
  //var elem = document.getElementsByClassName("market-data");//part one of deleting the total row
  //var elem = document.getElementById("tradeData");//part one of deleting the total row
  //elem.parentElement.removeChild(elem);//part Two of deleting the total row
  var reader = new FileReader();
  reader.onload = function(){
    var csv = event.target.result;
    var allTextLines = csv.split(/\r\n|\n/);
    for (var i = 0; i < allTextLines.length; i++){
      var data = allTextLines[i].split(',');
      var tarr = [];
      for (var j = 0; j < data.length; j++){
        tarr.push(data[j]);
      }
      csvData.push(tarr);
    }
  timeCodeConv(csvData);
  printTableHeader();
  csvData.sort(); //initial Name Sort
  csvData.sort(compareSecondColumn); //initial number sort by 7
  buildTable();
  };
  //reader.readAsBinaryString(fileInput.files[0]);
  reader.readAsText(fileInput.files[0], 'UTF-16LE');
};
fileInput.addEventListener('change', readFile);

function buildTable() {
  buildButtons();
  for (var j = 0; j < csvData.length; j++){
    var trEl = document.createElement('tr'); //creates table div.
    var coin = csvData[j][1];
    trEl.setAttribute("class", coin);// gives created row an Class.
    trEl.className = coin;
    for (var k = 1; k < csvData[j].length; k++){
      var rowData = [];
      var tdEl = document.createElement('td'); //creates table data.
      rowData = csvData[j];
      tdEl.textContent = rowData[k];
      trEl.appendChild(tdEl);
      tradeData.appendChild(trEl);
    }
  }
  event.preventDefault();
};

function destroyTable() {
  debugger;
  //var elem = document.getElementsByClassName("market-data");//part one of deleting the total row
  //elem.parentElement.removeChild(elem);//part Two of deleting the total row
  $("#table-filters>tr>td.active").removeClass("market-data");
};

function toNum(){ //converts the data into number vs a string for later coversion
  var filler = []; //empty array to push later
  for (i = 0; i < length; i++){
    var toPush = Number(numConv[i]); //converts the element into a number
    filler.push(toPush); //pushes the element to filler array
  }
  return filler; //returns filler elements back into myTime or myDate for later convertions into serverside time code
}

function timeCodeConv() { //to convert the date and time to serverside time stamp for later sorting
  for (var i = 0; i < csvData.length - 2; i++){
    var toConv = csvData[i + 1][8]; //pulls the 8th element of csvData for the current line
    toConv = toConv.split(" "); //splits the element by the space, splits it into 2 elements to go into 2 seperate arrays
    var myDate = toConv[0]; //puts Date stamp into var
    var myTime = toConv[1]; //puts Time stamp into var
    myDate = myDate.split("/"); //splits the date into 3 seperate elements to convert into number later
    myTime = myTime.split(":"); //splits the time into 3 seperate elements to convert into number later
    length = myDate.length;
    numConv = myDate; //sends date to a var to convert into numbers vs strings
    myDate = toNum(myDate, length); //sends date to be converted into numbers
    length = myTime.length;
    numConv = myTime; //sends time to a var to convert into numbers vs string
    myTime = toNum(myTime, length); //sends time to be converted into numbers
    csvData[i + 1][7] = serverSideTime(i, myDate, myTime, csvData); //places the converted variables serverside number to the 7th element of csvData
  }
}

function serverSideTime(i, myDate, myTime){ //created the Serverside time code of the closed date and time.
  newDate = myDate[0] + "/" + myDate[1] + "/" + myDate[2] + " " + myTime[0] + ":" + myTime[1] + ":" + myTime[2]; //combines all the data togetheras a timestamp
  var toConv = new Date(newDate).getTime(); //inputs the serverside timestamp to return to the csvData column 7
  return toConv; //returns the Serverside Timestamp to column 7 of csvData replacing the opened date and time.
}

function compareSecondColumn(a, b) { //sorts the csvData array by the 7th column
    if (a[7] === b[7]) {
        return 0;
    }
    else {
        return (a[7] < b[7]) ? -1 : 1;
    }
}
function printTableHeader(){ //to print the TH to the DOM
  var tradeData = document.getElementById('tradeData');
  var trEl = document.createElement('tr'); //creates table div.
  trEl.setAttribute("class","market-data");// gives created row an Class.
  for(var i = 1; i < csvData[0].length; i++){
    var thEl = document.createElement('th'); //creates top table row.
    thEl.textContent = csvData[0][i];
    trEl.appendChild(thEl);
  }
  tradeData.appendChild(trEl);
  for (var i = 0; i < csvData[0].length; i++){ //remove the first element in the array with nothing so it does not sort the header into csvData
    csvData[i] = "";
  }
  // csvData.splice(0,1);
}

function buildButtons(){
  var button = []; //to have the classNames for buttons later
  var check; //for bool value eval
  for (var i = 0; i < csvData.length; i++){
    var buttonName = csvData[i][1]; //sends market to variable
    check = button.includes(buttonName); //checks button array for current market
    if (check === false){ //pushes market Name if name does not exist
      button.push(buttonName);
    }
  }
  button.sort(); //sorts the market buttons by name
  var pageButton = document.getElementById("button"); //gets the button div to add button to
  var div = document.createElement("div"); //creates div for each button
  for (var i = 0; i < button.length; i++){
    var butEl = document.createElement("button"); //creates the button
    butEl.setAttribute("class", button[i]); //sets class to the div with the market name
    butEl.textContent = button[i]; //gives the button the market name
    pageButton.appendChild(butEl); //sends the created button to the dom
  }
}

//working filter for markets

// $(window).click(function(e) {
//   if (e == td){
//     e = event.target;
//     var className = e.className;
//     if (e.style.display === "none") {
//         tr.style.display = "inline";
//     } else {
//         tr.style.display = "none";
//     }
//   }
// })
