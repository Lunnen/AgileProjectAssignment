<?php

//this was supposed to move the inputFile to the path
$targetPath = "uploads/" . basename($_FILES["inputFile"]["name"]);
move_uploaded_file($_FILES["inputFile"]["tmp_name"], $targetPath);
?>