import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Frase from "./components/Frase";
import Spinner from "./components/Spinner";
import { Button, Container } from "react-bootstrap";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultaApi();
  }, []);

  const consultaApi = async () => {
    //la consulta de la api solo sucede en el montaje
    try {
      setMostrarSpinner(true)
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      console.log(respuesta);
      const dato = await respuesta.json();
      console.log(dato[0]);
      //guardar la frase del personaje en el state
      setPersonaje(dato[0]);
      setMostrarSpinner(false)
    } catch (error) {
      //mostrar unmensaje de error al usuario
      console.log(error);
    }
  };
  //cargar un componente comdicional
  //usamos el operador ternario
  //(condicion logica) ?(codigo si se umole la condicion logica):(logica si no se cumplela condicion)
  //const componenteCondicional = (mostrarSpinner)?():()
  const componenteCondicional =
    mostrarSpinner === true ? (
      <Spinner></Spinner>
    ) : (
      <Frase personaje={personaje}></Frase>
    );

  return (
    <Container>
      <div className="d-flex justify-content-center align-content-center row">
        <div className="card-img-top d-flex justify-content-center">
          <img
            src="https://trello.com/1/cards/63288a1289c67400fd5b534f/attachments/632b24ad1ed8b700597e4050/previews/632b24ae1ed8b700597e418b/download/theSimpson.png"
            style={{ width: "80%" }}
            className="p-3"
            alt="Los simpsons titulo"
          />
        </div>
        <Button
          type="button"
          variant={"warning"}
          className="w-50 mb-5"
          onClick={consultaApi}
        >
          Obtener frase
        </Button>
        {componenteCondicional}
      </div>
    </Container>
  );
}

export default App;
