<?php
$f = @fopen("data.txt", "r+");
if ($f !== false) {
    ftruncate($f, 0);
    fclose($f);
}
?>