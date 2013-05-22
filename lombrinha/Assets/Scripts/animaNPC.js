var positions;
var startFrame:float = 3;
var totalFramesPerLine:float = 10;
var spriteLines:float = 2;
var startLine = 2;
var numberlines;
var framesPerSecond = 24;
var currentLeft;
var currentUp;
var patrol = true;

function setFirstPos(){
	var pos:float = startFrame/totalFramesPerLine;
	numberlines  = 1.0/spriteLines;
	var line = numberlines * startLine;
	renderer.material.mainTextureOffset = Vector2 (pos, line);
}
function setPatrol(){
	 positions = {
		"right":[1,[4,5,6]],
		"left":	[1,[7,8,9,8]],
		"up":	[2, [0,1,2]],
		"down":	[2, [3,4,5]]
	};
}
function setChase(){
	 positions = {
		"right":[2,[6,7]],
		"left":	[2,[8,9]],
		"up":	[1, [0,1]],
		"down":	[1, [2,3]]
	};	
}
function Start () {
	 currentLeft = transform.position.x;
	 currentUp	= transform.position.y;
	 setFirstPos();
	 setPatrol();
	 //setChase();
}

//identify the atual position and change to the next
function setNewPostion(t, type){
	var index : int = Time.time * framesPerSecond;
	//
	var pos = positions[type];
	var line = numberlines * pos[0];
	var ct = pos[1].length;
	index = index % (ct);
	var currentPos = (1.0/totalFramesPerLine) * pos[1][index];
	t.renderer.material.mainTextureOffset = Vector2 (currentPos, line);
}
	
function moveNPC(){

	var newPosX = transform.position.x;
	var newPosY = transform.position.y;
	
	var difX = Mathf.Abs(newPosX- currentLeft);
	var difY = Mathf.Abs(newPosY - currentUp);
	//Debug.Log(difX + "," +difY);
	//
	if(difY > difX){
		if (currentUp < newPosY){
			setNewPostion(this, "up");
		}else{
			setNewPostion(this, "down");
		}
	}else{
		if((currentLeft) < newPosX  ){
			setNewPostion(this, "left");
		}else if(currentLeft > newPosX){
			setNewPostion(this, "right");
		}
	};
	currentUp = newPosY;
	currentLeft = newPosX;
}

function Update () {
	var pos = positions;
	moveNPC();
}