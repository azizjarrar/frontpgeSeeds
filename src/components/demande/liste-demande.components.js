import React from "react";
import style from './listeDemande.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UpdateDemmande from './updateDemmande'
import {getDemandes,DeleteDemandes} from '../../services/demande-service'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



 const DemandesList=()=> {
  const [modal,setModal]=React.useState(false)
  const [data,setData]=React.useState([])
  const [modalData,setModalData]=React.useState({})

  const classes = useStyles();
  React.useEffect(()=>{
    getDemandes().then(res=>{
      console.log(res.data)
      setData(res.data)
    })
  },[])
    const openModalUpdate=(dataUpdate)=>{
      setModalData(dataUpdate)
      setModal(e=>!e)
    }
    const DelteData=(id)=>{
      DeleteDemandes(id).then(data=>{
        getDemandes().then(res=>{
          setData(res.data)
        })
      })
    }
    return (<div className={style.TableContainer}>
      {modal&&<div className={style.Modal}>
          <div className={style.close} onClick={()=>setModal(e=>!e)}></div>
          <UpdateDemmande {...modalData}/>
        </div>}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">id</TableCell>
              <TableCell align="left">Nom</TableCell>
              <TableCell align="left">cin</TableCell>
              <TableCell align="left">Localisation</TableCell>
              <TableCell align="left">Numero du Telephone</TableCell>
              <TableCell align="left">City</TableCell>
              <TableCell align="left">Quantite</TableCell>
              <TableCell align="left">DateRetour</TableCell>
              <TableCell align="left">Etat</TableCell>

              <TableCell align="left">User id</TableCell>
              <TableCell align="left">plante id</TableCell>

              <TableCell align="left">Update</TableCell>
              <TableCell align="left">delete</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.nom}</TableCell>
                <TableCell align="left">{row.cin}</TableCell>
                <TableCell align="left">{row.localisation}</TableCell>
                <TableCell align="left">{row.numTel}</TableCell>
                <TableCell align="left">{row.city}</TableCell>
                <TableCell align="left">{row.quantite}</TableCell>
                <TableCell align="left">{row.dateRetour.slice(0,10)}</TableCell>
                <TableCell align="left">{row.etat}</TableCell>


                <TableCell align="left">{row.plante}</TableCell>
                <TableCell align="left">{row.user}</TableCell>


                <TableCell align="left"><button className={style.update} onClick={()=>openModalUpdate({id:row.id,
                  nom:row.nom,cin:row.cin,localisation:row.localisation,numTel:row.numTel,city:row.city,quantite:row.quantite,dateRetour:row.dateRetour.slice(0,10),etat:row.etat}
                  )}>Update</button></TableCell>
              <TableCell align="left"><button className={style.delte} style={{backgroundColor:"#dc3545"}} onClick={()=>DelteData(row.id)} >Delete</button></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    )

}

export default DemandesList;







