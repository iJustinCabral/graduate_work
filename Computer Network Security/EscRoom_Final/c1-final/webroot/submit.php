<?php

class MyDB extends SQLite3 {
   function __construct() {
      $this->open('USERS.db');
   }
}
$db = new MyDB();

$username = $_GET['username'];

$statement = $db->prepare('SELECT * FROM users WHERE username = :username;');
$statement->bindValue(':username', $username);

$results = $statement->execute();

while ($row = $results->fetchArray()) {
  print "ID = ". $row['ID'] . "\n";
  echo "USERNAME = ". $row['USERNAME'] ."\n";
  echo "PASSWORD = ". $row['PASSWORD'] ."\n";
}
?>
