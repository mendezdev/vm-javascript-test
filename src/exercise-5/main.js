function insertRow() {
  var table = document.getElementById('sampleTable');
  var len = table.rows.length;
  var row = table.insertRow(len);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = 'Row'+ (len + 1) + ' cell1';
  cell2.innerHTML = 'Row'+ (len + 1) + ' cell2';
}