import React from "react";
import style from './updateDemmande.module.scss'

const  UpdateDemmande =()=>  {
    const [options,setOptions]=React.useState([{value:"aziz","label":"aziz"},{value:"ahmed","label":"ahmed"}])



    return (
        <div className={style.container}>
              <div className={style.formContainer}>
                    <div className={style.header}><h1>Update Demmnde</h1></div>
                                <form>
                                    <div className = "form-group">
                                        <label> Nom: </label>
                                        <input disabled placeholder="Nom"  name="nom" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> C.I.N: </label>
                                        <input disabled placeholder="Carte Identite Nationale" name="cin" className="form-control" 
                                             />
                                    </div>
                                    <div className = "form-group">
                                        <label> Localisation: </label>
                                        <input  disabled placeholder="Localisation" name="localisation" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> Numero du Telephone: </label>
                                        <input disabled placeholder=" Numero du Telephone"name="numTel" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> City: </label>
                                        <input disabled placeholder="City" name="city" className="form-control" 
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
                                    <div className = "form-group">
                                    <label> Etat: </label>

                                    <select className={style.selectcss}>
                                        <option>en attendant</option>
                                        <option>acceepte </option>
                                        <option>refuse</option>
                                        </select>
                                        </div>

                                    <button className="btn btn-primary btn-block" style={{width:"90%"}} >Update</button>
                                </form>
                        </div>
        </div>
    )
}

export default UpdateDemmande






















