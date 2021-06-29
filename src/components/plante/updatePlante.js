import React from 'react'
import style from './updatePlante.module.scss'
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import {updateplantes} from '../../services/plante-service'
const UpdatePlante = (props) => {
  const [data,setData]=React.useState(props)
  console.log(props)
    const savedata=(e)=>{
      const {name,value}=e.target
      setData(e=>{
        return {...e,[name]:value}
      })
    }
    const changeHandlerSelect=(passedData)=>{
      const data=passedData.target.value
      setData(oldData=>{
          return {...oldData,"type_id":data}
      })
    }
    const UpdateDate=()=>{
      updateplantes(data,props.id).then(data=>{
        console.log(data)
      })
    }
    return (
        <div className={style.container}>
        <div className={style.formContainer}>
          <div className={style.header}><h1>UPDATE Plante</h1></div>
        <Form  >
        <label> nomPlante </label>
          <Input type="text"   value={data.nomPlante} onChange={(e)=>savedata(e)} className="form-control" name="nomPlante" placeHolder="nomPlante" name="nomPlante"/>
          <label> Description: </label>
          <Input type="text"   value={data.description} onChange={(e)=>savedata(e)} className="form-control" name="description" placeHolder="description" name="description"/>
          <label> imageUrl: </label>
          <Input type="text"   value={data.image} onChange={(e)=>savedata(e)} className="form-control" name="image" placeHolder="imageUrl" />

          <div className="form-group selectinsideAddDemmande">
            <label> Type </label>
              <select onChange={(e)=>changeHandlerSelect(e)} value={data.type_id} className={style.selectcss}>
                  <option value="1">variétés de blé dur </option>
                  <option value="2">variétés d’orge</option>

              </select>
             </div>              

                                      
         </Form>
         <button onClick={()=>UpdateDate()} className="btn btn-primary btn-block">UPDATE </button>

        </div>


</div>
    )
}

export default UpdatePlante
