import React from "react";
import style from '../styles/home.module.scss'
import OneImage from '../components/onePlante/onePlante'
import ble1 from '../planteImages/ble1.png'
import ble2 from '../planteImages/ble2.png'
import ble3 from '../planteImages/ble3.png'
import ble4 from '../planteImages/ble4.png'
import orge1 from '../planteImages/orge1.png'
import orge2 from '../planteImages/orge2.png'
import orge3 from '../planteImages/orge3.png'
import orge4 from '../planteImages/orge4.png'
 const  Home= (props)=>  {

    return (
      <div className={style.container}>
        <div className={style.Titles}>
          <h1>Groupes des variétés d’orge </h1>
          <h1>Groupes des variétés de blé </h1>
        </div>
            <div className={style.seedsContainer}>
              <OneImage image={ble1} description={"Le blé dur biskri se reconnaît par ses grains ambrés très clair, à écorce mince, ses glumes blanches et ses barbes noires. Sa paille est un peu haute, relativement feuillée, l’épi est peu dense, assez étroitIl a la réputation d’être une variété très résistante à la sécheresse, et également d’être un excellent semoulier"} name={"Biskri"}/>
              <OneImage image={ble2} description={"Le groupe des blés Mahmudi est très cultivé dans la région nord de Sétif. Ces blés ne doivent pas être confondus avec ceux appelés également Mahmudi en Tunisie et qui correspondent aux blés Bidi algériens. Les Mahmudi de la région Nord sétifienne sont à épi blanc, velu, compact, aplati, triangulaire plus ou moins élargi. En général le grain est clair, ambré, très recherché"} name={"Mahmoudi"}/>
              <OneImage image={ble3} description={"Paille moyenne, blanche, droite et raide. Épi extrêmement compact, deux ou trois fois plus large sur le profil que sur les épillets. Grain blanc, court, arrondi"} name={"Chili"}/>
              <OneImage image={ble4} description={": Épi noir violacé (voir Kahla) sur fond roux, d’où un aspect bigarré."} name={"Jneh khotifa"}/>
              <OneImage image={orge1} description={"Six rangs, accession d'orge nue tunisienne, récoltée en 2000, tardive et moyennement productive dans des conditions favorables"} name={"Tombari"}/>
              <OneImage image={orge2} description={"Six rangs, variété améliorée d'orge tunisienne, enregistrée en 1987, moyennement précoce et tolérante à la sécheresse et aux maladies fongiques"} name={"Rihane"}/>
              <OneImage image={orge3} description={"Six rangs, accession d'orge égyptienne récoltée dans le Nord Sinaï (Egypte) en 2005, moyennement précoce, productive dans les conditions favorables et tolérante aux maladies fongiques"} name={"Arbi"}/>
              <OneImage image={orge4} description={"Six rangs, accession d'orge égyptienne, tardive, productive dans des conditions favorables et tolérante à la sécheresse et aux maladies fongiques"} name={"Omnia"}/>
            </div>
      </div>
    );
  
}
export default Home
