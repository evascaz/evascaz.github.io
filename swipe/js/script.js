
$(document).ready(function() { //always do this first. A special event 

var savedStories = jQuery.get('/Users/evascaz/Sites/evascaz.github.io/exercise-4/js/saved-stories.txt');
// console.log(savedStories.responseText);

var slideOver = jQuery.get('/Users/evascaz/Sites/evascaz.github.io/exercise-4/js/slide-over.svg');
console.log(slideOver.responseText);

// $('#story-1').replaceWith('<div id="story-1">' + slideOver.responseText + '<div>');

// when saved is clicked then.... NEXT STEP : google how to make on click lead to a new div
	$("footer").click(function(){
    	// $("#header").replaceWith("<div id='save-header'><p>Saved Stories</p></div>");
    	$("#inside-screen").replaceWith('<div id="savedStories">' + savedStories.responseText + '</div>'); 
	});

	$("#story-1").click(function(){
         $(this).animate({
           margin: 0
           }, 1000, function(){
             $("#inside-screen").replaceWith('<img id="full-story" src=/Users/evascaz/Sites/evascaz.github.io/exercise-4/js/full-story.svg>');
         });
	});

})




  //JS from class example !!!!

  //<div><p>Another paragraph!</p></div>
//   // drawGrid needs to happen before random object
// drawGridObjects();

//   for (i +1; i < 30; i++){
// 	  drawRandomObject();
//   }
// });


// function drawGridObjects(){
//  for (j = 0; j < 10; j++) {
// 	for (i = 0; i < 20; i++) { 
// 	  $("body").append( "<div class='element' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>");
// 	  console.log("element " + i + " added");
// 	}
//   } 	
// }

// function drawRandomObject(){

//   //store random values 
//   var rx = Math.floor(Math.random()*100);
//   var ry = Math.floor(Math.random()*100);
//   console.log("rx: " + rx + " ry: " + ry);

//  var color = "black";

//   if (ry < 50) {
//     color = "yellow";
//   }
//   console.log("rx: " + rx + " ry: " + ry);
//   $("body").append( "<div class='element random' style='left:" + rx + "vw; top:" + ry + "vh; background-color:" + color + ";'></div>" );


// //vw is viewport width
//    $("body").append( "<div class='random' style='left:" + rx*5 + "vw; top:" + ry*50 + "px;'></div>");
// 	  console.log("element " + i + " added");
