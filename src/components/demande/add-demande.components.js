import React from "react";
import style from './addDemande.module.scss'

const  AddDemande =()=>  {
    const [options,setOptions]=React.useState([{value:"aziz","label":"aziz"},{value:"ahmed","label":"ahmed"}])



    return (
        <div className={style.container}>
              <div className={style.formContainer}>
                    <div className={style.header}><h1>Add Demmnde</h1></div>
                                <form>
                                    <div className = "form-group">
                                        <label> Nom: </label>
                                        <input placeholder="Nom"  name="nom" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> C.I.N: </label>
                                        <input placeholder="Carte Identite Nationale" name="cin" className="form-control" 
                                             />
                                    </div>
                                    <div className = "form-group">
                                        <label> Localisation: </label>
                                        <input placeholder="Localisation" name="localisation" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> Numero du Telephone: </label>
                                        <input placeholder=" Numero du Telephone"name="numTel" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> City: </label>
                                        <input placeholder="City" name="city" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> Quantite: </label>
                                        <input placeholder="Quantite" name="quantite" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> Date Retour: </label>
                                        <input placeholder="Date Retour" type="date" name="dateRetour" className="form-control" 
                                            />
                                    </div>


                                    <button className="btn btn-primary btn-block" style={{width:"90%"}} >Save</button>
                                </form>
                        </div>
        </div>
    )
}

export default AddDemande






















