import React from 'react'
import style from './onePlante.module.scss'
import image from '../../planteImages/ble1.png'
const onePlante = (props) => {
    return (
        <div className={style.container}>
            <div className={style.planteImage}><img src={props.image}/></div>
              <div className={style.nameAndDescription}>
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <button>Commande</button>
            </div>
        </div>
    )
}

export default onePlante
