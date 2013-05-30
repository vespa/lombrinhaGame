
var patrol = true;
var speed  = 1;
var myPoint = "none";
var lastPositions = new Array();
var wayPoint: GameObject[];

function Start () {

}

function killLastPositions(arr){
	return arr;
} 

function sortNewWay(){
	lastPositions.Add(myPoint);
	var removeArr = lastPositions;
	var removeCount = lastPositions.length;

	var arr:Array = wayPoint;

	while(removeCount--){
		var rm = removeArr[removeCount];
		var count = arr.length;
			while(count--){		
				if(arr[count].name == rm){
					arr.RemoveAt(count);
				}
			}
	}
	if(arr.length == 5){
		lastPositions = new Array();
	}
	var name = closestObj(arr);
	return name;
}
function closestObj(arr){
		var closest: GameObject; 
		var closestDist = Mathf.Infinity; 
		for (way in arr) { 
			 var dist = (transform.position - way.transform.position).sqrMagnitude; 
	         if (dist < closestDist) { 
	            closestDist = dist; 
	            closest = way; 
	         } 
	    }	
		return closest.name;
}
function whoIsNear(){
		// se waypoint ainda não foi declarado, ele prenche o array
		if(wayPoint.Length == 0){
			wayPoint = GameObject.FindGameObjectsWithTag("caminho");
		}
		
		// se myPoint ainda não foi definido, gere um
		if(myPoint == "none"){
			myPoint = closestObj(wayPoint);
		}
		//
		for(var way in wayPoint)
		{
			if(way.name == myPoint){
		  			target = way;
		  			break;
		  	};
		}
		// transferir esta funcao para alguma lib universal		
		var distanceToTarget = Vector3.Distance(this.transform.position, target.transform.position);
		var pos = target.transform.position;
		var myPos =  transform.position;
		var x:float = pos.x -  myPos.x;
		var y:float = pos.y -  myPos.y;
		var z:float = pos.z -  myPos.z; 	

		transform.Translate(Vector3(x,y,z) * (Time.deltaTime/distanceToTarget)*speed);
		//Debug.Log(distanceToTarget);
		if(distanceToTarget < 0.1){
			myPoint = sortNewWay();
		}		
}
/* 
var target;
for(way in waypoints){
Debug.Log(way.name);
	if(way.name == "caminho5"){
		target = way;
		
	}
	
	if(typeof target!= null){
	    var pos = target.transform.position;
	    var myPos =  transform.position;
		var x = pos.x -  myPos.x;
		var y = pos.y -  myPos.y;
		var z = pos.z - myPos.z; 	
			Debug.Log("acheidsfd");
		//transform.Translate(Vector3(x,y,z) * (Time.deltaTime/distanceToPlayer)*9);	
	}
}*/

/*
	var closest: GameObject; 
	var closestDist = Mathf.Infinity; 
	var waypoints = GameObject.FindGameObjectsWithTag("caminho"); 
	if(patrol){
		for (waypoint in waypoints) { 
			 var dist = (transform.position - waypoint.transform.position).sqrMagnitude; 
	         if (dist < closestDist) { 
	            closestDist = dist; 
	            closest = waypoint; 
	         } 
	         transform.LookAt(closest.transform); 
	         var pos = closest.transform.position;
	         var myPos =  this.transform.position;
			 var x = pos.x -  myPos.x;
			 var y = pos.y -  myPos.y;
			 var z = pos.z - myPos.z;  
			 Debug.Log(x);       
	        // transform.Translate(Vector3(x,y,z) * (Time.deltaTime)*1);
	    }
	}*/
 

function Update () {
	whoIsNear();
}