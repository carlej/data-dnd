﻿<!DOCTYPE html>
<?php
		$currentpage="List Users";
		include "pages.php";
?>
<html>
	<head>
		<title>List Users</title>
		<link rel="stylesheet" href="index.css">
	</head>
<body>


<?php
// change the value of $dbuser and $dbpass to your username and password
	include 'connectvars.php'; 
	include 'header.php';	

	$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
	if (!$conn) {
		die('Could not connect: ' . mysql_error());
	}	

// query to select all information from supplier table
	$query = "SELECT * FROM Users ";
	
// Get results from query
	$result = mysqli_query($conn, $query);
	if (!$result) {
		die("Query to show fields from table failed");
	}
// get number of columns in table	
	$fields_num = mysqli_num_fields($result)-1;
	echo "<h1>Users:</h1>";
	echo "<table id='t01' border='1'><tr>";
	
// printing table headers
	for($i=0; $i<$fields_num; $i++) {	
		$field = mysqli_fetch_field($result);	
		echo "<td><b>$field->name</b></td>";
	}
	echo "</tr>\n";
	while($row = mysqli_fetch_row($result)) {
		echo "<tr>";
		// $row is array... foreach( .. ) puts every element
		// of $row to $cell variable	
		foreach($row as $cell){
			$qsalt="SELECT * FROM Users WHERE salt='$cell'";
			$salt= mysqli_query($conn,$qsalt);
			if(mysqli_num_rows($salt)==0)
				echo "<td>$cell</td>";
		}	
		echo "</tr>\n";
	}

	mysqli_free_result($result);
	mysqli_close($conn);
?>
</body>

</html>

	
