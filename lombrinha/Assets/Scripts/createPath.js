var MyPaths:Transform;

function Start () {
	var count:int = MyPaths.childCount;
	while(count--){
		var child = MyPaths.GetChild(count);
		child.name = "caminho" + count.ToString();
		//Debug.Log(child.name);
	}
}

function Update () {
if (Input.GetKey(KeyCode.Escape))
    {
        Application.Quit();
    }
}