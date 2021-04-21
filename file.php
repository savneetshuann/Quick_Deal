<?php
header('Access-Control-Allow-Origin: *');
ini_set('upload_max_filesize', '10M');
ini_set('post_max_size', '10M');
ini_set('max_input_time', 300);
ini_set('max_execution_time', 300);


if(isset($_REQUEST['data']) && !empty($_REQUEST['data'])){
    $data = $_REQUEST['data'];
    $type = $_REQUEST['type'];
    $name = $_REQUEST['name'];
    $file = './data/'.$type.$name.'.txt';
    $current = file_get_contents($file);
    $current .= "$data\n\n";
    file_put_contents($file, $current);
    echo $data;
}
?>
