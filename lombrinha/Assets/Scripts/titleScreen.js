#pragma strict

var customSkin : GUISkin;
function OnGUI () {

	// Make a group on the center of the screen
	//GUI.BeginGroup (Rect (Screen.width / 2 - 50, Screen.height / 2 - 50, 100, 100));
	// All rectangles are now adjusted to the group. (0,0) is the topleft corner of the group.
	GUI.skin = customSkin;
	var buttonBottom = Screen.height - 80;
	var buttomCenter = Screen.width / 2;
	if(GUI.Button (Rect (buttomCenter,buttonBottom,80,30), "JOGAR")){
		Application.LoadLevel("game");
	};

	// End the group we started above. This is very important to remember!
	//GUI.EndGroup ();
	


}