<?php
if (isset($_POST['Claim The Free Strategy'])) {
    $firstName = $_POST['first name'];
    $lastName = $_POST['last name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];

   

    // Send email
    $to = 'earwoodmarketing@outlook.com'; 
    $subject = 'Contact Form Submission';
    $message = "First Name: $firstName\nLast Name: $lastName\nEmail: $email\nPhone: $phone\nWebsite: $website";

    mail($to, $subject, $message);
}
?>
