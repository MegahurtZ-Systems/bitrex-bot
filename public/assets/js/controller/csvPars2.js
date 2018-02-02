var fileInput = document.getElementById('csv');
var csvData = [];//Raw CSV data
var convertedData = [];
var userTimeZone = "EST";
var length;
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
    //debugger;
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
  timeCodeConv();
  buildTable();
  };
  //reader.readAsBinaryString(fileInput.files[0]);
  reader.readAsText(fileInput.files[0], 'UTF-16LE');
};
fileInput.addEventListener('change', readFile);

function buildTable() {
  //debugger;
  var tradeData = document.getElementById('tradeData');
  var trEl = document.createElement('tr'); //creates table div.
  trEl.setAttribute("class","market-data");// gives created row an Class.
  for(var i = 1; i < csvData[0].length; i++){
    var thEl = document.createElement('th'); //creates top table row.
    thEl.textContent = csvData[0][i];
    trEl.appendChild(thEl);
  }
  tradeData.appendChild(trEl);
  for (var j = 1; j < csvData.length; j++){
    var trEl = document.createElement('tr'); //creates table div.
    trEl.setAttribute("class","market-data");// gives created row an Class.
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

function timeConv() {
  toConv = toConv.split(" ");
  var myDate = toConv[0];
  myDate = myDate.split("/");
  var myTime = toConv[1];
  myTime = myTime.split(":");
  length = myTime.length;
  toNum(length);
  switch(userTimeZone) {
    case "HST": myTime[0] += 10; console.log(myTime); break;
    case "AKST": myTime[0] += 9; console.log(myTime); break;
    case "PST": myTime[0] += 8; console.log(myTime); break;
    case "MST": myTime[0] += 7; console.log(myTime); break;
    case "CST": myTime[0] += 6; console.log(myTime); break;
    case "EST": myTime[0] += 5; console.log(myTime); break;
  }
  myTime += danConv;
  if (myTime >= 24){

  }
}

function toNum(){
  for (i = 0; i < length; i++){
    myTime[i] = Number(myTime[i]);
  }
}

function timeCodeConv() {
  for (i = 0; i < csvData.length; i++){
    var test = csvData[i][8];
    var danConv;
    if (test.includes(" AM") === true){
      danConv = 0;
      timeConv(danConv);
    } else {
      danConv = 12;
      timeConv(danConv);
    };
  };
}

// var test = new Date().getTime();
