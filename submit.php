<?php
// not working yet
if(isset($_POST['submit'])) {
    $fname = $_POST['firstname'];
    $lname = $_POST['lastname'];
    $visitor_email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $myEmail = 'tarobbani@gmail.com';
    $emailHeader = 'You got an email from ' .$visitor_email;
    $emailContent = 'This is a message from ' .$fname .' ' .$lname .':\n\n' .$message;

    if(mail($myEmail, $subject, $emailContent, $emailHeader)){
        // Message if mail has been sent
        echo "<script>
                alert('Mail has been sent Successfully.');
            </script>";
    }
    else {
        // Message if mail has been not sent
        echo "<script>
                alert('EMAIL FAILED');
            </script>";
    }
}
?>