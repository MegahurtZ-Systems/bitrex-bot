var fileInput = document.getElementById('csv');

fileData = $.csv.toArrays(csv, {
  delimiter:"'", // sets a custom value delimiter character
  separator:';', // sets a custom field separator character
});
fileInput.addEventListener('change', csv);

function makeHeaderRow(){
  var tradeData = document.getElementById('tradeData');
  var trEl = document.createElement('tr'); //creates table div.
  for(var i = 0; i < fileData[0].length - 1; i++){
    var thEl = document.createElement('th'); //creates top table row.
    thEl.textContent = fileData[0][i];
    trEl.appendChild(thEl);
  }
  tradeData.appendChild(trEl);
};

function buildTable() {
  //debugger;
  var tradeData = document.getElementById('tradeData');
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
