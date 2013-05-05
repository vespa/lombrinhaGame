
var startFrame = 5;
var totalFrames = 16;
var framesPerSecond =10.0;
var spriteDistance:float;
var textureSize;
var m_iSpeed = 0.04;
//
var positions = {
	"right":[9,10,11],
	"left":	[6,7,8],
	"up":	[0,1,2],
	"down":	[3,4,5]
};

function Start () {
	textureSize 	= renderer.material.mainTexture.width;
	spriteDistance 	= getSpriteDistance();
	var currentPos = spriteDistance * startFrame;
	renderer.material.mainTextureOffset = Vector2 (currentPos, 0);	
}

function getSpriteDistance(){
	var initialValue:float 	= 1.0;
	var distance:float 		= totalFrames;
	var result				= initialValue/distance;
	return result;
}

function setNewPostion(t, type){
	var index : int = Time.time * framesPerSecond;
	var pos = positions[type];
	var ct = pos.length;
	index = index % (ct);
	var currentPos = spriteDistance * pos[index];
	t.renderer.material.mainTextureOffset = Vector2 (currentPos, 0);
}


function movement(){
		// Move o objeto
		if(Input.GetKey(KeyCode.UpArrow)){
			transform.Translate(transform.forward * -m_iSpeed * Time.deltaTime, Space.World);
			setNewPostion(this, "up");
		}
			
		if(Input.GetKey(KeyCode.DownArrow)){
			transform.Translate(transform.forward * m_iSpeed * Time.deltaTime, Space.World);
			setNewPostion(this, "down");
		}
		if(Input.GetKey(KeyCode.RightArrow)){
			transform.Translate(transform.right * -m_iSpeed * Time.deltaTime, Space.World);
			setNewPostion(this, "right"); 
		}
		if(Input.GetKey(KeyCode.LeftArrow)){
			transform.Translate(transform.right * m_iSpeed * Time.deltaTime, Space.World);
			setNewPostion(this, "left"); 
		}	
}

function Update () {
    var scrollSpeed = 0.5;	
    var right = new Array(3,4);
    movement();
}
