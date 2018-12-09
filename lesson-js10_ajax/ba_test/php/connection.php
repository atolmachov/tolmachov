<?php

$bdHost = 'localhost';
$bdLogin = 'slackbeet_ajax';
$bdPass = '123456';
$bdName = 'slackbeet_ajax';

$connect = mysqli_connect($bdHost, $bdLogin, $bdPass, $bdName);
if (!$connect) {
    echo mysqli_connect_error();
    die;
}
