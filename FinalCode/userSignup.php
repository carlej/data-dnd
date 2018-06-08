<!DOCTYPE html>
<!-- Add Users -->
<?php
		$currentpage="User Signup";
		include "pages.php";
		
?>
<html>
	<head>
		<title>User Signup</title>
		<link rel="stylesheet" href="index.css">
		<script type = "text/javascript"  src = "verifyInput.js" > </script> 
	</head>
<body>


<?php
	include "header.php";
	$msg = "Please create a User Account";

// change the value of $dbuser and $dbpass to your username and password
	include 'connectvars.php'; 
	
	$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
	if (!$conn) {
		die('Could not connect: ' . mysql_error());
	}
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

// Escape user inputs for security
		$username = mysqli_real_escape_string($conn, $_POST['username']);	// Creates value $username from user input 'username'
		$firstName = mysqli_real_escape_string($conn, $_POST['firstName']);	// Creates value $firstName from user input 'firstName'
		$lastName = mysqli_real_escape_string($conn, $_POST['lastName']);	// ^
		$email = mysqli_real_escape_string($conn, $_POST['email']);			// |
		$password = mysqli_real_escape_string($conn, $_POST['password']);	// |
		$age = mysqli_real_escape_string($conn, $_POST['age']);				// | same as above for each individual value name
		
		function generateRandomSalt(){ // Given from example on slides
			return base64_encode(mcrypt_create_iv(12, MCRYPT_DEV_URANDOM)); // returns a random base64 text line
		}

		$salt = generateRandomSalt($conn, $_POST['salt']);					// creates a $salt using the generateRandomSalt function
		
	
// See if username is already in the table
		$queryIn = "SELECT * FROM Users where username='$' ";				// Searches for the values in the username table
		$resultIn = mysqli_query($conn, $queryIn);							// Get user input results
		if (mysqli_num_rows($resultIn)> 0) {								// If result matches query, error
			$msg ="<h2>Username Already Taken</h2> Someone already has the username:  $username<p>";
		} else {															// If user doesn't exist salt password and Insert into users
		$password = MD5('$password.$salt');									// Uses MD5 to scramble the password concat with salt
		// attempt insert query 
			$query = "INSERT INTO Users (username,firstName,lastName,email,password,age,salt) VALUES ('$username','$firstName','$lastName','$email','$password','$age', '$salt')";
			if(mysqli_query($conn, $query)){								// If query succeeds return a message user created
				$msg =  "Record added successfully.<p>";
			} else{															// Else error that query insert couldn't be completed
				echo "ERROR: Username already taken, please choose another one.";
			}
		}
}
// close connection

mysqli_close($conn);
// Create each form for user input on each variable you want controlled by the user
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
        <label for="firstName">First Name:</label>
        <input type="text" class="required" name="firstName" id="firstName">
    </p>
	<p>
        <label for="lastName">Last Name:</label>
        <input type="text" class="required" name="lastName" id="lastName">
    </p>
    <p>
        <label for="email">E-Mail:</label>
        <input type="text" class="required" name="email" id="email">
	<p>
	<p>
        <label for="password">Password:</label>
        <input type="text" class="required" name="password" id="password">
    </p>
	<p>
        <label for="age">Age:</label>
        <input type="number" min=1 max = 99999 class="required" name="age" id="age" title="age should be numeric">
    </p>
</fieldset>

      <p>
        <input type = "submit"  value = "Submit" />
        <input type = "reset"  value = "Clear Form" />
      </p>
</form>
</body>
</html>
