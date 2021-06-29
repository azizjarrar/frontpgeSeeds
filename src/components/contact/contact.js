import React from 'react'
import style from './contact.module.scss'
import {useParams} from "react-router-dom";
import {addcontactStaff,addcontactUser} from '../../services/contact.service'
const Contact = () => {
    let { title } = useParams();
    const [data,setData]=React.useState({})
    const changeHandler=(e)=>{
        const {name,value}=e.target
        setData(e=>{
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
        addcontactUser(data).then(res=>{
            alert("message a été envoyé")
        })
    }
    if(title=="Chercheur" || title=="AdminMet"){
        return(
            <div className={style.container}>
            <div className={style.formContainer}>
                <div className={style.header}>
                    <h1>Contact {title} </h1>
                </div>
            <form >
                <div className = "form-group">
                    <label> emetteur </label>
                    <input onChange={(e)=>changeHandler(e)} placeholder="emetteur"  name="emetteur" className="form-control" 
                        />
                </div>
                <div className = "form-group">
                    <label> recepteur</label>
                    <input onChange={(e)=>changeHandler(e)} placeholder="recepteur" name="recepteur" className="form-control" 
                            />
                </div>

                <textarea onChange={(e)=>changeHandler(e)} name="message" placeholder="message" id="w3review"  rows="4" cols="50">
                </textarea>
                </form>
                <button onClick={()=>addConctactMessage()} className="btn btn-primary btn-block" style={{width:"90%"}} >send</button>

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
                        <input   onChange={(e)=>changeHandler(e)} placeholder="emetteur"  name="emetteur" className="form-control" 
                            />
                    </div>
                    <div className = "form-group">
                        <label> user_id</label>
                        <input  onChange={(e)=>changeHandler(e)}  placeholder="user_id" name="user" className="form-control" 
                                />
                    </div>
    
                    <textarea  onChange={(e)=>changeHandler(e)}  name="message" placeholder="message" id="w3review"  rows="4" cols="50">
                    </textarea>
                    </form>
                    <button onClick={()=>addConctactUserMessage()} className="btn btn-primary btn-block" style={{width:"90%"}} >send</button>
    
                    </div>
            </div>
        )
    }

}

export default Contact
