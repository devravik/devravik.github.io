<?php
	$errormsg = "";
	
	if (empty($_POST["fname"])) {
		$errormsg .= "Name required. ";
	} else {
		$fname = filter_var($_POST['fname'], FILTER_SANITIZE_STRING);
	}
	
	if (empty($_POST["email"])) {
		$errormsg .= "Email required. ";
	} else {
		$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
	}
	
	if (empty($_POST["phone"])) {
		$errormsg .= "Phone required. ";
	} else {
		$phone = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
	}
		
	if (empty($_POST["message"])) {
		$errormsg .= "Message required. ";
	} else {
		$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
	}
	
	$success = '';
	if (!$errormsg){
		//change recipient email and subject here
		$to = "admin@yoursite.com";
		$subject = "New AboutMe Demo Contact Form Submitted";	
		
		//prepare email body
		$body_message = "";
		$body_message .= "Name: " . $fname ."\n";
		$body_message .= "email: " . $email ."\n";
		$body_message .= "Phone: " . $phone ."\n";
		$body_message .= $message;
		
		$headers = 'From: '. $fname .' <'. $email .'>' . "\r\n" .
					'Reply-To: ' . $email . "\r\n";
		
		$success = mail($to, $subject, $body_message, $headers);
		
	} 
	
	if ($success){
	   echo "success";
	}else{
		echo "Something went wrong: ".$errormsg;
	} 
?>
