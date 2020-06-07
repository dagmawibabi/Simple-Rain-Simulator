//Variables
var canvas = "";
var ctx = "";
var cWidth = 0;
var cHeight = 0;
var color = "";
var AoRD = 0;
var SoRD = 0;

//Create Rain Drops
let allDrops = [];
function rainDrops() {
	for (var i = 0; i < AoRD; i++) {
		randX = Math.floor(Math.random() * cWidth);
		randY = Math.floor(Math.random() * -cHeight);
		randW = Math.floor(Math.random() * 2);
		randH = Math.floor(Math.random() * 20 + 30);
		if (color != "") {
			ctx.fillStyle = color;
		} else {
			ctx.fillStyle = "purple";
		}
		ctx.fillRect(randX,randY,randW,randH);
		allDrops.push({"x":randX,"y":randY,"w":randW,"h":randH});
	}
}

//Make the raindrops drop to the ground
let raiseLevel = 0;
function drop() {
	ctx.clearRect(0,0,cWidth,cHeight);
	for (var i = 0; i < allDrops.length; i++) {
		if (allDrops[i]["y"] > cHeight) {
			allDrops[i]["x"] = Math.floor(Math.random() * cWidth);
			allDrops[i]["y"] = Math.floor(Math.random() * -cHeight);
			allDrops[i]["w"] = Math.floor(Math.random() * 2);
			allDrops[i]["h"] = Math.floor(Math.random() * 20 + 30);
			raiseLevel += 0.001 ;
			if (raiseLevel > cHeight){
				raiseLevel = 0;
			}
			ctx.fillRect(0,cHeight-raiseLevel,cWidth+50,cHeight);
		} else {
			allDrops[i]["y"] += 40
		}
		ctx.fillRect(allDrops[i]["x"],allDrops[i]["y"],allDrops[i]["w"],allDrops[i]["h"]);
	}
}

//Show Amount
function showValue() {
	AoRD = document.getElementById("AoRD").value;
	SoRD = document.getElementById("SoRD").value;
	var AoRDV = document.getElementById("AoRDV");
	var SoRDV = document.getElementById("SoRDV");
	AoRDV.innerHTML = "Value: " + AoRD;
	SoRDV.innerHTML = "Value: " + SoRD;
}

//Start the process
function initialize() {
	//Create the canvas
	canvas = document.createElement("canvas");
	ctx = canvas.getContext("2d");
	cWidth = screen.width - 2;
	cHeight = screen.height - 8;
	canvas.width = cWidth;
	canvas.height = cHeight;
	document.body.appendChild(canvas);
	color = document.getElementById("color").value;
	//Delete DOM objects
	var controls = document.getElementById("controls");
	document.body.removeChild(controls);
	//Start
	canvas.style.marginTop = -100 + "px";
	rainDrops();
	setInterval(drop,SoRD);
}


