#pragma strict

var player : GameObject;
var balao : Transform;
var somSoco : AudioClip;
var vendedor: GameObject;
var noMoreBaloons:boolean = false;

var distanciaPontoColeta : float;

function Start() {
	player = GameObject.Find("player");
}

function Update () {
	ataque();
}

function ataque () {
	if (Input.GetKey(KeyCode.Space) && !noMoreBaloons) {
		distanciaPontoColeta = Vector3.Distance(player.transform.position, this.transform.position);
		if (distanciaPontoColeta < 1.6)
			if (player.GetComponent(playerBehaviour).temBalao == false && player.GetComponent(playerBehaviour).objetivo > 0) {
				audio.PlayOneShot(somSoco);
				player.GetComponent(playerBehaviour).temBalao = true;
				transform.parent.gameObject.GetComponent(vendedorAnimate).isAtacked = true;
				noMoreBaloons = true;	
			}
	}
}