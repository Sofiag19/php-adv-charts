/*
  Scaletta :
  - modificare php per farlo rispondere con clevel
  - fare employee
  - fare guest
  - trovare un modo per prendere il dato nell'url
  - agganciare ajax
*/
function printLineGraph(graph){
  var ctx = $("#fatturato");
  new Chart(ctx, {

    type: "line",
    data: {

      labels: moment.months(),
      datasets: [{

        label: graph['access'],
        data: graph['data']
      }]
    }
  });
}
function printPieGraph(graph) {
  var names = Object.keys(graph['data']);
  var values = Object.values(graph['data']);

  var ctx = $('#fatturatoByAgent');
  new Chart(ctx, {

    type: 'pie',
    data: {

      labels: names,
      datasets: [{

        label: graph['access'],
        data: values
      }]
    }
  });
}
function printMultiLineGraph(graph){
  var datasets = [];
  var names = Object.keys(graph['data']);
  var values = Object.values(graph['data']);

  for (i=0;i<names.length;i++) {

    datasets.push({
      label: names[i],
      data: values[i]
    });
  }

  var ctx = $('#teamEff');
  new Chart(ctx, {

    type: 'line',
    data: {

      labels: moment.months(),
      datasets: datasets
    }
  });
}

function printGraphs(graphs){
  if (graphs['fatturato']) {

    printLineGraph(graphs['fatturato']);
  }
  if (graphs['fatturato_by_agent']) {

    printPieGraph(graphs['fatturato_by_agent']);
  }
  if (graphs['team_efficiency']) {

    printMultiLineGraph(graphs['team_efficiency']);
  }
}

function getLevelParameter(){
  var urlParams = new URLSearchParams(window.location.search);
  var levelParam = urlParams.get('level');
  console.log(levelParam);
}

function getData(){
  var level = getLevelParameter();//qualcosa per prendere il parametro dell'url
  $.ajax({
    url: 'php/getData3.php' ,
    method:'GET',
    // data : {
    //   level : level
    // },
    success: function(data){
      console.log(data);
      printGraphs(data);
    },
    error: function(error){
      alert("si è verificato un errore: ",error)
    }
  })

}

// function levelAccess(){
//   var level;
//   $('#guest').click(function(){
//     level = $(this).text();
//     // console.log(level);
//   })
//   $('#employee').click(function(){
//     level = $(this).text();
//     // console.log(level);
//   })
//   $('#clevel').click(function(){
//     level = $(this).text();
//     // console.log(level);
//   })
//   return level;
// }

function init(){
  getData();
  // console.log(levelAccess());
  // levelAccess();

};

$(document).ready(init)
