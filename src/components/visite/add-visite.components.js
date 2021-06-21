import React from "react";
import style from './addVisite.module.scss'
const AddVisite = () => {




  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <div className={style.header}><h1>Add Vistes</h1></div>
        <form>
          <div className="form-group">
            <label> Date: </label>
            <input placeholder="Date" type="date" name="date" className="form-control"
               />
          </div>
          <div className="form-group">
            <label> Description: </label>
            <input placeholder="Description" name="description" className="form-control"
                />
          </div>
          <div className="form-group selectinsideAddDemmande">
          <label> Etat </label>
            <select className={style.selectcss}>
                <option>en attendant</option>
                <option>acceepte </option>
                <option>refuse</option>
            </select>
          </div>

          <button className="btn btn-primary btn-block" >Save</button>
        </form>
      </div>
    </div>

  )
}


export default AddVisite






















