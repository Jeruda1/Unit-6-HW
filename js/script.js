//get user's input
//save the user's input into a variable called var city
//listen for when user clicks on submit button
/*create if & else var city conditionals for NYC, SF, LA, ATX and SYD to
equal specific corresponding image saved in folder */
//reset var city input back to nothing before next input is put in
//if the user submits any of these cities in the submit button, then the background should change to corresponding background photo

$("document").ready(function(){

	event.preventDefault();


console.log("Its working")

var cities = ["NYC", "SF", "LA", "ATX", "SYD"]
//create an array of all these cities
 for(i=0; i < cities.length; i++){
 	//add a for loop to the array
   $("select").append("<option value='"+cities[i]+"'>"+cities[i]+"</option>"); 
   //We access the value based off of the index's (variable i) current value
 }
 $("select").on("change", function(){
 	//change handler to alert the users actions and define anonymous function
 	console.log($(this))
 	var city = $("select").val();
 	//variable city defines the value of id "select"
 	console.log(city)
 	
   // alert($(this).val())
   if (city==="NYC"){
 		$("body").attr("class","nyc")
 		// alert($(this).val())
	 }
	 else if (city==="SF"){
	 	$("body").attr("class","sf")
	 }
	 else if (city==="LA"){
	 	$("body").attr("class","la")
	 }
	 else if (city==="ATX"){
	 	$("body").attr("class","austin")
	 }
	 else if (city==="SYD"){
	 	$("body").attr("class","sydney")
	 }
 } );
 
 });


/*Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"; 
use the array to add values to the <select> menu by using a for loop in JavaScript (don't update the HTML to do this!)
When the user changes the input of the drop-down, update the background image based on what they selected
Use $.append() in your iteration on the drop-down menu
Use the $.attr() function to update html classes
Get the value of user input using $.val()
Use the $.change event handler to capture user actions
Use if/else if/else conditionals to control the flow of your application
Display your pseudocode as Javascript comments */