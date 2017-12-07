//javascript for Game_v0.8

function Location(id, name, description, item) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.item = item;
		function toString() {
			return name + description;
			
		}
}
function item(id,name,description){
	this.id = id;
	this.name = name;
    this.description = description;
	this.hasitem = false;
}

var swords = new item(4, "swords", "you hold a sword at you waist.");
var scrolls = new item(5, "scroll", "you hold a large scroll in your hands.");
var jewels = new item(6, "jewels", "some jewels litter your pocket.");
var empty0;
var empty1;
var empty2;
var empty3;
var items = [empty0,empty1,empty2,empty3,swords,scrolls,jewels];
var inventory = [];
var message;
var score = 0;
var currentlocal = 0;
var Castle = new Location(0, "Castle", "You stand in front of a grand gate to a Castle, you remember the words of your teacher to seek out two great gaurdians of this land and best them, only then will you be allowed to enter the great temple", false);
var Farmland = new Location(1, "Farm", "You come to a small farmland. The farmers look at you with awe and give directions to one of the guardians to the North.", false);
var ForestPath = new Location(2, "Forest", "You walk until coming to a crossroads. To the North is a large temple, currently the gates are closed shut. The path also leads to East and West.", false);
var River = new Location(3, "River", "A meandering river is in your path. you decide to follow the river as it flows north hoping to find something at it's end.", false);
var Hills = new Location(4, "Hills", "Working you way through the hills you come to a wagon stopped by the side of the road inside are many swords.", true);
var Temple = new Location(5, "Temple", "Entering into the temple you see many grand tapestries and golden statues. One of these displays stands out to you, a collection of scrolls sit on a pedestal.", true);
var Swamp = new Location(6, "Swamp", "You enter a swamp, mud reaches up to your ankles and many creatues lurk in the darkness. By your feet are a large collecton of jewels.", true);
var Tiger = new Location(7, "Tiger", "You come apon a tiger in the path, you think to yourself, you will need a way to fight this beast.", false);
var InnerSanctum = new Location(8, "Sanctum", "You enter the Inner Sanctum with both gaurdians defeated you spend the rest of your days as an acolyte there.", false);
var Dragon = new Location(9, "Dragon", "A great dragon stands in your path you think to yourself, if only you had a way to distract it",false);
var locationlist = [Castle,Farmland,ForestPath,River,Hills,Temple,Swamp, Tiger,InnerSanctum,Dragon];

var matrixnav = [ //N,W,S,E
	/*Castle*/ 	[2,-1,-1,-1],
	/*Farm*/	[4,-1,-1,2],
	/*Forest*/	[5,1,0,3],
	/*River*/	[6,2,-1,-1],
	/*Hill*/	[7,-1,1,-1],
	/*Temple*/	[8,-1,2,-1],
	/*Swamp*/	[9,-1,3,-1],
	/*Tiger*/	[-1,-1,4,-1],
	/*Sanctum*/	[-1,-1,5,-1],
	/*Dragon*/	[-1,-1,6,-1]
]

function onstart(){
	message = locationlist[currentlocal].description;
	updatedisplay(message);
	console.log("int done");
	console.log(River.name);
}

function updatedisplay (message){
	document.getElementById("story").value = message;
	console.log(score.toString());
}

function move(direction){
	var newlocal = matrixnav[currentlocal][direction];
	if (newlocal == -1){
		updatedisplay("you can not go that way");
	}else if(newlocal == 5 && score < 10){
		message = "you can not pass this way until you bested the two beasts of the land."
		updatedisplay(message)
	}else if(newlocal == 7 && swords.hasitem == true){
		currentlocal = newlocal;
		message = locationlist[currentlocal].description + " You think of your sword and the tiger chuckles as you draw it... suddenly he pounces at you but you raise the blade just in time and the beast lays at your feet defeated."
		score = score + 5;
		updatedisplay(message);
		matrixnav[4][0] = -1;
		document.getElementById("points").innerHTML = score.toString();
	}else if(newlocal == 9 && jewels.hasitem == true){
		currentlocal = newlocal;
		message = locationlist[currentlocal].description + " You think of the jewels in your pocket and scatter them on the ground the dragon is overwhelmed by the sight and fall to the ground defeated!"
		score = score + 5;
		updatedisplay(message);
		document.getElementById("points").innerHTML = score.toString();
	}else if(newlocal == 8 && scrolls.hasitem == true){
		currentlocal = newlocal;
		message = locationlist[currentlocal].description + " Through the teaching of this ancient scroll you also achieve enlightenment and are awarded a place among the Celestial! \n congratulations on completing a Silent Night.";
		score = score + 5;
		updatedisplay(message);
		document.getElementById("points").innerHTML = score.toString();
		document.getElementById("n").disabled = true;
		document.getElementById("w").disabled = true;
		document.getElementById("s").disabled = true;
		document.getElementById("e").disabled = true;
		document.getElementById("go").disabled = true;
	}else{
		console.log(currentlocal)
		currentlocal = newlocal;
		console.log(currentlocal)
		updatedisplay(locationlist[currentlocal].description)
		
	}
	
}

function textgo(){
	console.log("is textgo working?");
	var direction = document.getElementById("input").value;
	direction = direction.toUpperCase();
	console.log(direction);
	if(direction == "N"){
		north();
	}else if(direction == "W"){
		west();
	}else if(direction == "S"){
		south();
	}else if(direction == "E"){
		east();
	}else if(direction == "INVENTORY"){
		listitems();
	}else if(direction == "GET"){
		getitem();
	}else if((direction) == "HELP"){
		console.log("is HELP working?");
		message = "try typing N, W, S, E, Inventory or Get and pressing the go button";
		updatedisplay(message);
	}
	
}

function getitem(){
	if(locationlist[currentlocal].item == true && items[currentlocal].hasitem == false){
		console.log(currentlocal)
		items[currentlocal].hasitem = true;
		message = "You pick up the "+items[currentlocal].name; 
		updatedisplay(message);
	}else{
		message = "there is no item to get here.";
		updatedisplay(message);
	}
}

function listitems(){
	if(swords.hasitem == true){
		message = swords.description + "\n";
	}
	if(jewels.hasitem == true){
		message = message + jewels.description + "\n";
	}
	if(scrolls.hasitem == true){
		message = message + scrolls.description + "\n";
	}
	updatedisplay(message);
}

function north(){
	move(0);
	console.log("trying to move north")
}
function west(){
	move(1);
	console.log("trying to move west")	
}
function south(){
	move(2);
	console.log("trying to move south")
}
function east(){
	move(3);
	console.log("trying to move east")
}