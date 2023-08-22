<?php
	require 'connect.php';
    session_start();
	if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		
		$user = $_POST['nrp'];
		$pass = $_POST['pass'];

		// untuk publish
		// $imap = false;
		// $timeout = 30;
		// $fp = fsockopen ($host='john.petra.ac.id',$port=110,$errno,$errstr,$timeout);
		// $errstr = fgets ($fp); 

		// if (substr ($errstr,0,1) == '+')
		// { 
		// 	fputs ($fp,"USER ".$user."\n");
		// 	$errstr = fgets ($fp);

		// 	if (substr ($errstr,0,1) == '+')
		// 	{
		// 		fputs ($fp,"PASS ".$pass."\n");
		// 		$errstr = fgets ($fp);

		// 		if (substr ($errstr,0,1) == '+')
		// 		{
		// 			$imap=true;
		// 		}
		// 	}
		// }

		//untuk local
		$imap = true;
	}

	if($imap)
	{
		$user = $_POST['nrp'];

		if(strlen($user)==9)
		{
			$_SESSION['nrp'] = $user;
			$sql = "SELECT * FROM anggota";
			$stmt = $pdo->prepare($sql);
            $stmt->execute();
			
			$find = false;
			while($data = $stmt->fetch()){
				if(strtolower($_SESSION['nrp']) == strtolower($data['nrp'])){
					$find = true;
				}
			}

			if($find){
				header("Location: ../index.html");
			}else{
				header("Location: ../login.php?stat=1"); 
			}
			
			
		}

		else
		{
			header("Location: ../login.php?stat=1"); 
		}
		
	}

	else
	{
		header("Location: ../login.php?stat=1"); 
	}
?>
