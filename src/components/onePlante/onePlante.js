import React from 'react'
import style from './onePlante.module.scss'
import {Link} from "react-router-dom";
const onePlante = (props) => {
    return (
        <div className={style.container}>
            <div className={style.planteImage}><img src={props.image}/></div>
              <div className={style.nameAndDescription}>
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <Link to={"/Demmandeuser/"+props.id}><button>Commande</button></Link>
            </div>
        </div>
    )
}

export default onePlante
