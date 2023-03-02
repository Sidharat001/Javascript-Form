<?php
// echo 'workking';
// die;
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

//Get Data from post method

$name = $_GET['name'];
$lastName = $_GET['lastName'];
$email = $_GET['email'];
$address = $_GET['address'];

// SQL statement
$sql = "INSERT INTO `user`(`name`, `last_name`, `email`, `address`) VALUES ('$name','$lastName','$email','$address')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>