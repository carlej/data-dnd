<!DOCTYPE html>
<!-- Add Supplier Info to Table Supplier -->
<?php
		$currentpage="login";
		include "pages.php";
		
?>
<html>
	<head>
		<title>login</title>
		<link rel="stylesheet" href="index.css">
		<script type = "text/javascript"  src = "verifyInput.js" > </script> 
	</head>
<body>


<?php
	include "header.php";
	$msg = "login page";

// change the value of $dbuser and $dbpass to your username and password
	include 'connectvars.php'; 
	
	$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
	if (!$conn) {
		die('Could not connect: ' . mysql_error());
	}
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

// Escape user inputs for security
		$username = mysqli_real_escape_string($conn, $_POST['username']);
		$password = mysqli_real_escape_string($conn, $_POST['password']);

		$queryIn = "SELECT * FROM Users where username='$username' ";
		$resultIn = mysqli_query($conn, $queryIn);
		if (mysqli_num_rows($resultIn)!=0) {
			$querysalt = "SELECT salt FROM Users WHERE username LIKE '$username'";
			$salt = mysqli_query($conn, $quirysalt);
			$passwordhold = MD5($salt.$password);
			$quirypass = "SELECT password FROM Users WHERE username LIKE '$username'";
			$ackpass = mysqli_query($conn, $quirypass);
			echo "salt $salt" . mysqli_error($conn);
//			if($ackpass==$passwordhold){
//				$msg = "Log in successfull";
//			}
//			else{
//				echo "ERROR: salt $salt password $passwordhold ackpass $ackpass. " . mysqli_error($conn);
//			}
		}
	}
// close connection
mysqli_close($conn);

?>
	<section>
    <h2> <?php echo $msg; ?> </h2>

<form method="post" id="addForm">											
<fieldset>
	<legend>User Info:</legend>
    <p>
        <label for="username">Username:</label>
		<input type="text" class="required" name="username" id="username">    </p>
    <p>
	<p>
        <label for="password">Password:</label>
        <input type="text" class="required" name="password" id="password">
    </p>
</fieldset>

      <p>
        <input type = "submit"  value = "Submit" />
        <input type = "reset"  value = "Clear" />
      </p>
</form>
</body>
</html>