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
  csvData.sort(compareSecondColumn);
  buildTable();
  };
  //reader.readAsBinaryString(fileInput.files[0]);
  reader.readAsText(fileInput.files[0], 'UTF-16LE');
};
fileInput.addEventListener('change', readFile);

function buildTable() {
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

function toNum(){
  var filler = [];
  for (i = 0; i < length; i++){
    var toPush = Number(numConv[i]);
    filler.push(toPush);
  }
  return filler;
}

function timeCodeConv() {
  for (var i = 0; i < csvData.length - 2; i++){
    var toConv = csvData[i + 1][8];
    toConv = toConv.split(" ");
    var myDate = toConv[0];
    var myTime = toConv[1];
    myDate = myDate.split("/");
    myTime = myTime.split(":");
    length = myDate.length;
    numConv = myDate;
    myDate = toNum(myDate, length);
    length = myTime.length;
    numConv = myTime;
    myTime = toNum(myTime, length);
    csvData[i + 1][7] = serverSideTime(i, myDate, myTime, csvData);
  }
}

function serverSideTime(i, myDate, myTime){
  newDate = myDate[0] + "/" + myDate[1] + "/" + myDate[2] + " " + myTime[0] + ":" + myTime[1] + ":" + myTime[2];
  var toConv = new Date(newDate).getTime();
  return toConv;
}

function compareSecondColumn(a, b) {
    if (a[7] === b[7]) {
        return 0;
    }
    else {
        return (a[7] < b[7]) ? -1 : 1;
    }
}
