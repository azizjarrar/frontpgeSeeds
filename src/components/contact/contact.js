import React from 'react'
import style from './contact.module.scss'
import {useParams} from "react-router-dom";
import {addcontactStaff,addcontactUser} from '../../services/contact.service'
const Contact = () => {
    let { idone,idtwo ,title} = useParams();
    const [data,setData]=React.useState({recepteur:"Chercheur",emetteur:localStorage.getItem("userName")})
    const [DataUser,setDataUser]=React.useState({emetteur:idone,user:idone})
    const changeHandler=(e)=>{
        const {name,value}=e.target
        setData(e=>{
            return {
                ...e,[name]:value
            }
        })
     
    }
    const changeHandlerUser=(e)=>{
        const {name,value}=e.target
        setDataUser(e=>{
            return {
                ...e,[name]:value
            }
        })
    }
    const addConctactMessage=()=>{
        addcontactStaff(data).then(res=>{
            alert("message a été envoyé")
        })
    }
    const addConctactUserMessage=()=>{
        addcontactUser(DataUser).then(res=>{
            alert("message a été envoyé")
        })
    }
    const optionHandler=(value)=>{
        console.log(value)
        setData(e=>{
            return {...e,recepteur:value}
        })
    }
    if(title=="Staff"){
        return(
            <div className={style.container}>
            <div className={style.formContainer}>
                <div className={style.header}>
                    <h1>Contact Staff </h1>
                </div>
            <form >
                <div className = "form-group">
                    <label> emetteur </label>
                    <input disabled value={localStorage.getItem("userName")} onChange={(e)=>changeHandler(e)} placeholder="emetteur"  name="emetteur" className="form-control" 
                        />
                </div>
                <div className = "form-group">
                    <label> recepteur</label>
                    <select   onChange={(e)=>{const selectedItem=e.target.value; optionHandler(selectedItem) }}  className={style.selectcss}>
                      <option value="Chercheur">Chercheur</option>
                      <option value="adminmet">Admin Métier</option>

                  </select>
                </div>

                <textarea onChange={(e)=>changeHandler(e)} name="message" placeholder="message" id="w3review"  rows="4" cols="50">
                </textarea>
                </form>
                <button onClick={()=>addConctactMessage()} className="btn btn-primary btn-block" style={{width:"90%"}} >envoyer</button>

                </div>
        </div>
        )
    }else{
        return (
            <div className={style.container}>
                <div className={style.formContainer}>
                    <div className={style.header}>
                        <h1>Contact {title} </h1>
                    </div>
                <form >
                    <div className = "form-group">
                        <label> emetteur </label>
                        <input    defaultValue={idone} onChange={(e)=>changeHandlerUser(e)} placeholder="emetteur"  name="emetteur" className="form-control" 
                            />
                    </div>
                    <div className = "form-group">
                        <label> username</label>
                        <input   defaultValue={idtwo}  onChange={(e)=>changeHandlerUser(e)}  placeholder="username" name="user" className="form-control" 
                                />
                    </div>
    
                    <textarea  onChange={(e)=>changeHandlerUser(e)}  name="message" placeholder="message" id="w3review"  rows="4" cols="50">
                    </textarea>
                    </form>
                    <button onClick={()=>addConctactUserMessage()} className="btn btn-primary btn-block" style={{width:"90%"}} >envoyer</button>
    
                    </div>
            </div>
        )
    }

}

export default Contact
