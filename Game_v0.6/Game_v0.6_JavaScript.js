//JavaScript file for Game_v0.6.html
var room = "one";
var first ={
	one:true,
	two:true,
	three:true,
	four:true,
	five:true,
	six:true,
	seven:true,
	eight:true,
	nine:true,
	ten:true,
}
var items = {
	hasfork:false,
	hasswords:false,
	hascourage:false,
	hasplate:false
}
var LocText = {
	one:"Foolish Mortal you have angered me!!!! Go into these putrid wastes and find me four items for my feast. You will know you have found them because they will look like *this*.",
	two:"walking along a path some zombies enter your view they talka while and then one of them seems to have won a prize. A brain sits on a silver platter, the zombie eats the brain, leaves the *platter* and all the zombies shamble off.",
	three:"You come to a sign in the road it reads <west zombies> <north cliffs> you also see a small cave to the east.",
	four:"a small cave with tight passageways greets you but before you can get your bearings a small spider jumps towards you. the creature skitters under your feet showing much *courage* and travels off to the north.",
	five:"you enter a cave containing infinite *swords*... the perfect size to be tooth picks for a Demon.",
	six:"you come to a *fork* in the road.",
	seven:"A skeleton animates as you enter the cave clearing, it plays it's rib cage like a xylophone and nods it head towards you. The cave entrance is to the north and further in is to the south.",
	eight:"two large suits of knights armor flank the entrance to a large cave. Both do not have any weapons and cannot impeed your progress.",
	nine:"You overlook a cliff, Some bats fly near your face to harass you before passing on into the night you can travel west or east along the cliff or south away from the drop.",
	ten:"you come to an entrance to a cave, the clattering of bones on stone is heard within.",
	tencont:"you see a small spider filled with *courage* on the ground",
	win:"You hand over the four items and the Demon looks pleased, perhaps you will live to see another day!"
}
function onstart(){
	console.log("AHHHH");
	document.getElementById("story").innerHTML = LocText.one;	
}
function go(){
	console.log("AHHHH");
	if((document.getElementById("input").value).toUpperCase() == "N"){
		console.log("AHHHH");
		updatedisplay("n");
	}else if((document.getElementById("input").value).toUpperCase() == "W"){
		updatedisplay("w");
	}else if((document.getElementById("input").value).toUpperCase() == "S"){
		updatedisplay("s");
	}else if((document.getElementById("input").value).toUpperCase() == "E"){
		updatedisplay("e");
	}else if((document.getElementById("input").value).toUpperCase() == "TAKE PLATTER" && items.hasplate == false && room == "two"){
		items.hasplate = true;
		itemget();
	}else if((document.getElementById("input").value).toUpperCase() == "TAKE FORK" && items.hasfork == false && room == "six"){
		items.hasfork = true;
		itemget();
	}else if((document.getElementById("input").value).toUpperCase() == "TAKE SWORDS" && items.hasswords == false && room == "five"){
		items.hasswords = true;
		itemget();
	}else if((document.getElementById("input").value).toUpperCase() == "TAKE COURAGE" && items.hascourage == false && room == "ten"){
		items.hascourage = true;
		itemget();
	}else if((document.getElementById("input").value).toUpperCase() == "LIST" && (items.hasplate == true || items.hascourage == true || items.hasswords == true || items.hasfork == true)){
		itemlist()
	}else{
		document.getElementById("input").value = "Please write only a cardinal direction, the take [item] action or the List action if you have items to inspect"
	}
}

function itemget(){
	console.log("Hmmmmm");
	document.getElementById("story").innerHTML = document.getElementById("story").innerHTML + "you pick it up and put it in your bag.";
	document.getElementById("points").innerHTML = parseInt(document.getElementById("points").innerHTML) + 5;
}

function itemlist(){
	document.getElementById("story").innerHTML = document.getElementById("story").innerHTML + " You have a";
	if(item.hasfork == true){
		document.getElementById("story").innerHTML = document.getElementById("story").innerHTML + " fork";
	}
	if(item.hasplate == true){
		document.getElementById("story").innerHTML = document.getElementById("story").innerHTML + " platter";
	}
	if(item.hasswords == true){
		document.getElementById("story").innerHTML = document.getElementById("story").innerHTML + " infinte swords";
	}
	if(item.hascourage == true){
		document.getElementById("story").innerHTML = document.getElementById("story").innerHTML + " courage";
	}
	document.getElementById("story").innerHTML = document.getElementById("story").innerHTML + "in your bag.";
}

