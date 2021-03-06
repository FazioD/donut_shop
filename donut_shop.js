//davide fazio js for donut shop assignment//
var Donutshop = function(locationName, minCustPerHr, maxCustPerHr, avDonutPerCust){
  this.locationName = locationName;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avDonutPerCust = avDonutPerCust;
  this.totalDonutsPerHr = [];
  //this.sumDonutsPerDay = 0;
}

//Gets the random number of customers with each locations min and max customers
Donutshop.prototype.getCustPerHr = function() {
  return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
}


//Gets the amount of donuts sales for a single hour
Donutshop.prototype.getDonutPerHr = function() {
  return this.avDonutPerCust * this.getCustPerHr();
}

//This creates a string and fills in total donuts per day array with the total
//donuts sold each hour.
Donutshop.prototype.getDonutsByTheHr = function() {
  for (var i = 0; i < 12; i ++){
    this.totalDonutsPerHr[i] = this.getDonutPerHr();
  }
}

//This gets the sum of the donut totals in the array
Donutshop.prototype.hourlyTotal = function() {
  for (var i = 0; i < this.totalDonutsPerHr.length; i++){
    this.sumDonutsPerDay += this.totalDonutsPerHr[i];
  }
}


//This method fills in the table
Donutshop.prototype.render = function() {
      // append name
      var table = document.getElementById("donut-table"); //This links to my table in my index.html file
      var tableRow = document.createElement("tr"); //This creates a new table row in my table
      tableRow.id=this.locationName;
      tableRow.innerHTML = this.locationName; //This takes the location name and stages in tableRow variable
      table.appendChild(tableRow);// This puts the location name into the table
      this.totalDonutsPerHr = [];
      this.sumDonutsPerDay = 0;
      this.getDonutsByTheHr();
      // append hrs
      for (var i = 0; i < 12; i++){
        var tableData = document.createElement("td"); //This creates new table data
        tableData.innerHTML = this.totalDonutsPerHr[i]; //Takes array with donut total per hour and stages in the tableData variable
        tableRow.appendChild(tableData); //Puts tableData into 'cells'
        this.sumDonutsPerDay += this.totalDonutsPerHr[i];
      }
      //append total
      var tableData = document.createElement("td"); //This creates new talbe data
      tableData.innerHTML = this.sumDonutsPerDay; //This takes the sumDonutsPerDay and stages it in the var total
      tableRow.appendChild(tableData);  //puts total into cells
}

var renderAll = function () {
  var table = document.getElementById("donut-table");
  while (table.firstChild) {
    table.removeChild(table.firstChild);
    console.log(table.firstChild);
  };

  var headers = ["Shop", "7a", "8a", "9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p", "6p", "Total"];
  var headerRow = document.createElement('tr');
  headerRow.id="headerRow";
  table.appendChild(headerRow);
  for (var i = 0; i < 14; i++){
    var headerCell = document.createElement('th');
    headerCell.innerHTML = headers[i];
    headerRow.appendChild(headerCell);
  };

  for (var i = 0; i < donutShopObjects.length; i++){
    donutShopObjects[i].render();
  }
}

var userAddLocation = function(newLocationName, newMinCust, newMaxCust, newAvDonuts){
  var newShop = new Donutshop(newLocationName, newMinCust, newMaxCust, newAvDonuts);
  return newShop;
}

var handelShopSubmit = function(){
  var newLocationName = document.getElementById("location-name").value;
  var newMinCust = parseInt(document.getElementById("min-cust").value);
  var newMaxCust = document.getElementById("max-cust").value;
  var newAvDonuts = document.getElementById("av-donuts").value;
  var newShop = userAddLocation(newLocationName, newMinCust, newMaxCust, newAvDonuts);
  donutShopObjects.push(newShop);

  newShop.render();
  for (var i = 0; i < donutShopObjects.length-1; i++) {
    if (newShop.locationName == donutShopObjects[i].locationName) {
      donutShopObjects[i] = newShop;
      donutShopObjects.splice(-1, 1);
      renderAll();



    }
  }
}

var downtown = new Donutshop('Downtown', 8, 43, 4);
var capitolHill = new Donutshop('Capitol Hill', 4, 37, 2);
var southLakeUnion = new Donutshop('South Lake Union', 9, 23, 6);
var wedgewood = new Donutshop('Wedgewood', 2, 28, 1);
var ballard = new Donutshop('Ballard', 8, 58, 3);
var donutShopObjects = [downtown, capitolHill, southLakeUnion, wedgewood, ballard];

downtown.render();
capitolHill.render();
southLakeUnion.render();
wedgewood.render();
ballard.render();
