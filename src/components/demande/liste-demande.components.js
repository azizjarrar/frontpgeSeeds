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
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(Nom, Cin, Localisation, NumeroduTelephone,City,Quantite,DateRetour,Etat) {
  return { Nom, Cin, Localisation, NumeroduTelephone,City,Quantite,DateRetour,Etat };
}

const rows =  [
  createData('ahmed', "59219156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
  createData('ali', "47849156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
  createData('ahmed', "15849156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
  createData('morad', "15855156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
  createData('ahmed', "23549156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
  createData('molka', "15849156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
  createData('asma', "15849156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
  createData('morad', "99949156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
  createData('hbib', "88849156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),


];
 const DemandesList=()=> {
  const [modal,setModal]=React.useState(false)
  const classes = useStyles();
    const openModalUpdate=()=>{
      setModal(e=>!e)
    }
    return (<div className={style.TableContainer}>
      {modal&&<div className={style.Modal}>
          <div className={style.close} onClick={()=>setModal(e=>!e)}></div>
          <UpdateDemmande />
        </div>}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Nom</TableCell>
              <TableCell align="left">cin</TableCell>
              <TableCell align="left">Localisation</TableCell>
              <TableCell align="left">Numero du Telephone</TableCell>
              <TableCell align="left">City</TableCell>
              <TableCell align="left">Quantite</TableCell>
              <TableCell align="left">DateRetour</TableCell>
              <TableCell align="left">Etat</TableCell>
              <TableCell align="left">Update</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
  
                <TableCell align="left">{row.Nom}</TableCell>
                <TableCell align="left">{row.Cin}</TableCell>
                <TableCell align="left">{row.Localisation}</TableCell>
                <TableCell align="left">{row.NumeroduTelephone}</TableCell>
                <TableCell align="left">{row.City}</TableCell>
                <TableCell align="left">{row.Quantite}</TableCell>
                <TableCell align="left">{row.DateRetour}</TableCell>
                <TableCell align="left">{row.Etat}</TableCell>
                <TableCell align="left"><button className={style.update} onClick={()=>openModalUpdate()}>Update</button></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    )

}

export default DemandesList;







