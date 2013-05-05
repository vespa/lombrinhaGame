#pragma strict

function Start () {

}

function movement(t){
		var m_iSpeed:int = 10;
		// Move o objeto
		if(Input.GetKey(KeyCode.UpArrow)){
			transform.Translate(transform.up * m_iSpeed * Time.deltaTime, Space.World);
		}	
		if(Input.GetKey(KeyCode.DownArrow)){
			transform.Translate(transform.up * -m_iSpeed * Time.deltaTime, Space.World);
		}
		if(Input.GetKey(KeyCode.RightArrow)){
			transform.Translate(transform.right * m_iSpeed * Time.deltaTime, Space.World);
	
		}
		if(Input.GetKey(KeyCode.LeftArrow)){
			transform.Translate(transform.right * -m_iSpeed * Time.deltaTime, Space.World);

		}
		if(Input.GetKey(KeyCode.Space)){
			transform.Translate(transform.up * m_iSpeed * Time.deltaTime, Space.World);
		}
};

function Update () {
	movement(this);
}