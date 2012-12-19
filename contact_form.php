<?php

/**
 * A Simple Contact Form
 *
 * Written by Jesse Dunlap as an example for Tim Hershman in PHP...
 */

$recipient = 'info@wjdevs.com';

// Below, we are taking values POSTED to the PHP script from the
// form written below in the HTML section. Notice that in our
// <form> tag, we specify "post" as the method...
$subject		=	$_POST['subject'];
$message		=	$_POST['message'];
$sender_name	=	$_POST['sender_name'];
$sender_email	=	$_POST['sender_email'];
$return_to		=	'index.html';

// mail() sends an e-mail from your server
// Syntax: mail(recipient_email, subject, message);
mail($recipient, 'New Message From ' . $sender_name, "Sender Email: $sender_email\nSubject: $subject\nMessage:\n\n$message\n\nSent On: " . date('h:m:s'));
header('Location: ' . $return_to);

?>