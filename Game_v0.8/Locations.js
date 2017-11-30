//javascript for Game_v0.8

var items = [];
var inventory = [];

function Location(id, name, description, item, N, W, S, E) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.item = item;
	this.first = true;
		function toString() {
			return name + description;
			
		}
}

function onstart(){
	var Castle = new Location(1, "Castle", "You stand in front of a grand gate to the Castle, you remember the words of your teacher to seek out two great gaurdians of this land and best them, only then will you be allowed to enter the great temple", false);
	var Farmland = new Location(2, "Farm", "You come to a small farmland. The farmers look at you with awe and give directions to one of the guardians to the North.", false);
	var ForestPath = new Location(3, "Forest", "You walk until coming to a crossroads. To the North is a large temple, currently the gates are closed shut. The path also leads to East and West.", false);
	var River = new Location(4, "River", "A meandering river is in your path. you decide to follow the river as it flows north hoping to find something at it's end.", false);
	var Hills = new Location(5, "Hills", "Working you way through the hills you come to a wagon stopped by the side of the road inside are many swords.", true);
	var Temple = new Location(6, "Temple", "Entering into the temple you see many grand tapestries and golden statues.", true);
	var Swamp = new Location(7, "Swamp", "You enter a swamp, mud reaches up to your ankles and many creatues lurk in the darkness.", true);
	var Tiger = new Location(8, "Tiger", "You come apon a tiger in the path, you think to yourself, you will need a way to fight this beast.", false);
	var InnerSanctum = new Location(9, "Sanctum", "You enter the Inner Sanctum with both gaurdians defeated you spend the rest of your days as an acolyte.", false);
	var Dragon = new Location(10, "Dragon", "A great dragon stands in your path you think to yoursel, if only you had a way to distract it",false);
	var locationlist = [Castle,Farmland,ForestPath,River,Hills,Temple,Swamp, Tiger,InnerSanctum,Dragon];
	console.log("int done");
	console.log(River.name);
}

