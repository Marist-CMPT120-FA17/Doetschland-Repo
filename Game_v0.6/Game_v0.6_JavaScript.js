//JavaScript file for Game_v0.6.html
var room = "one";
var first ={
	1:true,
	2:true,
	3:true,
	4:true,
	5:true,
	6:true,
	7:true,
	8:true,
	9:true,
	10:true,
}
;
var LocText = {
	1:"",
	2:"",
	3:"",
	4:"",
	5:"",
	6:"",
	7:"",
	8:"",
	9:"",
	10:"",
};
function go(){
	if(document.getElementById("input").innerHTML == "N"){
		Move(1);
	}else if(document.getElementById("input").innerHTML.toUppercase == "W"){
		Move(2);
	}else if(document.getElementById("input").innerHTML.toUppercase == "S"){
		Move(3);
	}else if(document.getElementById("input").innerHTML.toUppercase == "E"){
		Move(4);
	}else{
		document.getElementById("input").innerHTML = "Please write only a cardinal direction"
	}
}
function Move(go){
	if (room == "one"){
		switch (go){
			case 1:
				document.getElementById("story").innerHTML = "You head out to the exterior of the ship.";
				console.log("start 1");
				room = "two"
				updatedisplay(Loc2Text);;
				break;
			case 2:
				document.getElementById("story").innerHTML = "There is no exit this way.";
				console.log("start 2");
				break;
			case 3:
				document.getElementById("story").innerHTML = "There is no exit this way.";
				console.log("start 3");
				break;
			case 4:
				document.getElementById("story").innerHTML = "There is no exit this way.";
				console.log("start 4");
				break;
		}
	}else if (room == "two"){
		switch (go){
			case 1:
				document.getElementById("story").innerHTML = "you head towards the bridge, perhaps there will be someone who can help on this main pathway.";
				console.log("middle 1");
				room = "four"
				updatedisplay(Loc4Text);;
				break;
			case 2:
				document.getElementById("story").innerHTML = "you head down towards the river bank, better to stay off the main road in your condition.";
				console.log("middle 2");
				room = "three"
				updatedisplay(Loc3Text);;
				break;
			case 3:
				document.getElementById("story").innerHTML = "you head back into your ship.";
				console.log("middle 3");
				room = "one";
				updatedisplay(Loc1Text);;
				break;
			case 4:
				document.getElementById("story").innerHTML = "There is no exit this way.";
				console.log("middle 4");
				break;
		}
	}else if (room == "three"){
		switch (go){
			case 1:
				document.getElementById("story").innerHTML = "you ford the river and head up the side of a hill.";
				console.log("end 1");
				room = "five"
				updatedisplay(Loc5Text);;
				break;
			case 2:
				document.getElementById("story").innerHTML = "There is no exit this way.";
				console.log("end 2");
				break;
			case 3:
				document.getElementById("story").innerHTML = "There is no exit this way.";
				console.log("end 3");
				break;
			case 4:
				document.getElementById("story").innerHTML = "you travel back to your ship.";
				console.log("end 4");
				room = "two"
				updatedisplay(Loc2Text);;
				break;
		}
	}else if (room == "four"){
		switch (go){
			case 1:
				document.getElementById("story").innerHTML = "you head further along the road.";
				console.log("end 1");
				room = "six"
				updatedisplay(Loc6Text);;
				break;
			case 2:
				document.getElementById("story").innerHTML = "There is no exit this way.";
				console.log("end 2");
				break;
			case 3:
				document.getElementById("story").innerHTML = "You travel back to your ship.";
				console.log("end 3");
				room = "two"
				updatedisplay(Loc2Text);;
				break;
			case 4:
				document.getElementById("story").innerHTML = "There is no exit this way.";
				console.log("end 4");
				break;
		}
	}else if (room == "five"){
		switch (go){
			case 1:
				document.getElementById("story").innerHTML = "There is no exit this way.";
				console.log("end 1");
				break;
			case 2:
				document.getElementById("story").innerHTML = "There is no exit this way.";
				console.log("end 2");
				break;
			case 3:
				document.getElementById("story").innerHTML = "you slide back down the small hillside.";
				console.log("end 3");
				room = "three"
				updatedisplay(Loc3Text);;
				break;
			case 4:
				document.getElementById("story").innerHTML = "you wrap around the side of the castle wall.";
				console.log("end 4");
				room = "six"
				updatedisplay(Loc6Text);
				break;
		}
	}else if (room == "six"){
		switch (go){
			case 1:
				document.getElementById("story").innerHTML = "There is no exit this way.";
				console.log("end 1");
				break;
			case 2:
				document.getElementById("story").innerHTML = "you wrap around the side of the castle wall.";
				console.log("end 2");
				room = "five"
				updatedisplay(Loc5Text);
				break;
			case 3:
				document.getElementById("story").innerHTML = "You head back to the old bridge.";
				console.log("end 3");
				room = "four"
				updatedisplay(Loc4Text);
				break;
			case 4:
				document.getElementById("story").innerHTML = "There is no exit this way.";
				console.log("end 4");
				break;
		}
	}
}
function updatedisplay(message){
	document.getElementById("story").innerHTML = document.getElementById("story").innerHTML + message;
	document.getElementById("n").disabled = false;
	document.getElementById("w").disabled = false;
	document.getElementById("s").disabled = false;
	document.getElementById("e").disabled = false;
	if(room == "one"){
		document.getElementById("w").disabled = true;
		document.getElementById("s").disabled = true;
		document.getElementById("e").disabled = true;
	}else if(room == "two"){
		document.getElementById("e").disabled = true;
	}else if(room == "three"){
		document.getElementById("w").disabled = true;
		document.getElementById("s").disabled = true;
	}else if(room == "four"){
		document.getElementById("w").disabled = true;
		document.getElementById("e").disabled = true;
	}else if(room == "five"){
		document.getElementById("n").disabled = true;
		document.getElementById("w").disabled = true;
	}else if(room == "six"){
		document.getElementById("n").disabled = true;
		document.getElementById("e").disabled = true;
	}
}
function locationDemon(){
	
}
function locationZombie(){
	if(first2 == true){
	document.getElementById("points").innerHTML = parseInt(document.getElementById("points").innerHTML) + 5;
	first2 = false;
}
function locationSign(){
	
}
function locationSpider(){
	
}
function locationSwords(){
	
}
function locationFork(){
	
}
function locationSkeleton(){
	
}
function locationArmor(){
	
}
function locationBats(){
	
}
function locationCourage(){
	
}