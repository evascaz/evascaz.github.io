
$(document).ready(function() { //always do this first. A special event 
  
  // drawGrid needs to happen before random object
drawGridObjects();

  for (i +1; i < 30; i++){
	  drawRandomObject();
  }
});


function drawGridObjects(){
 for (j = 0; j < 10; j++) {
	for (i = 0; i < 20; i++) { 
	  $("body").append( "<div class='element' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>");
	  console.log("element " + i + " added");
	}
  } 	
}

function drawRandomObject(){

  //store random values 
  var rx = Math.floor(Math.random()*100);
  var ry = Math.floor(Math.random()*100);
  console.log("rx: " + rx + " ry: " + ry);

 var color = "black";

  if (ry < 50) {
    color = "yellow";
  }
  console.log("rx: " + rx + " ry: " + ry);
  $("body").append( "<div class='element random' style='left:" + rx + "vw; top:" + ry + "vh; background-color:" + color + ";'></div>" );


//vw is viewport width
   $("body").append( "<div class='random' style='left:" + rx*5 + "vw; top:" + ry*50 + "px;'></div>");
	  console.log("element " + i + " added");

}