<?php
if (isset($_REQUEST['type']) && $_REQUEST['type'] == 'widget'){
	if (isset($_REQUEST['wcontactemail'])){ $mailTo = $_REQUEST['wcontactemail']; }
	if (isset($_REQUEST['wname'])){ $mailFromName = $_REQUEST['wname']; }
	if (isset($_REQUEST['wemail'])){ $mailFromEmail = $_REQUEST['wemail']; }
	if (isset($_REQUEST['wmessage'])){ $message = $_REQUEST['wmessage']; }
	if (isset($_REQUEST['wcontactwebsite'])){ $mailFromWebsite = $_REQUEST['wcontactwebsite']; }
	$subject = 'E-mail from website visitor';
	
	$msg = "This message was sent from: $mailFromWebsite \n\nby: $mailFromName \n\nEmail: $mailFromEmail \n\nSubject: $subject \n\nText of message: $message";
	$headers = "MIME-Version: 1.0\r\n Content-type: text/html; charset=utf-8\r\n From: $mailFromEmail\r\n Reply-To: $mailFromEmail";
	
	mail($mailTo, $subject, $msg, $headers);
}
?>