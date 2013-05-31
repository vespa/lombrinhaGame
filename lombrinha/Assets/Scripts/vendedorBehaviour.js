#pragma strict

var player : GameObject;
var balao : Transform;
var somSoco : AudioClip;

var distanciaPontoColeta : float;

function Start() {
	player = GameObject.Find("player");
}

function Update () {
	ataque();
}

function ataque () {
	if (Input.GetKey(KeyCode.Space)) {
		distanciaPontoColeta = Vector3.Distance(player.transform.position, this.transform.position);
		if (distanciaPontoColeta < 1.6)
			if (player.GetComponent(playerBehaviour).temBalao == false && player.GetComponent(playerBehaviour).objetivo > 0) {
				audio.PlayOneShot(somSoco);
				Instantiate(balao, player.transform.position, player.transform.rotation);
				player.GetComponent(playerBehaviour).temBalao = true;
			}
	}
}