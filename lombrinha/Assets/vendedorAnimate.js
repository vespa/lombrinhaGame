var totalFramesPerLine:float = 5;
var spaceBetweenFrames:float = 1.0/totalFramesPerLine;
var framesPerSecond:int = 3;
var isAtacked:boolean = false;
var lookingPos:Array = [0, 1, 0, 2];
var atackedPos:Array = [3,4];
var finalCountDown = atackedPos.length;

function looking(t){
	var index : int = Time.time * framesPerSecond;
	var pos = lookingPos;
	var ct = pos.length;
	index = index % (ct);
	var currentPos = (1.0/totalFramesPerLine) * pos[index];
	t.renderer.material.mainTextureOffset = Vector2 (currentPos, 0);
}

function dead(t){
	if(finalCountDown != 0){
		var index = Time.time*5;
		var pos = atackedPos;
		var ct = pos.length;
		index = index % (ct);
		var currentPos = (1.0/totalFramesPerLine) * pos[index];
		t.renderer.material.mainTextureOffset = Vector2 (currentPos, 0);	
		finalCountDown--;
	}else{
	  return false;
	}
}
function Update () {
	if(!isAtacked){
		looking(this);
	}else{
		dead(this);
	}
}