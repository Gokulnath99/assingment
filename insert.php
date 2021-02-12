<?php
    require 'connect.php';  

    $postdata = file_get_contents("php://input");


 if(isset($postdata) && !empty($postdata))
 {
    $request =  json_decode($postdata);

    print_r($request);
    
    $Name = $request->Name;
    $Job = $request->Job;
    $Status = $request->Status;

    $sql = "INSERT INTO `data`(`name`, `job_config`, `status`) VALUES ('{$Name}','{$Job}','{$Status}')";

    if(mysqli_query($con,$sql))
    {
        http_response_code(201);
    }
    else{
        http_response_code(422);
    }

    }
?>