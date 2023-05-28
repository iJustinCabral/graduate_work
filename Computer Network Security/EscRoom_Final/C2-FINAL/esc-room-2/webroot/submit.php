<?php

class MyDB extends SQLite3 {
   function __construct() {
      $this->open('users.db');
   }
}

$id = $_GET['id'];

$db = new MyDB();
$sql = "SELECT * from users WHERE ID =$id";
$ret = $db->query($sql);

while($row = $ret->fetchArray(SQLITE3_ASSOC) ) {
    print "ID = ". $row['id'] . "\n";
    echo "USERNAME = ". $row['username'] ."\n";
    echo "PASSWORD = ". $row['password'] ."\n";
  }
?>
