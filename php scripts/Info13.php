<?php			
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Origin: *");
    $host = "localhost";
    $user = "root";
    $password = "";
    $database = "holes";
	
	$connect = mysqli_connect($host,$user,$password,$database) or die("Problem connecting.");
	
	$result = mysqli_query($connect, "SELECT * from hole13") or die("Bad Query.");
	
	mysqli_close($connect);
	
	$results = array();
	while($row = mysqli_fetch_assoc($result))
	{
		$results[] = $row; 
	}
	
	echo json_encode($results);
	
	
?>