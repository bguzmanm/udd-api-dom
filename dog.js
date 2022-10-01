(function(){

  function dameloAPI(url){
    return Promise.resolve(
      fetch(url)
      .then((respuesta) => {
        console.log(respuesta);
        return respuesta.json();
      })
    )
  };
  const url = 'https://dog.ceo/api/breeds/image/random';
  async function getDog(){
    const imagen = document.querySelector('#perrito');
    // damelAoPI(url)
    // .then((data)=> {
    //   imagen.src = data.message;
    // })
    // .catch((err)=>{
    //   const contenedor = document.querySelector('#perros');
    //   contenedor.innerHTML += `<p> ERROR </p>
    //   <p>${err}</p>`;
    // })

    fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      imagen.src = data.message;
    })
    .catch((err) => {
      const contenedor = document.querySelector('#perros');
      contenedor.innerHTML += `<p> ERROR </p>
      <p>${err}</p>`;
    });
  };

  const boton = document.querySelector('#call');
  boton.addEventListener('click', getDog);

  getDog();
  

})();