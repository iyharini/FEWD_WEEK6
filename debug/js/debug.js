//error thrown example
$("#container").append("<h1>Hi world!</h1>");
//console.log example, log each of the pies and the index before the switch
var pies=["Cherry","Pumpkin","Banana","Apple","Rhubarb"];
$("#container").append("There are "+pies.length+" total pies.<br>");
pies.forEach(function(element,index){
	switch(element){
		case "Apple":
		case "Cherry": $("body").append(index+1+") "+element+": Yum!<br>");
		break;
		case "Rhubarb": $("body").append(index+1+") "+element+": Yuck<br>");
		break;
		case "Banana":
		case "Pumpkin": $("body").append(index+1+") "+element+": meh<br>");
		break;
	}
});
//breakpoint example, put inside the function
function doSomething(){
	$("#container").append("<p>Paragraph</p>");
	var myThing;
	console.log(myThing)
}
doSomething();
