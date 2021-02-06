<?php 
$server = "localhost";
$user = "root";
$password="";
$db = "penjualan";

$conn = mysqli_connect($server,$user,$password,$db);
if(!$conn){
    die("Gagal terhubung dengan database");
}

?>