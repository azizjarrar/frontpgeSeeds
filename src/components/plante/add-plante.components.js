import React from "react";
import style from './addPlante.module.scss'
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";

import { addplantes } from '../../services/plante-service'
 const AddPlante =()=>  {
  const [plant,setPlante]=React.useState({"type":"1"})
  const savedata=(e)=>{
    const {name,value}=e.target
    setPlante(e=>{
      return {...e,[name]:value}
    })
  }
const optionHandler=(data)=>{
  setPlante(e=>{
    return {...e,"type":data}
  })
  
}
const saveDatafn=()=>{
  addplantes(plant).then(res=>{
    alert("plante a éte ajouter")
  })
}
  //Plante(id, nomPlante, description, type).
  //Intervention(id, description )
  return(<div className={style.container}>
            <div className={style.formContainer}>
              <div className={style.header}><h1>Ajouter Plante</h1></div>
            <Form  >
            <label> nomPlante </label>
              <Input type="text"   onChange={(e)=>savedata(e)} className="form-control" name="nomPlante" placeHolder="nomPlante" name="nomPlante"/>
              <label> Description: </label>
              <Input type="text"   onChange={(e)=>savedata(e)} className="form-control" name="description" placeHolder="description" name="description"/>
              <label> imageUrl: </label>
              <Input type="text"   onChange={(e)=>savedata(e)} className="form-control" name="image" placeHolder="imageUrl" />

              <div className="form-group selectinsideAddDemmande">
                <label> Type </label>
                  <select   onChange={(e)=>{
                    const selectedItem=e.target.value
                    optionHandler(selectedItem)
                  }}  className={style.selectcss}>
                      <option value="1">variétés de blé dur </option>
                      <option value="2">variétés d’orge</option>

                  </select>
                 </div>              
                                    
             </Form>
             <button onClick={()=>saveDatafn()} className="btn btn-primary btn-block">SAUVEGARDER</button>

            </div>


  </div>)
}


export default AddPlante


