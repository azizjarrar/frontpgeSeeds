import React from "react";
import style from './updateDemmande.module.scss'
import {updateDemandes} from '../../services/demande-service'
const  UpdateDemmande =(props)=>  {
    const [data,setData]=React.useState(props)
    const changeHandler=(passedData)=>{
      
        console.log(passedData.target.name)
        const {name,value}=passedData.target
            setData(oldData=>{
                return {...oldData,[name]:value}
            })
        
    
        console.log(data)
    }
    const changeHandlerSelect=(passedData)=>{
        const data=passedData.target.value
        setData(oldData=>{
            return {...oldData,"etat":data}
        })
    }
    const update=()=>{
        updateDemandes(data,props.id).then(data=>{
            console.log(data)
        })
    }
    return (
        <div className={style.container}>
              <div className={style.formContainer}>
                    <div className={style.header}><h1>Update Demmnde</h1></div>
                                <form>
                                    <div className = "form-group">
                                        <label> Nom: </label>
                                        <input onChange={(e)=>changeHandler(e)} value={data.nom}disabled placeholder="Nom"  name="nom" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> C.I.N: </label>
                                        <input onChange={(e)=>changeHandler(e)} value={data.cin}disabled placeholder="Carte Identite Nationale" name="cin" className="form-control" 
                                             />
                                    </div>
                                    <div className = "form-group">
                                        <label> Localisation: </label>
                                        <input  onChange={(e)=>changeHandler(e)} value={data.localisation}disabled placeholder="Localisation" name="localisation" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> Numero du Telephone: </label>
                                        <input onChange={(e)=>changeHandler(e)} value={data.numTel}disabled placeholder=" Numero du Telephone"name="numTel" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> City: </label>
                                        <input onChange={(e)=>changeHandler(e)} value={data.city}disabled placeholder="City" name="city" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> Quantite: </label>
                                        <input onChange={(e)=>changeHandler(e)} value={data.quantite}placeholder="Quantite" name="quantite" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> Date Retour: </label>
                                        <input onChange={(e)=>changeHandler(e)} value={data.dateRetour}placeholder="Date Retour" type="date" name="dateRetour" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                    <label> Etat: </label>

                                    <select onChange={(e)=>changeHandlerSelect(e)} value={data.etat} className={style.selectcss}>
                                        <option value="en attendant">en attendant</option>
                                        <option value="acceepte">acceepte </option>
                                        <option value="refuser">refuser</option>
                                        </select>
                                        </div>
                                        <button onClick={()=>update()} className="btn btn-primary btn-block" style={{width:"90%"}} >Update</button>

                                </form>

                        </div>
        </div>
    )
}

export default UpdateDemmande






















