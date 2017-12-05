/* Set the width of the side navigation to 250px */
var fileInput = document.getElementById('csv');
var fileData = [];

readFile = function(csv){
  var reader = new FileReader();
  reader.onload = function(){
    //debugger;
    var csv = event.target.result;
    var allTextLines = csv.split(/\r\n|\n/);
    for (var i = 0; allTextLines.length; i++){
      var data = allTextLines[i].split(';');
      var tarr = [];
      for (var j = 0; j < data.length; j++){
        tarr.push(data[j]);
      }
      fileData.push(tarr);
    }
  console.log(fileData);
  // document.getElementById('output').innerHTML = reader.result;
  };
  reader.readAsBinaryString(fileInput.files[0]);
};
fileInput.addEventListener('change', readFile);
