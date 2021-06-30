import React from "react";
import style from './addstaf.module.scss'
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";

import {addStaf} from '../../services/staff-service'
import Register from '../register.component'

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
          <Register/>

      </div>
    )

}


export default AddStaff

