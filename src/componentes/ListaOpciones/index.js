import "./ListaOpciones.css";
const ListaOpciones = (props) => {
  

  const manejarCambio = (event) =>{
    console.log ("cambio", event.target.value);
    props.actualizarEquipo(event.target.value);

  }


  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value='' disabled defaultValue="" hidden>Selecionar equipos</option>
        {props.equipos.map((equipo, index) => {
          return <option key={index} value={equipo}>{equipo}</option>;
        })}
      </select>
    </div>
  );
};
export default ListaOpciones;
