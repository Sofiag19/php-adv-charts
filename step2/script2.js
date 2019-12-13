function getDataGraph(){
  $.ajax({
    url: "php/getGraph.php",
    method:'GET',
    success: function(data){
      console.log('data',data);
      printDataLine(data['fatturato']);
      printDataPie(data['fatturato_by_agent']);
    },
    error: function(){
      alert("si è verificato un errore!")
    }
  })

}

// GRAFICO LINEARE
function printDataLine(data){
  var type = data.type;
  var datiVendita = data.data;
  var ctx = document.getElementById('Fatturato').getContext('2d');
  var myChart = new Chart(ctx, {
    type: type,
    data: {
        labels: moment.months(),
        datasets: [{
            label: 'Vendite',
            data: datiVendita,
            backgroundColor:'rgba(255, 153, 0, 0.5)',
            borderColor:'rgba(255, 153, 0)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

// GRAFICO TORTA
function printDataPie(data){
  var type = data.type;
  var datiVendita = data.data;
  var venditore = Object.keys(datiVendita);
  var vendita = Object.values(datiVendita);
  var ctx = document.getElementById('Torta').getContext('2d');
  var myChart = new Chart(ctx, {
    type: type,
    data: {
        labels: venditore,
        datasets: [{
            label: '',
            data: vendita,
            backgroundColor:[
              'rgb(233, 68, 68,0.5)',
              'rgba(9, 151, 221, 0.5)',
              'rgb(201, 179, 30,0.5)',
              'rgb(186, 177, 235, 0.5)'
            ],
            borderColor:[
              'rgb(233, 68, 68)',
              'rgba(9, 151, 221)',
              'rgb(201, 179, 30',
              'rgb(186, 177, 235)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

function init(){

  getDataGraph()
  console.log('ciao');

};

$(document).ready(init)
