<?php
$conn = mysqli_connect("localhost","root","1234567","nescafe");
// Check connection
if(mysqli_connect_errno()){
    echo "MySQL 연결에 실패하였습니다 : " . mysqli_connect_error();
}
?>