#pragma strict

var player:GameObject;

function Start() {
	player = GameObject.Find("player");
}

function Update () {
	var x = player.transform.position.x - transform.position.x + 1;
	var y = player.transform.position.y - transform.position.y + 1;
	var z = player.transform.position.z - transform.position.z - 1;
	transform.Translate(Vector3(x,y,z) * Time.deltaTime * 10);
}