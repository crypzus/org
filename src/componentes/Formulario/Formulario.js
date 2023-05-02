import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";


const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState('');

  //CREAS ESTADOS para actualizae el color y el nombre de los equipos creados 

  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

  
  const {registrarColaborador, crearEquipo} = props

  const manejarEnvio = (event) => {
    event.preventDefault();
        let datosAEnviar = { 
        nombre: nombre,
        puesto: puesto,
        foto: foto,
        equipo: equipo
        };
        registrarColaborador(datosAEnviar);
        
    };

    const manejarNuevoEquipo  = (event) =>{
      event.preventDefault();
      crearEquipo({titulo,colorPrimario: color}) // => (tiutlo:titulo, color:color)
    }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar nombre..."
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar puesto..."
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto de Github.."
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones 
        valor ={equipo} 
        actualizarEquipo = {actualizarEquipo}
        equipos = {props.equipos}
        />
        <Boton>
          Crear
          </Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar titulo..."
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar color..."
          required
          valor={color}
          actualizarValor={actualizarColor}
          type = "color"
        />

          <Boton>
          Crear
          </Boton>
        </form>
    </section>
  );
};
export default Formulario;
