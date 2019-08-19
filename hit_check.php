<?php
$start = microtime(true);
error_reporting(-1);
$x=$_GET['clicked_x'];
$y=$_GET['y'];
$r=$_GET['r'];
$result;
$error;

function validation($x, $y, $r) {
   if (filter_var($x, FILTER_VALIDATE_FLOAT) === false) {
           echo "Число X '$x' является неверным.\n";
           return false;
           }
   if (filter_var($y, FILTER_VALIDATE_FLOAT) === false) {
        echo "Число Y '$y' является неверным.\n";
        return false;
        }
   if (filter_var($x, FILTER_VALIDATE_FLOAT) === false) {
        echo "Число R '$r' является неверным.\n";
        return false;
        }
   return true;
}

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
else $result = "false";
return $result;
}


if (validation($x, $y, $r))
{
    $result = tryXYR($x, $y, $r);
    include 'Result.php';
    }
?>
