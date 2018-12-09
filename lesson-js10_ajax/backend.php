<?php
    move_uploaded_file($_FILES["file"]["tmp_name"], 'uploads/' . $_FILES["file"]["name"]);
    print_r($_FILES["file"]);
?>