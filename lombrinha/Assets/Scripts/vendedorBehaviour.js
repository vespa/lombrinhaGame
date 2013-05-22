#pragma strict

var player : GameObject;
var balao : Transform;
var somSoco : AudioClip;

function Start() {
	player = GameObject.Find("player");
}

function OnCollisionEnter (collision : Collision) {
	if (collision.gameObject == player && player.GetComponent(playerBehaviour).temBalao == false && player.GetComponent(playerBehaviour).objetivo > 0) {
		audio.PlayOneShot(somSoco);
		Instantiate(balao, player.transform.position, player.transform.rotation);
		player.GetComponent(playerBehaviour).temBalao = true;
	}
}

