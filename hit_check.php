<?php
error_reporting(-1);
$x=$_GET['x'];
$y=$_GET['y'];
$r=$_GET['r'];
$result;


function tryXYR($x, $y, $r) {
$result;
if ($x>=0 and $x<=$r/2) {
if($y>=-1*sqrt($r/4-$x*$x) and $y<=$r) {
$result = "true";
}
else $result = "false";
}
elseif($x>=-$r and $x<0) {
if($y>=0 and $y<=($x+$r)/2){
$result = "true";
}
else $result = "false";
}
else $result = 'false';
return $result;
}

$result = tryXYR($x, $y, $r);
echo $result;
?>