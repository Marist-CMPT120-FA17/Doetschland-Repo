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
	10:true
}
var items = {
	hasfork:false,
	hasswords:false,
	hascourage:false,
	hasplate:false
}
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
	10:""
}
function onstart(){
	console.log("AHHHH");
	document.getElementById("story").innerHTML = "Foolish Mortal you have angered me!!!! Go into these putrid wastes and find me four items for my feast.";	
}
function go(){
	if(document.getElementById("input").innerHTML == "N"){
		Move(1);
		console.log("please work");
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
				room = "three";
				locationSign();
				break;
			case 2:
			
				break;
			case 3:
				
				break;
			case 4:
				
				break;
		}
	}else if (room == "two"){
		switch (go){
			case 1:
				
				break;
			case 2:
				
				break;
			case 3:
				
				break;
			case 4:
				
				break;
		}
	}else if (room == "three"){
		switch (go){
			case 1:
				
				break;
			case 2:
				
				break;
			case 3:
				
				break;
			case 4:
				
				break;
		}
	}else if (room == "four"){
		switch (go){
			case 1:
				
				break;
			case 2:
				
				break;
			case 3:
				
				break;
			case 4:
				
				break;
		}
	}else if (room == "five"){
		switch (go){
			case 1:
				
				break;
			case 2:
				
				break;
			case 3:
				
				break;
			case 4:
				
				break;
		}
	}else if (room == "six"){
		switch (go){
			case 1:
				
				break;
			case 2:
				
				break;
			case 3:
				
				break;
			case 4:
				
				break;
		}
	}else if (room == "seven"){
		switch (go){
			case 1:
				
				break;
			case 2:
				
				break;
			case 3:
				
				break;
			case 4:
				
				break;
		}
	}else if (room == "eight"){
		switch (go){
			case 1:
				
				break;
			case 2:
				
				break;
			case 3:
				
				break;
			case 4:
				
				break;
		}
	}else if (room == "nine"){
		switch (go){
			case 1:
				
				break;
			case 2:
				
				break;
			case 3:
				
				break;
			case 4:
				
				break;
		}
	}else if (room == "ten"){
		switch (go){
			case 1:
				
				break;
			case 2:
				
				break;
			case 3:
				
				break;
			case 4:
				
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
		document.getElementById("story").innerHTML = "Foolish Mortal you have angered me!!!! Go into these putrid wastes and find me four items for my feast.";	
	}else if(room == "two"){
		
	}else if(room == "three"){
		
	}else if(room == "four"){
		
	}else if(room == "five"){
		
	}else if(room == "six"){
		
	}else if(room == "seven"){
		
	}else if(room == "eight"){
		
	}else if(room == "nine"){
		
	}else if(room == "ten"){
		
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