<?php

include "connect.php";
session_start();

header("Content-Type: application/json");

if($_SERVER['REQUEST_METHOD']=="GET"){

    $sql = "SELECT * FROM `news`";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
        
    $result = array();
    while($row = $stmt->fetch()){
        array_push($result, $row);
    }

    echo json_encode($result);
    
}

?>