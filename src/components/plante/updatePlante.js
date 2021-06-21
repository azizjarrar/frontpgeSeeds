import React from 'react'
import style from './updatePlante.module.scss'
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import Select from 'react-select'
import { useForm } from 'react-hook-form';
const updatePlante = () => {
    const savedata=()=>{

    }
    const submitData=()=>{
  
    }
    return (
        <div className={style.container}>
        <div className={style.formContainer}>
          <div className={style.header}><h1>UPDATE Plante</h1></div>
        <Form onSubmit={(e)=>submitData(e)} >
        <label> nomPlante </label>
          <Input type="text"   onChange={(e)=>savedata(e)} className="form-control" name="nomPlante" placeHolder="nomPlante" name="nomPlante"/>
          <label> Description: </label>
          <Input type="text"   onChange={(e)=>savedata(e)} className="form-control" name="description" placeHolder="description" name="description"/>
          <label> imageUrl: </label>
          <Input type="text"   onChange={(e)=>savedata(e)} className="form-control" name="imageUrl" placeHolder="imageUrl" name="imageUrl"/>

          <div className="form-group selectinsideAddDemmande">
            <label> Type </label>
              <select className={style.selectcss}>
                  <option>variétés de blé dur </option>
                  <option>variétés d’orge</option>

              </select>
             </div>              
      <button className="btn btn-primary btn-block">UPDATE </button>

                                      
         </Form>
        </div>


</div>
    )
}

export default updatePlante
