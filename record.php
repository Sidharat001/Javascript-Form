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

// SQL statement
$sql = "SELECT * FROM user";

// Run query
$result = $conn->query($sql);

// Check Condition
if ($result->num_rows > 0) {
    while($data = $result->fetch_assoc()){
        echo "<tr>";
        echo "<td>".$data['name']."</td>";
        echo "<td>".$data['last_name']."</td>";
        echo "<td>".$data['email']."</td>";
        echo "<td>".$data['address']."</td>";
        echo "<td><ul><li><button id='deleteData' class='btn btn-primary btn-sm rounded-0' type='button' data-bs-toggle='modal' data-bs-target='#viewModal' title='View'>
        <i class='fa fa-table'></i>
        </button></li></ul></td>";
        echo "</tr>";
    }
}else{
    echo "<td>0 Record</td>";
}
?>