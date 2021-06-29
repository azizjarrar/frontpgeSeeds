import React from "react";
import style from './addstaf.module.scss'
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";

import {addStaf} from '../../services/staff-service'


 const AddStaff=()=> {
  const [options,setOptions]=React.useState([{value:"Aa","label":"admin"},{value:"ahmed","label":"ahmed"}])
  const [stafData,setStafData]=React.useState({"role":"AdminMet"})


  const savedata=(e)=>{
    const {name,value}=e.target
    setStafData(e=>{
      return {...e,[name]:value}
    })
  }
  const submitData=(e)=>{
    e.preventDefault();

  }
  const addStaff=()=>{
    addStaf(stafData).then(data=>{
      alert("staff membre a éte ajoute")
    })
  }
  const selectChangeHandler=(dataSelect)=>{
  
    setStafData(e=>{
      return {...e,"role":dataSelect}
    })
  }
    return (
        <div className={style.container}>
            <div className={style.formContainer}>
              <div className={style.header}><h1>Add Staff</h1></div>
            <Form onSubmit={(e)=>submitData(e)} >
              <Input type="text"    onChange={(e)=>savedata(e)} className="form-control" name="username" placeHolder="username" name="username"/>
              <Input type="text"    onChange={(e)=>savedata(e)} className="form-control" name="matricule" placeHolder="matricule" name="matricule"/>
              <Input type="text"    onChange={(e)=>savedata(e)} className="form-control" name="email" placeHolder="email" name="email"/>
              <Input type="text" type="password"   onChange={(e)=>savedata(e)} className="form-control" name="password" placeHolder="password" name="password"/>
              <div className={style.selectContainer}>
              <select onChange={(e)=>{selectChangeHandler(e.target.value)}} className={style.selectcss}>
                <option value="AdminMet">AdminMet</option>
                <option value="Chercheur">Chercheur</option>
   
            </select>
              </div>
              <button onClick={(e)=>addStaff()} className="btn btn-primary btn-block">S A V E</button>

                                          
             </Form>
            </div>

      </div>
    )

}


export default AddStaff

