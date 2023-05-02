import { useState } from "react"
import "./MiOrg.css"
//controla la organizacion
const MiOrg = (props) =>{
console.log(props)
    //vamos a usar los hooks -stados
    //useState()
    //la gramatica seria: const [laVariable, laFuncionActualza] = useState(valorInicial)
        // const [mostrar, actualizarMostrar] = useState(true);
        // const manejarEstado = () =>{
        //     actualizarMostrar(!mostrar);
        //     console.log("mostrar/desaparecer")
        // }
        
    

    return <section className="orgSection">  
        <h3 className="title">Mi organización</h3>
        <img src= "/img/add.svg" alt="add" onClick={props.cambio}/>

    </section>
}

export default MiOrg