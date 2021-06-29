import React from "react";
import style from './addVisite.module.scss'
import {addvisites} from '../../services/visite-service'
const AddVisite = () => {
  const [data,setData]=React.useState({id:"1"})
  const changeHandler=(e)=>{
    const {name,value}=e.target
    setData(e=>{
      return {...e,[name]:value}
    })
  }

const selectChangeHandler=(dataSelect)=>{
  
  setData(e=>{
    return {...e,"etat":dataSelect}
  })
}

const AddVisitefn=()=>{
  addvisites(data).then(data=>{
    console.log(data)
  })
}
  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <div className={style.header}><h1>Add Vistes</h1></div>
        <form>
          <div className="form-group">
            <label> Date: </label>
            <input required onChange={(e)=>{changeHandler(e)}} placeholder="Date" type="date" name="date" className="form-control"
               />
          </div>
          <div className="form-group">
            <label> Description: </label>
            <input required onChange={(e)=>{changeHandler(e)}} placeholder="Description" name="description" className="form-control"
                />
          </div>
          <div className="form-group selectinsideAddDemmande">
          <label> Etat </label>
            <select onChange={(e)=>{selectChangeHandler(e.target.value)}} className={style.selectcss}>
                <option value="en attendant">en attendant</option>
                <option value="acceepte">acceepte </option>
                <option value="refuse">refuse</option>
            </select>
          </div>
          <button onClick={()=>AddVisitefn()} className="btn btn-primary btn-block" >Save</button>

        </form>

      </div>
    </div>

  )
}


export default AddVisite






















