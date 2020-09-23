/*
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });

  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
  */
//const { BrowserWindow } = require('electron');
document.getElementById("newcase").onclick = function () {
    window.open('https://services.ecourts.gov.in/ecourtindiaHC/index_highcourt.php?state_cd=4&dist_cd=1&stateNm=Kerala', '_blank', 'nodeIntegration=no')
  
};