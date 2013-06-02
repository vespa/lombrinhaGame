#pragma strict

function OnGUI () {
	//guiTexture.texture.width = 2000;
}

var xpos : float;

var scaledWidth : int;

var scaledHeight : int;

var imageRatio : float;

var originalWidth : int;

var originalHeight : int;

var screenRatio : float;

 

function Start(){
    ScaleImage();
    xpos=Screen.width/2-(scaledWidth/2);
    transform.position = Vector3.zero;
    transform.localScale = Vector3.zero;
    guiTexture.pixelInset = Rect (0, 0,  Screen.width, Screen.height);  
}

 

 

function ScaleImage () {
originalWidth= guiTexture.texture.width;
originalHeight= guiTexture.texture.height;
screenRatio = (Screen.width / Screen.height);
imageRatio= (originalWidth / originalHeight);
    if(imageRatio <= screenRatio) {
        // The scaled size is based on the height
        scaledHeight = Screen.height;
        scaledWidth = (scaledHeight * imageRatio);
    } else {
        // The scaled size is based on the width
        scaledWidth = Screen.width;
        scaledHeight = (scaledWidth / imageRatio);
    }

    
}