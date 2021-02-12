<?php
require 'connect.php';
error_reporting(E_ERROR);
$workers = [];
$sql = "SELECT * FROM data";

if($result = mysqli_query($con,$sql))
{
    $cr=0;
    while($row = mysqli_fetch_assoc($result))
    {
        $workers[$cr]['id'] = $row['id'];
        $workers[$cr]['name'] = $row['name'];
        $workers[$cr]['job_config'] = $row['job_config'];
        $workers[$cr]['status'] = $row['status'];
        $cr++;
    }


    echo json_encode($workers);
}
else{
    http_response_code(404);
}
?>