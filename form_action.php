<?php
         $to = "admin@learningmuslim.com";
         $subject = "Email from ".$_POST['username'];
         $email = "Email address ".$_POST['email'];

         $reason = "Reason ".$_POST['subject'];

         $message = $_POST['message'];

         $header = "From:".$_POST['email']." \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";

         $retval = mail ($to,$subject,$message,$header,$reason);

         if( $retval == true ) {
            echo "Message sent successfully...";

         }else {
            echo "Message could not be sent...";
         }
      ?>
