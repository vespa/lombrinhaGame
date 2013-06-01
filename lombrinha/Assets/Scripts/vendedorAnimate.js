var totalFramesPerLine:float = 5;
var spaceBetweenFrames:float = 1.0/totalFramesPerLine;
var framesPerSecond:int = 3;
var isAtacked:boolean = false;
var finishAtack:boolean = false;
var lookingPos:Array = [0, 1, 0, 2];
var atackedPos:Array = [3,4];
var Timer = 0.0;

function looking(t){
	var index : int = Time.time * framesPerSecond;
	var pos = lookingPos;
	var ct = pos.length;
	index = index % (ct);
	var currentPos = (1.0/totalFramesPerLine) * pos[index];
	t.renderer.material.mainTextureOffset = Vector2 (currentPos, 0);
}

function dead(t){	
	var index : int = Timer *3;
	index = Mathf.Floor(index);
	var pos = atackedPos;
	var ct = pos.length;
	index = index % (ct);
	var currentPos = (1.0/totalFramesPerLine) * pos[index];
	t.renderer.material.mainTextureOffset = Vector2 (currentPos, 0);	
	if(index == (ct-1)){
		finishAtack = true;
	}
	Timer += Time.deltaTime;	
}
function Update () {
	if(!isAtacked){
		looking(this);
	}else if (!finishAtack){
		dead(this);
	}
}