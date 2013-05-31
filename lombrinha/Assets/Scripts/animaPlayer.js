#pragma strict

//var chao : GameObject;
var xLimit : float = 40.0;
var yLimit : float = 30.0;
var m_iSpeed : int = 10;
var parado : boolean;

function Start () {
// TO DO: fazer pegar os limites dinamicamente, conforme o tamanho do chao
//	chao = GameObject.Find("chao");
}

function movement(){
	if(Input.GetKey(KeyCode.UpArrow) && transform.position.y < yLimit){
		transform.Translate(transform.up * m_iSpeed * Time.deltaTime, Space.World);
		transform.Translate(transform.forward * -m_iSpeed * Time.deltaTime, Space.World);
		parado = false;
	}	
	if(Input.GetKey(KeyCode.DownArrow) && transform.position.y > -yLimit){
		transform.Translate(transform.up * -m_iSpeed * Time.deltaTime, Space.World);
		transform.Translate(transform.forward * m_iSpeed * Time.deltaTime, Space.World);
		parado = false;
	}
	if(Input.GetKey(KeyCode.RightArrow) && transform.position.x > -xLimit){
		transform.Translate(transform.right * -m_iSpeed * Time.deltaTime, Space.World);
		parado = false;
	}
	if(Input.GetKey(KeyCode.LeftArrow) && transform.position.x < xLimit){
		transform.Translate(transform.right * m_iSpeed * Time.deltaTime, Space.World);
		parado = false;
	}
};

function Update () {
	parado = true;
	movement();
}