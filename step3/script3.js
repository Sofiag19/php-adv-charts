function init(){
  getData()

};

function getData(){

  $.ajax({
    url: 'php/getData3.php' ,
    method:'GET',
    success: function(data){
      console.log(data);
    },
    error: function(error){
      alert("si è verificato un errore: ",error)
    }
  })

}



$(document).ready(init)
