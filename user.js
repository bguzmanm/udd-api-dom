(function() {

  async function pushUser(){

    const url = 'https://reqres.in/api/users';
    const response = await fetch(url, {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'brian',
        job: 'teacher'
      })

    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    

  }


  const boton = document.querySelector('#crearUsuario');
  boton.addEventListener('click', pushUser);
  

})();