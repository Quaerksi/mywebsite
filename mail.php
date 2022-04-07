<?php
   header('Access-Control-Allow-Origin: *'); 

   echo '<p>Hallo Welt</p>' ;

   $to = "juliette@salevsky.net";
   $subject = "Contact Us";
   // // Email Template
   $message .= "<b>Message : </b>".$_POST['name']."<br>";
   $message .= "<b>Email Address : </b>".$_POST['email']."<br>";
   $message .= "<b>Message : </b>".$_POST['message']."<br>";

   $header = "From:".$_POST['email']." \r\n";
   $header .= "MIME-Version: 1.0\r\n";
   $header .= "Content-type: text/html\r\n";
   $retval = mail($to,$subject,$message,$header);
   // // message Notification
   if( $retval == true ) {
      echo json_encode(array(
         'success'=> true,
         'message' => 'Message sent successfully'
      ));
   }else {
      echo json_encode(array(
         'error'=> true,
         'message' => 'Error sending message'
      ));
    }
?>