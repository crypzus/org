import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/header';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
import {v4 as uuid}  from 'uuid'

function App() {
  
  const [mostrarFormulario, actualizarMostrar] = useState(false);

  const [colaboradores,actulizarColaboradores] = useState([
    {
    id: uuid(),
    nombre:"ernestor mejias",
    puesto:"junior",
    foto:"https://avatars.githubusercontent.com/u/123489534?v=4",
    equipo:"Front End",
    fav: true
     },
  
  ]);

  //lsita de equipos
  const [equipos, actualizarEquipo] = useState([

    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
  
  {
    id: uuid(),
    titulo:"Front End",
    colorPrimario:"#82CFFA",
    colorSecundario:"#E8F8FF"
  },
  
  {
    id: uuid(),
    titulo:"Data Science",
    colorPrimario:"#A6D157",
    colorSecundario:"#F0F8E2"
  },
  
  {
    id: uuid(),
    titulo:"Devops",
    colorPrimario:"#E06B69",
    colorSecundario:"#FDE7E8"
  },
  
  {
    id: uuid(),
    titulo:"UX y Diseño",
    colorPrimario:"#DB6EBF",
    colorSecundario:"#FAE9F5"
  },
  
  {
    id: uuid(),
    titulo:"Móvil",
    colorPrimario:"#FFBA05",
    colorSecundario:"#FFF5D9"
  },
  
  {
    id: uuid(),
    titulo:"Innovación y Gestión",
    colorPrimario:"#FF8A29",
    colorSecundario:"#FFEEDF"
  }
  
  
]);

  
  //Ternario en JS-> condicion ? seMuestra :noSeMuestra
  // condicion && seMuestra


  const cambio = () =>{
    actualizarMostrar(!mostrarFormulario);
  }


  //registrar colaboradores

    const registrarColaborador = (colaborador) => {
      
      //spread operator
      actulizarColaboradores([...colaboradores, colaborador]);
    }

    console.log(uuid())

  //eliminar colaboradores 

  const eliminarColaborador = (id) => {
    
    const newColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actulizarColaboradores(newColaboradores)
  }

  //actualizar color de equipo
  const actualizarColor = (color, id)=>{
    console.log ("Actualizar:", color, id)
    const equiposActualizado = equipos.map ((equipo) =>{
      if (equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipo(equiposActualizado);
  }
  
  //CREAR EQUIPO 
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
  actualizarEquipo  ([...equipos, {...nuevoEquipo, id: uuid () }])
  }

    //funcion para el like

  const like  = (id) => {
    console.log ("like:", id)
    const colaboradorLike = colaboradores.map((colaborador)=>{
      if(colaborador.id=== id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actulizarColaboradores(colaboradorLike)
  }

  return (
    <div className="App">
      <Header/>
      {mostrarFormulario ?  <Formulario 
      equipos = {equipos.map((equipo) => equipo.titulo )}
      registrarColaborador = {registrarColaborador}
      crearEquipo = {crearEquipo}
      /> : <></>}
     
      <MiOrg cambio = {cambio}/>
          {
            equipos.map((equipo) =><Equipo
             datos = {equipo} 
              key = {equipo.titulo}
              colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo )}
              eliminarColaborador= {eliminarColaborador}
              actualizarColor = {actualizarColor}
              like = {like}
              />
            )
          }
     <Footer/>
    </div>
  );
          

}
//https://avatars.githubusercontent.com/u/123489534?v=4
export default App;

