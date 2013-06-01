#pragma strict

var player:GameObject;
var stolen: boolean = false;
var pos:float = -0.2;
function Start() {
	player = GameObject.Find("player");
}

function Update () {
	var isAtacked = transform.parent.gameObject.GetComponent(vendedorAnimate).isAtacked;
	if(isAtacked){

		if(Input.GetKey(KeyCode.LeftArrow)){
			pos = Mathf.Abs(pos);
		}else{
			pos = -Mathf.Abs(pos);
		}
		var x = player.transform.position.x - transform.position.x+pos;
		var y = player.transform.position.y - transform.position.y + 1.3;
		var z = player.transform.position.z - transform.position.z-0.3;
		transform.Translate(Vector3(x,y,z));	
		stolen = true;
	}
}