
//inital frame
var startFrame = 5;

// how many positions have the sprite
var totalFrames = 12;
// speed of sprite changing. The zero in the end IS important.
var framesPerSecond:float =20.0;
// these two just starts vars where we'll calculate where are the frames positions
var spriteDistance:float;
var textureSize;

//define wich frames belongs to a specific position
var positions = {
	"right":[9,10,11],
	"left":	[6,7,8],
	"up":	[0,1,2],
	"down":	[3,4,5]
};

function getSpriteDistance(){
	var initialValue:float 	= 1.0;
	var distance:float 		= totalFrames;
	var result				= initialValue/distance;
	return result;
}
//identify the atual position and change to the next
function setNewPostion(t, type){
	var index : int = Time.time * framesPerSecond;
	//
	var pos = positions[type];
	var ct = pos.length;
	//
	index = index % (ct);
	var currentPos = spriteDistance * pos[index];
	t.renderer.material.mainTextureOffset = Vector2 (currentPos, 0);
}
//key commands
function move(){
	// mudar a função para identificar mudança de posição ao invés de detectar tecla
	if(Input.GetKey(KeyCode.UpArrow)){
		setNewPostion(this, "up");
	}
	//
	if(Input.GetKey(KeyCode.DownArrow)){
		setNewPostion(this, "down");
	}
	//
	if(Input.GetKey(KeyCode.RightArrow)){
		setNewPostion(this, "right"); 
	}
	//
	if(Input.GetKey(KeyCode.LeftArrow)){
		setNewPostion(this, "left"); 
	}	
}

function Start () {
	textureSize 	= renderer.material.mainTexture.width;
	spriteDistance 	= getSpriteDistance();
	var currentPos = spriteDistance * startFrame;
	renderer.material.mainTextureOffset = Vector2 (currentPos, 0);	
}

function Update () {
	move();
}