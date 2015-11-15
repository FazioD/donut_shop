//*A constructor function with properties to represent the location-specific attribute*//
//*blue print*//
var Location = function(name, min, max, avg){
		this.name = name,
		this.min = min,
		this.max = max,
		this.avg = avg,

//*The below provides a whole value*//		
this.avgCustomer = function avgCustomer(min,max) {
	return Math.floor(Math.random() * (this.max - this.min) + this.min);
} 
this.avgDonut = function avgDonut(){
	return this.avgCustomer() * this.avg; 

}
	
};

var downtown = new Location("Downtown", 8, 43, 4.5);
var capitolHill = new Location("Capitol Hill", 4, 37, 2.0);
var southlakeunion = new Location("South Lake Union", 8, 23, 6.6);
var wedgewood = new Location("Wedge Wood", 2, 28, 1.25);
var ballard = new Location("Ballard", 8, 58, 3.5);