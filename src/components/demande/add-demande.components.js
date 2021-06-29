import React from "react";
import style from './addDemande.module.scss'
import {addDemandes} from '../../services/demande-service'
const  AddDemande =()=>  {
    const [data,setData]=React.useState([])

    const changeHandler=(e)=>{
        const {name,value}=e.target
        setData(e=>{
            return {...e,[name]:value}
        })
    }
    const saveData=()=>{
        addDemandes(data).then(res=>{
            console.log(res)
        })
    }
    return (
        <div className={style.container}>
              <div className={style.formContainer}>
                    <div className={style.header}><h1>Add Demmnde</h1></div>
                                <form>
                                    <div className = "form-group">
                                        <label> Nom: </label>
                                        <input onChange={(e)=>changeHandler(e)} placeholder="Nom"  name="nom" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> C.I.N: </label>
                                        <input onChange={(e)=>changeHandler(e)} placeholder="Carte Identite Nationale" name="cin" className="form-control" 
                                             />
                                    </div>
                                    <div className = "form-group">
                                        <label> Localisation: </label>
                                        <input onChange={(e)=>changeHandler(e)} placeholder="Localisation" name="localisation" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> Numero du Telephone: </label>
                                        <input onChange={(e)=>changeHandler(e)} placeholder=" Numero du Telephone"name="numTel" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> City: </label>
                                        <input onChange={(e)=>changeHandler(e)} placeholder="City" name="city" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> Quantite: </label>
                                        <input onChange={(e)=>changeHandler(e)} placeholder="Quantite" name="quantite" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> Date Retour: </label>
                                        <input onChange={(e)=>changeHandler(e)} placeholder="Date Retour" type="date" name="dateRetour" className="form-control" 
                                            />
                                    </div>


                                </form>
                                <button onClick={(e)=>saveData(e)}  className="btn btn-primary btn-block" style={{width:"100%"}} >Save</button>

                        </div>
        </div>
    )
}

export default AddDemande






















