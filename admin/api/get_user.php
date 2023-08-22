<?php

include "connect.php";
session_start();

header("Content-Type: application/json");

if($_SERVER['REQUEST_METHOD']=="GET"){

    $nrp = $_SESSION['nrp'];

    if($nrp != ""){
        $sql = "SELECT * FROM `anggota` WHERE nrp = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$nrp]);
        
        $row = $stmt->fetch();
        echo json_encode($row);
    }
}

?>