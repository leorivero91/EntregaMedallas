let data = document.getElementById("data");
let btnSend = document.getElementById("send");

btnSend.addEventListener("click", () =>{
  
  switch(Number(data.value)) {
    case 1:
      console.log("Entregar medalla de oro");
      break;
    case 2:
      console.log("entregar medalla de plata");
      break;
    case 3:
      console.log("Entregar medalla de bronce");
      break;
    default:
      console.log("Entregar mención de participación");
  }
});
