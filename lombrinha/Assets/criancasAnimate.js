
function Start () {

}

function Update () {
	move();
}

var totalFramesPerLine:float = 2;
var spaceBetweenFrames:float = 1.0/totalFramesPerLine;
var framesPerSecond:int = 20;
var positions:Array = [0, 1];

function move(){
	var index : int = Time.time * framesPerSecond;
	var pos = positions;
	var ct = pos.length;
	index = index % (ct);
	var currentPos = (1.0/totalFramesPerLine) * pos[index];
	renderer.material.mainTextureOffset = Vector2 (currentPos, 0);
}