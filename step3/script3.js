function init(){
  getData()
  // var valoreLivello = $('#guest').text();
  // console.log(valoreLivello);
  // var livello;
  // if ($('#guest').click()) {
  //   livello = 'guest';
  // } else if ($('#employee').click()) {
  //   livello = 'employee';
  // } else if ($('#clevel').click()) {
  //   livello = 'clevel';
  // }
  // console.log(livello);

};
function printDataLine(data,id,labels,label,bgColor,bordCol){
  var type = data.type;
  var datiVendita = data.data;
  var ctx = $('#'+id);
  var myChart = new Chart(ctx, {
    type: type,
    data: {
        labels: labels,
        datasets: [{
            label: label,
            data: datiVendita,
            backgroundColor:bgColor,
            borderColor: bordCol,
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
    url: 'php/getData3.php' ,
    method:'GET',
    // data: {
    //   access :
    // },
    success: function(data){
      console.log(data);
    },
    error: function(error){
      alert("si è verificato un errore: ",error)
    }
  })

}



$(document).ready(init)
