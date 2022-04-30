function showTime(){
  let hoy = new Date();
  let hora = momentoActual.getHours()
  let minuto = momentoActual.getMinutes()
  let segundo = momentoActual.getSeconds()

  var horaImprimible = hora + " : " + minuto + " : " + segundo



  let h1Hora = document.getElementById("HoraActual");
  h1Hora.innerHTML.value = horaImprimible;
 // let horaActual = document.querySelector("#HoraActual")
//  horaActual.innerHTML = `${hours+ ":" +minutes+ ":" +seconds}`;
  setTimeout("showTime()", 1000);
  
  }

  setTimeout(showTime(), 1000);



