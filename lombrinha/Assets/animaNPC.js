var positions;
var startFrame = 3;
var totalFrames = 10;
var startLine = 0;
var spriteDistance:float;

function setFirstPos(){
	var pos:float = startFrame/totalFrames;
	renderer.material.mainTextureOffset = Vector2 (pos, startLine);
}

function Start () {
	 setFirstPos();
	 positions = {
		"right":[1,[7,8,7,9]],
		"left":	[2,[6,7,8]],
		"up":	[1, [0,1,2]],
		"down":	[1, [3,4,5]]
	};
}

function moveNPC(){


}

function Update () {
	var pos = positions;
	moveNPC();
}