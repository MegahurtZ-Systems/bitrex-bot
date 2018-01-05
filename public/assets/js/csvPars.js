var fileInput = document.getElementById('csv');
var fileData = [];

readFile = function(csv){
  fileData.length = 0;
  var elem = document.getElementsByClassName("market-data");//part one of deleting the total row
  //var elem = document.getElementById("tradeData");//part one of deleting the total row
  //elem.parentElement.removeChild(elem);//part Two of deleting the total row
  // $("#table-filters>tr>td.active").removeClass("market-data");
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
      fileData.push(tarr);
    }
  console.log(fileData);
  buildTable();
  };
  reader.readAsBinaryString(fileInput.files[0]);
};
fileInput.addEventListener('change', readFile);

function buildTable() {
  //debugger;
  var tradeData = document.getElementById('tradeData');
  var trEl = document.createElement('tr'); //creates table div.
  trEl.setAttribute("class","market-data");// gives created row an Class.
  for(var i = 0; i < fileData[0].length - 1; i++){
    var thEl = document.createElement('th'); //creates top table row.
    thEl.textContent = fileData[0][i];
    trEl.appendChild(thEl);
  }
  tradeData.appendChild(trEl);
  for (var j = 1; j < fileData.length; j++){
    var trEl = document.createElement('tr'); //creates table div.
    trEl.setAttribute("class","market-data");// gives created row an Class.
    for (var k = 0; k < fileData[j].length - 1; k++){
      var rowData = [];
      var tdEl = document.createElement('td'); //creates table data.
      rowData = fileData[j];
      tdEl.textContent = rowData[k];
      trEl.appendChild(tdEl);
      tradeData.appendChild(trEl);
    }
  }
};
