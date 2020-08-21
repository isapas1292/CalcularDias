
function RecogerDatos(){

    var fechaInput = new Date(document.getElementById("fecha").value); 
    var dateNow = new Date();
    var fecha = dateNow.getTime() - fechaInput.getTime();
    var fecha1 = Math.round(fecha / 1000 / 60 / 60 / 24)
    var fecha2 = fecha1 +' Dias '
    
    Swal.fire(
        'Han transcurridos:',
        fecha2,
        'success'
        
      )
}



