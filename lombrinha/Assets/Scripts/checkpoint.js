#pragma strict

var player:GameObject;
var balao : GameObject;
var somCriancas01 : AudioClip;
var somCriancas02 : AudioClip;

function Start() {
	player = GameObject.Find("player");
}

function OnCollisionEnter (collision : Collision) {
	if (collision.gameObject.name.Equals("player")) {
		if (player.GetComponent(playerBehaviour).temBalao) {
			
			if (player.GetComponent(playerBehaviour).objetivo > 0) {
				player.GetComponent(playerBehaviour).objetivo--;
				
				if ((player.GetComponent(playerBehaviour).objetivo % 2) > 0)
					audio.PlayOneShot(somCriancas01);
				else
					audio.PlayOneShot(somCriancas02); 

				balao = GameObject.FindGameObjectWithTag("balao");
				if (balao)
					Destroy(balao);
				
				player.GetComponent(playerBehaviour).temBalao = false;
			}
			
			Debug.Log("faltam "+ player.GetComponent(playerBehaviour).objetivo +" baloes");
		}
	}
}
