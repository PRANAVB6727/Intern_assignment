
window.onload = function() {
        document.getElementById('button1').addEventListener('click', function() {
        var request = new XMLHttpRequest();
        request.open("GET", "PhotomFile0.csv", true);
        request.send();
        request.onload = function () {
          // Split the CSV data into rows
          var rows = request.responseText.split("\n");

          // Create an HTML table
          var table = document.getElementById("table1");

          // Add a row for each data point
          var numRows = document.getElementById('rowInput').value;
          if(numRows > 1000)
          {
            alert("Enter a number between 0 to 1000 as there are only 1000 rows in CSV file");
          }
          else
          {
            for (var i = 0; i<numRows; i++) {
              var row = table.insertRow();
              // Split each row into cells
              var cells = rows[i].split(",");
              for (var j = 0; j < cells.length; j++) {
                var cell = row.insertCell();
                cell.innerHTML = cells[j];
              }
            }
          }
          // Add the table to the webpage
          document.body.appendChild(table);
        };
    });
    document.getElementById('button2').addEventListener('click', function(){
      document.getElementById('table1').innerHTML="";
      document.getElementById('rowInput').value = '';
    })
};





