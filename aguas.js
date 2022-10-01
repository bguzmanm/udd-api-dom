(function(){

  async function getWather(){

    const input = document.querySelector('#ciudad');
    let ciudad = input.value; 

    console.log(`Hola ${ciudad}`);

    if (ciudad==null){
      return false;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?appid=616629f9acdc3b22b8b09553e632e5da&q=${ciudad}`;

    fetch(url)
    
      .then((respuesta) => { return respuesta.json();})
      .then((data) => { 
        let centigrado = data.main.temp-273.15;

        console.log(`En ${ciudad} hay ${centigrado} centrigrados`);
      })
  }
  const boton = document.querySelector('#call');
  boton.addEventListener('click', getWather);
  
})();