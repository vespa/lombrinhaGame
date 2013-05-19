#pragma strict


var target:Transform;
var chao: GameObject;
function Start () {

}

function Update () {
	var distanceToPlayer = Vector3.Distance(this.transform.position, target.transform.position);
	var x = target.transform.position.x -this.transform.position.x ;
	var y = target.transform.position.y -this.transform.position.y ;
	var z = target.transform.position.z - this.transform.position.z;
	transform.Translate(Vector3(x,y,z) * (Time.deltaTime/distanceToPlayer)*9);
	
}