<?php			
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Origin: *");
    $host = "localhost";
    $user = "root";
    $password = "";
    $database = "holes";
    
	$Par = $_GET['Par'];
	$FIR = $_GET['FIR'];
	$GIR = $_GET['GIR'];
	$Score = $_GET['score'];
	$puttsno = $_GET['puttsno'];
	$bunkershit = $_GET['bunkershit'];
	$oob = $_GET['oob'];
   
    //"SELECT * from people where name='{$name}'";
    $connect = mysqli_connect($host,$user,$password,$database) or die("Problem connecting.");
	
	//$holeno = $_GET['holeno'];
	
	
	//$tablename = "hole" + $holeno;
	
	$query = "INSERT into hole5 values('', {$Par}, {$FIR}, {$GIR}, {$Score}, {$puttsno}, {$bunkershit}, {$oob})";
		
	$result = mysqli_query($connect,$query) or die("Bad Query.");
	
    $result = mysqli_query($connect, "SELECT * from hole5") or die("Bad Query.");
	
	mysqli_close($connect);
	
	$results = array();
	while($row = mysqli_fetch_assoc($result))
	{
		$results[] = $row; 
	}
	
	echo json_encode($results);
	
	
?>