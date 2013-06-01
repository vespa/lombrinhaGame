// how many positions have the sprite
var totalFramesPerLine:float = 10;
var startLine = 2;
var spriteLines:float = 2;
var numberlines;
var currentDirection;
// speed of sprite changing. The zero in the end IS important.
var framesPerSecond:float =20.0;
// these two just starts vars where we'll calculate where are the frames positions
var spriteDistance:float;
var textureSize;

var player : GameObject;

//define wich frames belongs to a specific position
var positions = {
	"right":[2,[0,1,2]],
	"left":	[1,[6,7,8]],
	"up":	[1, [0,1,2]],
	"down":	[1, [3,4,5]],
	"atackLeft": [2, [3,4,5]],
	"atackRight": [2, [6,7,8]]
};

function getSpriteDistance(){
	var initialValue:float 	= 1.0;
	var distance:float 		= totalFramesPerLine;
	var result				= initialValue/distance;
	return result;
}


//identify the atual position and change to the next
function setNewPostion(t, type){
	var index : int = Time.time * framesPerSecond;
	//
	currentDirection = type;
	var pos = positions[type];
	var line = numberlines * pos[0];
	var ct = pos[1].length;
	index = index % (ct);
	var currentPos = (1.0/totalFramesPerLine) * pos[1][index];
	t.renderer.material.mainTextureOffset = Vector2 (currentPos, line);
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
	//
	if (Input.GetKey(KeyCode.Space)){
		if (currentDirection == "left" || currentDirection == "atackLeft"){
			setNewPostion(this, "atackLeft"); 
		}else{
			setNewPostion(this, "atackRight"); 
		}
		
	}
}

function Start () {
	textureSize 	= renderer.material.mainTexture.width;
	spriteDistance 	= getSpriteDistance();
	numberlines  = 1.0/spriteLines;
	player = GameObject.Find("player");
}

function Update () {
	if (player.GetComponent(animaPlayer).parado == false || Input.GetKey(KeyCode.Space)){
		move();
	}else{
		renderer.material.mainTextureOffset = Vector2 (0.3, 0.5);
	}
		
}