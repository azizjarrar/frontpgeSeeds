import React from 'react'
import style from './contact.module.scss'
import {useParams} from "react-router-dom";
const Contact = () => {
    let { title } = useParams();

    return (
        <div className={style.container}>
            <div className={style.formContainer}>
                <div className={style.header}>
                    <h1>Contact {title} </h1>
                </div>
            <form >
                <div className = "form-group">
                    <label> Email </label>
                    <input placeholder="Email"  name="nom" className="form-control" 
                        />
                </div>
                <div className = "form-group">
                    <label> UserName</label>
                    <input placeholder="UserName" name="cin" className="form-control" 
                            />
                </div>

                <textarea placeholder="message" id="w3review" name="w3review" rows="4" cols="50">
                </textarea>
                </form>
                <button className="btn btn-primary btn-block" style={{width:"90%"}} >send</button>

                </div>
        </div>
    )
}

export default Contact
