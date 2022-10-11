import React, { useEffect,useState } from "react";

import Frase from "./components/Frase";

function App() {
const [personaje, setPersonaje] =  useState({}) 

useEffect(()=>{
  consultaApi();


},[])
const consultaApi =async ()=>{
//la consulta de la api solo sucede en el montaje
try {
  const respuesta =await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
console.log(respuesta)
const dato = await respuesta.json();
console.log(dato[0])
//guardar la frase del personaje en el state
setPersonaje(dato[0])
} catch (error) {
  //mostrar unmensaje de error al usuario
console.log(error)  
}


}


  return (
    <div className="card bg-danger border border-secondary">
      <div className="container">
      <div className="d-flex justify-content-center align-content-center row">
        <div className="card-img-top d-flex justify-content-center">
          <img src="https://trello.com/1/cards/63288a1289c67400fd5b534f/attachments/632b24ad1ed8b700597e4050/previews/632b24ae1ed8b700597e418b/download/theSimpson.png" style={{width:"80%"}} className="p-3" alt="Los simpsons titulo" />
        </div>
          <button type="button" className="btn btn-warning text-dark btn-sm col-3 mt-5 mb-5">
            Obtener frase
          </button>
        </div>
      <div className="card-body">
        <Frase personaje={personaje}></Frase>
      </div>
    </div>
    </div>

  );
}

export default App;
