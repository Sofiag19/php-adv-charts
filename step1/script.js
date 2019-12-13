// STEP 1
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

function init(){

  getData();

};

$(document).ready(init)
