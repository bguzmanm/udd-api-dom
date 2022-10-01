(function(){

  async function getWather(){

    const input = document.querySelector('#ciudad');
    let ciudad = input.value; 
    const key = '616629f9acdc3b22b8b09553e632e5da';
    console.log(`Hola ${ciudad}`);

    if (ciudad==null){
      return false;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&q=${ciudad}`;

    fetch(url, {
      headers: {
        'Authentication': 'Bearer 616629f9acdc3b22b8b09553e632e5da'
      }
    })
    
      .then((respuesta) => { return respuesta.json();})
      .then((data) => { 
        let centigrado = data.main.temp-273.15;

        console.log(`En ${ciudad} de ${data.sys.country} hay ${centigrado} centigrados`);
      })
  }
  const boton = document.querySelector('#call');
  boton.addEventListener('click', getWather);
  
})();