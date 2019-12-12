function init(){

  getData();
  getDataGraph1();
  getDataGraph2()

};

function printData(data){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart= new Chart(ctx, {
    type: 'line',
    data: {
      labels: moment.months(),
      datasets: [{
        label: '1000',
        data: data,
        backgroundColor:'rgba(119, 204, 223, 0.5)',
        borderColor:'rgba(119, 204, 223)',
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

function getData(){
  $.ajax({
    url: "php/getDataLine.php",
    method:'GET',
    success: function(data){
      printData(data);
    },
    error: function(){
      alert("si è verificato un errore!")
    }
  })

}

function printDataGraph1(type,data){
  var ctx = document.getElementById('Sells').getContext('2d');
  var myChart = new Chart(ctx, {
    type: type,
    data: {
        labels: moment.months(),
        datasets: [{
            label: 'Vendite',
            data: data,
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

function getDataGraph1(){
  $.ajax({
    url: "php/getFatturato.php",
    method:'GET',
    success: function(data){
      console.log('data',data);
      var type = data.type;
      var datiVendita = data.data;
      printDataGraph1(type,datiVendita);
    },
    error: function(){
      alert("si è verificato un errore!")
    }
  })

}

function printDataGraph2(type,data,labels){
  var ctx = document.getElementById('Torta').getContext('2d');
  var myChart = new Chart(ctx, {
    type: type,
    data: {
        labels: labels,
        datasets: [{
            label: 'Vendite',
            data: data,
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

function getDataGraph2(){
  $.ajax({
    url: "php/getVenditeVenditore.php",
    method:'GET',
    success: function(data){
      console.log('data',data);
      var type = data.type;
      var datiVendita = data.data;
      var venditore = Object.keys(datiVendita);
      var vendita = Object.values(datiVendita);

      printDataGraph2(type,vendita,venditore);
    },
    error: function(){
      alert("si è verificato un errore!")
    }
  })

}

$(document).ready(init)