function updatedisplay(move){
	document.getElementById("n").disabled = false;
	document.getElementById("w").disabled = false;
	document.getElementById("s").disabled = false;
	document.getElementById("e").disabled = false;
	switch(room){
		case "one":
			console.log("AHHHH");
			if(move == "n"){
				console.log("AHHHH");
				room = "three";
				locationSign();
			}
			//locationDemon();
			break;
		case "two":
			//locationZombie();
			break;
		case "three":
			if(move == "n"){
				console.log("AHHHH");
				room = "six";
				locationFork();
			}
			if(move == "w"){
				console.log("AHHHH");
				room = "two";
				locationZombie();
			}
			if(move == "s"){
				console.log("AHHHH");
				room = "one";
				locationDemon();
			}
			if(move == "e"){
				console.log("AHHHH");
				room = "four";
				locationSpider();
			}
			//locationSign();
			break;
		case "four":
			if(move == "n"){
				console.log("AHHHH");
				room = "seven";
				locationSkeleton();
			}
			//locationSpider();
			break;
		case "five":
			if(move == "n"){
				console.log("AHHHH");
				room = "eight";
				locationArmor();
			}
			if(move == "e"){
				console.log("AHHHH");
				room = "six";
				locationFork();
			}
			//locationSwords();
			break;
		case "six":
			if(move == "n"){
				console.log("AHHHH");
				room = "nine";
				locationBats();
			}
			if(move == "s"){
				console.log("AHHHH");
				room = "three";
				locationSign();
			}
			//locationFork();
			break;
		case "seven":
			if(move == "n"){
				console.log("AHHHH");
				room = "ten";
				locationCourage();
			}
			if(move == "s"){
				console.log("AHHHH");
				room = "four";
				locationSpider();
			}
			//locationSkeleton();
			break;
		case "eight":
			if(move == "s"){
				console.log("AHHHH");
				room = "five";
				locationSwords();
			}
			if(move == "e"){
				console.log("AHHHH");
				room = "nine";
				locationBats();
			}
			//locationArmor();
			break;
		case "nine":
			if(move == "w"){
				console.log("AHHHH");
				room = "eight";
				locationArmor();
			}
			if(move == "s"){
				console.log("AHHHH");
				room = "six";
				locationFork();
			}
			if(move == "e"){
				console.log("AHHHH");
				room = "ten";
				locationCourage();
			}
			//locationBats();
			break;
		case "ten":
			if(move == "w"){
				console.log("AHHHH");
				room = "nine";
				locationBats();
			}
			if(move == "s"){
				console.log("AHHHH");
				room = "seven";
				locationSkeleton();
			}
			//locationCourage();
			break;
		
	}	
}

function locationDemon(){
	if(first.one == true){
	document.getElementById("points").innerHTML = parseInt(document.getElementById("points").innerHTML) + 5;
	first.one = false;
	}
	if(items.hasfork == false || items.hasswords == false || items.hasplate == false || items.hascourage == false){
	document.getElementById("story").innerHTML = LocText.one;
	}else{
		document.getElementById("story").innerHTML = LocText.win;
	}
	document.getElementById("w").disabled = true;
	document.getElementById("s").disabled = true;
	document.getElementById("e").disabled = true;
}
function locationZombie(){
	if(first.two == true){
	document.getElementById("points").innerHTML = parseInt(document.getElementById("points").innerHTML) + 5;
	first.two = false;
	}
	document.getElementById("story").innerHTML = LocText.two;
	document.getElementById("n").disabled = true;
	document.getElementById("w").disabled = true;
	document.getElementById("s").disabled = true;
}
function locationSign(){
	if(first.three == true){
	document.getElementById("points").innerHTML = parseInt(document.getElementById("points").innerHTML) + 5;
	first.three = false;
	}
	document.getElementById("story").innerHTML = LocText.three;
	
}
function locationSpider(){
	if(first.four == true){
	document.getElementById("points").innerHTML = parseInt(document.getElementById("points").innerHTML) + 5;
	first.four = false;
	}
	document.getElementById("story").innerHTML = LocText.four;
	document.getElementById("w").disabled = true;
	document.getElementById("s").disabled = true;
	document.getElementById("e").disabled = true;
}
function locationSwords(){
	if(first.five == true){
	document.getElementById("points").innerHTML = parseInt(document.getElementById("points").innerHTML) + 5;
	first.five = false;
	}
	document.getElementById("story").innerHTML = LocText.five;
	document.getElementById("w").disabled = true;
	document.getElementById("s").disabled = true;
}
function locationFork(){
	if(first.six == true){
	document.getElementById("points").innerHTML = parseInt(document.getElementById("points").innerHTML) + 5;
	first.six = false;
	}
	document.getElementById("story").innerHTML = LocText.six;
	document.getElementById("w").disabled = true;
	document.getElementById("e").disabled = true;
}
function locationSkeleton(){
	if(first.seven == true){
	document.getElementById("points").innerHTML = parseInt(document.getElementById("points").innerHTML) + 5;
	first.seven = false;
	}
	document.getElementById("story").innerHTML = LocText.seven;

	document.getElementById("w").disabled = true;
	document.getElementById("e").disabled = true;
}
function locationArmor(){
	if(first.eight == true){
	document.getElementById("points").innerHTML = parseInt(document.getElementById("points").innerHTML) + 5;
	first.eight = false;
	}
	document.getElementById("story").innerHTML = LocText.eight;
	document.getElementById("s").disabled = true;
	document.getElementById("e").disabled = true;
}
function locationBats(){
	if(first.nine == true){
	document.getElementById("points").innerHTML = parseInt(document.getElementById("points").innerHTML) + 5;
	first.nine = false;
	}
	document.getElementById("story").innerHTML = LocText.nine;
	document.getElementById("n").disabled = true;
}
function locationCourage(){
	if(first.ten == true){
	document.getElementById("points").innerHTML = parseInt(document.getElementById("points").innerHTML) + 5;
	first.ten = false;
	}
	document.getElementById("story").innerHTML = LocText.ten;
	if(first.four == false){
		document.getElementById("story").innerHTML = document.getElementById("story").innerHTML + LocText.tencont;
	}
	document.getElementById("n").disabled = true;
	document.getElementById("e").disabled = true;
}