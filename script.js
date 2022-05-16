setInterval(timeHandler, 1000)
function timeHandler() {
  const data = new Date();
  const relogio = document.querySelector('#relogio')
  relogio.textContent = data.toLocaleTimeString()
  console.log(data.getHours())

  if(data.getHours() == 23 && data.getMinutes() == 59 || data.getDate() == 16) {
    document.querySelector('#pedido').style.display = "block"
    relogio.style.display = "none"
  }
}