import React from "react";
import style from '../styles/home.module.scss'
import OneImage from '../components/onePlante/onePlante'
import {getplantes} from '../services/plante-service'
 const  Home= (props)=>  {
   const [data,setData]=React.useState([])
  React.useEffect(()=>{
    getplantes().then(res=>{
      console.log(res)
      setData(res.data)
    })
    
  },[])
    return (
      <div className={style.container}>
        <div className={style.Titles}>
          <h1>Groupes des variétés d’orge </h1>
          <h1>Groupes des variétés de blé </h1>
        </div>
            <div className={style.seedsContainer}>
              <div className={style.left}>
              {data.map(e=>{
                if(e.type=="1"){
                  return <OneImage image={e.image	} description={e.description} name={e.nomPlante} id={e.id}/>
                }
              })}

              </div>
              <div className={style.right}>
              {data.map(e=>{
                if(e.type=="2"){
                  return <OneImage image={e.image	} description={e.description} name={e.nomPlante} id={e.id}/>
                }
              })}
              </div>
           
            </div>
      </div>
    );
  
}
export default Home
