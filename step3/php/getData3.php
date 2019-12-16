<?php

header('Content-Type: application/json');
include 'data3.php';
$level = $_GET['level'];
$results = [];

foreach ($graphs as $name => $graph) {
  $gLevel = $graph['access'];

  if ($gLevel == 'guest') {
    $results[$name]= $graph;
  }

  if ($gLevel == 'employee' && ($level == 'employee' || $level== 'clevel')) {
    $results[$name]= $graph;
  }

  if ($gLevel == 'clevel' && $level == 'clevel') {
    $results[$name]=$graph;
  }

}

echo json_encode($results);

?>
