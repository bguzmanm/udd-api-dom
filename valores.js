(()=>{
  const tabla = document.querySelector('#desempleo');
  const peticion = async (url) => {
   
    const data = await axios.get(url)
    .then((respuesta) => {
      const lista = respuesta.data.serie;
      lista.forEach(element => {
        tabla.innerHTML += 
        `<tr>
          <td>${element.fecha}</td>
          <td>${element.valor}</td>
        </tr>`
      });
    });
  }
  const url = 'https://mindicador.cl/api/tasa_desempleo';
  peticion(url);

})();