import React from 'react'
import style from './updateVisite.module.scss'
import {updavisites} from '../../services/visite-service'
const UpdateVisite = (props) => {
  const [data,setData]=React.useState(props)
  const onChangeHandler=(updateData)=>{
    const {name,value}=updateData.target
    setData(e=>{
     return  {...e,[name]:value}
    })
    console.log(data)
  }
  const selechChangeHandler=(updateData)=>{
    const data=updateData.target.value

    setData(e=>{
      return  {...e,"etat":data}
     })
  }
  const updatefn=()=>{
    updavisites(data,props.id).then(data=>{
      window.location.reload()
    })
  }
    return (
        <div className={style.container}>
        <div className={style.formContainer}>
          <div className={style.header}><h1>Mettre à jour visite</h1></div>
          <form>
            <div className="form-group">
              <label> Date: </label>
              <input onChange={(e)=>onChangeHandler(e)} value={data.date} placeholder="Date" type="date" name="date" className="form-control"
                 />
            </div>
            <div className="form-group">
              <label> Description: </label>
              <input onChange={(e)=>onChangeHandler(e)} value={data.description} placeholder="Description" disabled name="description" className="form-control"
                  />
            </div>
            <div className="form-group selectinsideAddDemmande">
            <label> Etat </label>
              <select onChange={(e)=>selechChangeHandler(e)} value={data.etat} className={style.selectcss}>
                  <option value="en attendant">en attendant</option>
                  <option value="acceepte">acceepte </option>
                  <option value="refuse">refuse</option>
              </select>
            </div>
  
          </form>
          <button onClick={()=>updatefn()} className="btn btn-primary btn-block" >Mettre à jour</button>

        </div>
      </div>
    )
}

export default UpdateVisite
