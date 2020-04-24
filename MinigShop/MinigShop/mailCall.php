<?php
if (isset ($_POST['contactXX'])) {
  $to = "zakaz@miningshop.ru";
  $subject = "Заказан звонок ".$_SERVER['HTTP_REFERER'];
  $message = "Имя пользователя: ".$_POST['nameXX']."\nEmail пользователя ".$_POST['contactXX']."\nТелефон пользователя ".$_POST['telXX']."\n\nАдрес сайта: ".$_SERVER['HTTP_REFERER'];

  $boundary = md5(date('r', time()));
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $from . "\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

  
    mail($to, $subject, $message, $headers);
    echo $_POST['nameXX'].', Ваше сообщение отправлено, спасибо!';
  
  }

?>
